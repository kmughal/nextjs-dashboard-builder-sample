'use client';
import { notFound } from 'next/navigation';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { mockKpis } from '@/app/_data';
import { ChartData } from '@/app/_types';

export default function LayoutModal({ params }: { params: { id: number } }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  const search = mockKpis.find((item) => item.id === +params.id);
  if (!search) {
    return notFound();
  }

  return (
    <div className="flex items-center justify-center h-screen">
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 text-black">
          <div className="bg-white rounded shadow-lg w-1/3">
            <header className="px-4 py-2 bg-black-200 border-b border-gray-300 rounded-t text-black">
              <h2 className="text-lg">{search.description}</h2>
            </header>

            <main className="p-4">
              <div>
                <div style={{ width: '100%', height: 500 }}>
                  {search.charts.map((chart: ChartData) => (
                    <div key={chart.name}>{chart.getChart()}</div>
                  ))}
                </div>
              </div>
            </main>

            <footer className="px-4 py-2 bg-gray-200 border-t border-gray-300 rounded-b">
              <button
                className="px-4 py-2 text-white bg-red-500 rounded"
                onClick={() => {
                  setIsOpen(false);
                  router.push('/kpi');
                }}
              >
                Close Modal
              </button>
            </footer>
          </div>
        </div>
      )}
    </div>
  );
}
