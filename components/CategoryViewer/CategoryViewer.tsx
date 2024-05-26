'use client';

import React from "react";

export type CategoryItem = {
  id: number;
  name: string;
  description: string;
  date?: string;
};
export type CategoryItems = {
  title: string;
  description: string;
  items: CategoryItem[];
  data?: any[];
};

export function CategoryViewer({
  categoryDetails,
  onClick,
}: Readonly<{
  categoryDetails: CategoryItems;
  onClick?: (id: number) => void;
}>) {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
      setHydrated(true);
  }, []);
  if (!hydrated) {
      // Returns null on first render, so the client and server match
      return null;
  }
  return (
    <div className="text-left">
      <h2 className="text-2xl font-medium">{categoryDetails.title}</h2>
      <p className="text-gray-500 mt-2 text-sm mb-5">
        {categoryDetails.description}
      </p>
      <div className="grid grid-cols-2 gap-4 border ml-5 mx-auto">
        {categoryDetails.items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 border-gray-200 border rounded flex flex-row mb-5 p-4 hover:cursor-pointer hover:bg-slate-50 transition duration-1000 ease-in-out"
            onClick={() => {
              onClick && onClick(item.id);
            }}
          >
            <div className="border border-gray-200 m-4 rounded bg-gray-200 w-36 h-20"></div>

            <div className="flex flex-col justify-center">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-xs">{item.description}</p>
              {item.date && (
                <time className="text-xs text-gray-500" dateTime={item.date}>
                  {item.date}
                </time>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
