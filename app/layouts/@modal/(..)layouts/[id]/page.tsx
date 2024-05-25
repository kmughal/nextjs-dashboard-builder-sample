'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockLayouts } from '@/app/_data';
import { ChartData } from '@/app/_types';
 
export default function LayoutModal({ params }: { params: { id: number } }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const search = mockLayouts.find((item) => item.id === +params.id);
  if (!search) {
    return;
  }
  return (
    <div className="flex items-center justify-center">
      {isOpen && (
        <div className="fixed inset-0 flex flex-wrap items-center justify-center z-50 text-black max-w-full overflow-auto">
          <div
            className="bg-white rounded shadow-lg mt-5 top-10"
            style={{ maxWidth: '768px', maxHeight: '100vh' }}
          >
            <main className="p-4 overflow-auto w-full">
              <div className="text-center">
                <h1 className="text-4xl font-bold mt-5">
                  {search.layoutName}
                  <span className="text-sm text-gray-500 ml-5 font-normal align-text-top">
                    Layout
                  </span>
                </h1>
                <p className="text-center text-gray-500 mt-2">
                  {search.layoutDescription}
                </p>
                <div className="flex flex-row justify-center mb-10">
                  {search.kpi.metricIds.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="border rounded p-1 m-1 border-gray-300 text-gray-500 bg-gray-200"
                      >
                        # {item}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-row justify-between items-stretch">
                  <div className="flex flex-col">
                    <div className="text-medium">{search.kpiBeingUsed}</div>
                    <div className="text-gray-500 text-sm">Used</div>
                  </div>
                  <div className="flex flex-col border-l-2 border-gray-300">
                    <div className="text-medium ml-20">Universal</div>
                    <div className="ml-20 text-gray-500 text-sm">Type</div>
                  </div>
                  <div className="flex flex-col border-l-2 border-gray-300">
                    <div className="ml-20 text-medium">
                      {search.amountOfPages}
                    </div>
                    <div className="ml-20 text-gray-500 text-sm">Pages</div>
                  </div>
                  <div className="flex flex-col border-l-2 border-gray-300">
                    <div className="ml-20 text-medium">
                      {search.lastUpdated}
                    </div>
                    <div className="ml-20 text-gray-500 text-sm">
                      Last updated
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{ width: '100%', height: 300 }}
                    className="border rounded border-gray-300 bg-white mt-5"
                  >
                    {search.kpi.charts.map((chart: ChartData) => (
                      <div key={chart.name}>{chart.getChart()}</div>
                    ))}
                  </div>
                </div>
                <div className="text-left">
                  <h2 className="text-xl font-medium ml-4 mt-5">
                    Business Questions
                  </h2>
                  <div className="grid grid-cols-2 gap-4 border ml-5 mx-auto">
                    {search.kpi.businessQuestions.map((item, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 border-gray-200 border rounded flex flex-row mb-5 p-4"
                      >
                        <div className="flex flex-col justify-center">
                          <h3 className="font-medium">Question {index + 1}</h3>
                          <p className="text-xs">{item}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <button
                className="px-4 py-2 text-white bg-sky-950 rounded w-full"
                onClick={() => {
                  setIsOpen(false);
                  router.push('/kpi');
                }}
              >
                Favorite Item
              </button>
            </main>
          </div>
        </div>
      )}
    </div>
  );
}
