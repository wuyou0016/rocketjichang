// 上线后把网址推送给 IndexNow（Bing 等搜索引擎共用）。
// 用法：
//   npm run indexnow                         推送线上 sitemap 里的全部网址
//   npm run indexnow -- knowledge/xxx/ ...   只推送指定路径（或完整网址）；Git Bash 里路径不要以 / 开头，会被改写成本机路径
// 读取线上 sitemap 而不是本地 dist，保证只推送已经部署出去的页面。
import { readdirSync, readFileSync } from 'node:fs';

const SITE = 'https://rocketjichang.com';
const HOST = new URL(SITE).host;

const keyFile = readdirSync(new URL('../public/', import.meta.url)).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error('public/ 下没有找到 IndexNow key 文件（32 位十六进制 .txt）');
const key = readFileSync(new URL(`../public/${keyFile}`, import.meta.url), 'utf8').trim();
const keyLocation = `${SITE}/${keyFile}`;

const live = await fetch(keyLocation);
if (!live.ok || (await live.text()).trim() !== key) throw new Error(`线上 key 文件不可用：${keyLocation}（先部署再推送）`);

async function sitemapUrls() {
  const locs = async (u) => [...(await (await fetch(u)).text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const index = await locs(`${SITE}/sitemap-index.xml`);
  return (await Promise.all(index.map(locs))).flat();
}

const args = process.argv.slice(2);
const urls = args.length ? args.map((a) => new URL(a, SITE + '/').href) : await sitemapUrls();
const foreign = urls.filter((u) => new URL(u).host !== HOST);
if (foreign.length) throw new Error(`只能推送 ${HOST} 的网址：${foreign.join(', ')}`);
if (!urls.length) throw new Error('没有可推送的网址');

const body = JSON.stringify({ host: HOST, key, keyLocation, urlList: urls });
for (const endpoint of ['https://api.indexnow.org/indexnow', 'https://www.bing.com/indexnow']) {
  const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body });
  console.log(`${endpoint} → HTTP ${res.status}${res.ok ? '' : ' ' + (await res.text()).slice(0, 200)}`);
}
console.log(`已推送 ${urls.length} 个网址`);
