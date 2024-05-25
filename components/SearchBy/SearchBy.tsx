'use client';

import { useEffect, useState } from 'react';
import { searchResults } from './utils';
import { useSearchStore, useFeaturedAndTrendingStore, useKpiStore } from '@/app/_stores';



type SearchResultSetter = {
  [key: string]: {
    setFiltering: (value: any | undefined) => void;
    resetSearch: () => void;
    setSearch: (value: string) => void;
    search: string | undefined;
  };
};

export const SearchBy = ({ path }: { path: string }) => {
  const { selectedPath, setSelectedPath } = useSearchStore((state) => state);
  const {
    setFilteredFeaturedAndTrending,
    setSearch: setSearchForFeaturedAndTrending,
    search: searchedFeaturedAndTrending,
  } = useFeaturedAndTrendingStore((state) => state);

  const {
    setKpis,
    setSearch: setSearchForKpis,
    search: searchedKpi,
  } = useKpiStore((state) => state);

  const searchResultSetter: SearchResultSetter = {
    '/': {
      setFiltering: setFilteredFeaturedAndTrending,
      resetSearch: () => setFilteredFeaturedAndTrending(undefined),
      setSearch: setSearchForFeaturedAndTrending,
      search: searchedFeaturedAndTrending,
    },
    '/kpi': {
      setFiltering: setKpis,
      resetSearch: () => setKpis(undefined),
      setSearch: setSearchForKpis,
      search: searchedKpi,
    },
  } as const;

  const currentPath = path in searchResultSetter ? path : '/';
  const { setSearch, resetSearch, search, setFiltering } =
    searchResultSetter[currentPath];
  const [inputValue, setInputValue] = useState(search || '');

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    const search = (event.target as HTMLInputElement).value;
    setSearch(search);
    const lookup = searchResults[path](search);
    setFiltering(lookup);

  };

  const handleClear = () => {
    setInputValue('');
    setSearch('');
    resetSearch();
  };

  useEffect(() => {
    setInputValue(search || '');
    const currentPath = path in searchResultSetter ? path : selectedPath;
    setSelectedPath(currentPath);
  }, [path]);

  return (
    <div className="relative mt-5">
      <input
        type="text"
        placeholder="Type to search..."
        className="p-2 border-gray-300 border rounded placeholder:text-sm w-full"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleSearch}
      />
      {inputValue && (
        <button
          onClick={handleClear}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      )}
    </div>
  );
};
