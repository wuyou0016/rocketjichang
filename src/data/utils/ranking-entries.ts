import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { isDemoEntry } from './demo-filter';
import { getPublishableProviders } from './provider-publish-gate';

export interface PublishedRankingEntry {
  providerName: string;
  providerSlug: string;
  rank: number;
  score: number;
  reason: string;
}

export interface RankingPageData {
  ranking: CollectionEntry<'rankings'> | undefined;
  entries: PublishedRankingEntry[];
}

// 供三个子榜单页面共用：按 slug 查找真实（非 demo）Ranking 记录，
// 并只保留候选集中"通过 Provider Publish Gate"的条目，
// Ranking 本身不重新判断发布门槛，直接复用 isProviderPublishable。
export async function getRankingPageData(slug: string): Promise<RankingPageData> {
  const [rankings, publishableProviders] = await Promise.all([
    getCollection('rankings', ({ id }) => !isDemoEntry(id)),
    getPublishableProviders(),
  ]);

  const ranking = rankings.find((entry) => entry.data.slug === slug);

  if (!ranking) {
    return { ranking: undefined, entries: [] };
  }

  const entries: PublishedRankingEntry[] = ranking.data.entries
    .map((entry) => {
      const provider = publishableProviders.find((p) => p.id === entry.providerId.id);
      if (!provider) return null;
      return {
        providerName: provider.data.name,
        providerSlug: provider.data.slug,
        rank: entry.rank,
        score: entry.score,
        reason: entry.reason,
      };
    })
    .filter((entry): entry is PublishedRankingEntry => entry !== null)
    .sort((a, b) => a.rank - b.rank);

  return { ranking, entries };
}
