import create from 'zustand';
import { CategoryItem } from '@/components/CategoryViewer';

export type FeaturedAndTrending = {
  featured: CategoryItem[];
  trending: CategoryItem[];
};
interface SearchFeaturedAndTrending {
  search: string;
  setSearch: (search: string) => void;
  filteredFeaturedAndTrending?: FeaturedAndTrending;
  setFilteredFeaturedAndTrending: (value?: FeaturedAndTrending) => void;
}

export const useFeaturedAndTrendingStore = create<SearchFeaturedAndTrending>(
  (set) => ({
    search: '',
    setSearch: (search) => set({ search }),
    filteredFeaturedItems: undefined,
    setFilteredFeaturedAndTrending: (value) =>
      set({ filteredFeaturedAndTrending: value }),
  }),
);
