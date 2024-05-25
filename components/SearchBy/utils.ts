'use client';

import { FeaturedAndTrending } from '@/app/_stores';
import { CategoryItem } from '../CategoryViewer';
import { Kpi } from '@/app/_types';
import { mockFeaturesAndTrends, mockKpis } from '@/app/_data';

const searchResultsForFeaturedAndTrends = (
  search: string,
): FeaturedAndTrending => {
  const filterFeatures = mockFeaturesAndTrends.featured.filter(
    (feature: CategoryItem) =>
      feature.name.toLowerCase().includes(search) ||
      feature.description.toLowerCase().includes(search),
  ) as CategoryItem[];

  const filterTrending = mockFeaturesAndTrends.trending.filter(
    (trend: CategoryItem) =>
      trend.name.toLowerCase().includes(search) ||
      trend.description.toLowerCase().includes(search),
  ) as CategoryItem[];
  return { featured: filterFeatures, trending: filterTrending };
};

const searchResultsForKpis = (search: string): Kpi[] => {
  return mockKpis.filter(
    (kpi:Kpi) =>
      kpi.description.toLowerCase().includes(search) ||
      kpi.affiliateApplicability.toLowerCase().includes(search) ||
      kpi.businessQuestions.includes(search),
  ) as Kpi[];
};

export type SearchActionsProps = {
  [key: string]: (search: string) => FeaturedAndTrending | Kpi[];
};

export const searchResults: SearchActionsProps = {
  '/': searchResultsForFeaturedAndTrends,
  '/kpi': searchResultsForKpis,
} as const;
