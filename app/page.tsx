'use client';
import { CategoryItems, CategoryViewer } from '@/components/CategoryViewer';
import { mockFeaturesAndTrends } from './_data/feature-trends';
import { useRouter } from 'next/navigation';
import { useFeaturedAndTrendingStore } from './_stores';
 
function getMockFeaturedItems(): Readonly<CategoryItems> {
  const filteredResult = useFeaturedAndTrendingStore(
    (state) => state.filteredFeaturedAndTrending,
  );

  const items = mockFeaturesAndTrends.featured;
  const randomIndex = Math.floor(Math.random() * 6);

  return {
    title: 'Featured',
    description: 'Curated top picks from this week.',
    items: filteredResult
      ? filteredResult.featured
      : items.slice(randomIndex, randomIndex + 4),
  } as const;
}

function getMockTrendingItems(): Readonly<CategoryItems> {
  const filteredResult = useFeaturedAndTrendingStore(
    (state) => state.filteredFeaturedAndTrending,
  );

  const items = mockFeaturesAndTrends.trending;
  const randomIndex = Math.floor(Math.random() * 5);

  return {
    title: 'Trending',
    description: 'Most popular by community.',
    items: filteredResult
      ? filteredResult.trending
      : items.slice(randomIndex, randomIndex + 4),
  } as const;
}

export default function LandingPage() {
  const filteredResult = useFeaturedAndTrendingStore(
    (state) => state.filteredFeaturedAndTrending,
  );
  const router = useRouter();
  return (
    <div>
      <div className="mt-5">
        <CategoryViewer
          categoryDetails={getMockFeaturedItems()}
          onClick={(index) => {
            router.push(`/featured/${index}`);
          }}
        />
      </div>
      <div className="mt-5">
        <CategoryViewer categoryDetails={getMockTrendingItems()} />
      </div>
    </div>
  );
}
