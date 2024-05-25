export type Feature = {
    id: number;
    name: string;
    description: string;
    date?: string;
  };
  
  export type FeaturesAndTrends = {
    featured: Feature[];
    trending: Feature[];
  };
  