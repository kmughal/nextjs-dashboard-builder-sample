'use client';

import { useRouter } from 'next/navigation';
import { mockKpis } from '../_data';
import { useKpiStore } from '../_stores';


export default function KpiPage() {
  const router = useRouter();
  const filteredKpis = useKpiStore((state) => state.kpis);
  const items = filteredKpis || mockKpis;

  const data = {
    title: 'Kpi',
    description: 'Some Kpi which we provide and support.',
    items: items,
  } as const;

  return (
    <div className="mt-5">
      <div className="text-left">
        <h2 className="text-2xl font-medium">{data.title}</h2>
        <p className="text-gray-500 mt-2 text-sm mb-5">{data.description}</p>
        <div className="grid grid-cols-2 gap-4 border ml-5 mx-auto">
          {data.items.map((item, index) => (
            <div
              key={item.id}
              className="bg-gray-100 border-gray-200 border rounded flex flex-row mb-5 p-4 hover:cursor-pointer  hover:bg-slate-50 transition duration-1000 ease-in-out"
              onClick={() => {
                router.push(`/kpi/${item.id}`);
              }}
            >
              <div className="border border-gray-200 m-4 rounded bg-gray-200 w-36 h-20"></div>

              <div className="flex flex-col justify-center">
                <h3 className="font-medium">{item.description}</h3>
                <p className="text-xs">{item.description}</p>
                <p className="text-xs text-gray-500">
                  {item.affiliateApplicability}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
