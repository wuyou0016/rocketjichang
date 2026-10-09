// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// sitemap 的 lastmod 取内容 frontmatter 里真实的更新日期（articles/glossary 的 updatedAt，pages 的 updated），
// 不使用构建时间；没有逐页日期的模板页（品牌页、对比页、首页）使用最近一次整体改版日期。
const SITE_REVISION = '2026-09-26';
const root = path.dirname(fileURLToPath(import.meta.url));
/** @type {Map<string, string>} */
const lastmodByPath = new Map();

/** @param {string} file */
function readFrontmatter(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return m ? m[1] : '';
}

/**
 * 递归读取 dir 下的 md 文件；rel 是相对 dir 的路径，toPath 把文件 id 换成站内 URL。
 * @param {string} dir @param {(id: string, type?: string) => string | null} toPath @param {string} key @param {string} [rel]
 */
function collect(dir, toPath, key, rel = '') {
  const current = path.join(dir, rel);
  if (!fs.existsSync(current)) return;
  for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      collect(dir, toPath, key, `${rel}${entry.name}/`);
      continue;
    }
    if (!/\.mdx?$/.test(entry.name)) continue;
    const fm = readFrontmatter(path.join(current, entry.name));
    const date = (fm.match(new RegExp(`^${key}:\\s*"?(\\d{4}-\\d{2}-\\d{2})`, 'm')) || [])[1];
    const type = (fm.match(/^type:\s*"?(\w+)"?/m) || [])[1];
    const id = `${rel}${entry.name.replace(/\.mdx?$/, '')}`;
    const p = toPath(id, type);
    if (p && date) lastmodByPath.set(p, date);
  }
}

/** @type {Record<string, string>} */
const typeBase = { knowledge: '/knowledge/', tutorial: '/tutorials/', troubleshooting: '/troubleshooting/', news: '/news/' };
collect(path.join(root, 'src/content/articles'), (id, type) => (type && typeBase[type] ? `${typeBase[type]}${id}/` : null), 'updatedAt');
collect(path.join(root, 'src/content/glossary'), (id) => `/glossary/${id}/`, 'updatedAt');
collect(path.join(root, 'src/content/pages'), (id) => `/${id}/`, 'updated');

/** @param {string} prefix */
function maxDate(prefix) {
  let best = SITE_REVISION;
  for (const [p, d] of lastmodByPath) if (p.startsWith(prefix) && d > best) best = d;
  return best;
}

/** @param {string} pathname */
function lastmodFor(pathname) {
  const exact = lastmodByPath.get(pathname);
  if (exact) return exact;
  for (const hub of ['/knowledge/', '/tutorials/', '/troubleshooting/', '/glossary/']) {
    if (pathname === hub) return maxDate(hub);
  }
  return SITE_REVISION;
}

// Sitemap inclusion policy（见 RocketJichang Crawl / Indexability Foundation v1.0）：
// - 排除 404 页面（不是可索引内容）
// - 排除任何带 query string 的 URL（canonical 不含 query，sitemap 也不应包含）
// - 排除任何路径片段命中 demo/mock 关键词的 URL（开发占位数据的防御性兜底，
//   正式发布门槛应在页面生成阶段就不产出这些路径，这里是第二道防线）
// - 排除分页类路径（/page/ 或 ?page=），除非该分页本身是独立有价值的 canonical 页面
/** @param {string} pageUrl @returns {boolean} */
function isSitemapExcluded(pageUrl) {
  const url = new URL(pageUrl);

  if (url.pathname === '/404' || url.pathname === '/404/' || url.pathname === '/404.html') {
    return true;
  }
  if (url.search) {
    return true;
  }
  if (/\/(demo|mock)(-|\/|$)/i.test(url.pathname)) {
    return true;
  }
  if (/\/page\/\d+\/?$/.test(url.pathname)) {
    return true;
  }
  return false;
}

// https://astro.build/config
export default defineConfig({
  // sitemap 需要绝对域名才能生成 canonical 绝对 URL，正式 canonical host 见 CLAUDE.md / SEO Foundation。
  site: 'https://rocketjichang.com',
  integrations: [
    sitemap({
      filter: (page) => !isSitemapExcluded(page),
      serialize(item) {
        item.lastmod = lastmodFor(new URL(item.url).pathname);
        return item;
      },
    }),
  ],
});
