'use client';

import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { mockKpis } from '@/app/_data';


export default function Layout({ params }: { params: { id: string } }) {
  const router = useRouter();
  const search = mockKpis.find((item) => item.id === +params.id);
  if (!search) {
    return notFound();
  }

  return (
    <div className="">
      <h1 className="text-2xl mt-2 mb-4">{search.description}</h1>

      <div className="mt-5">
        <div className="text-left">
          <p className="text-gray-500 text-sm ml-4">
            There are {search.charts.length} set(s) available for charts.
          </p>
          <h2 className="text-xl font-medium ml-4 mb-5">Business Questions</h2>
          <div className="grid grid-cols-2 gap-4 border ml-5 mx-auto">
            {search.businessQuestions.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 border-gray-200 border rounded flex flex-row mb-5 p-4"
              >
                <div className="border border-gray-200 m-4 rounded bg-gray-200 w-36 h-20"></div>

                <div className="flex flex-col justify-center">
                  <h3 className="font-medium">Question {index + 1}</h3>
                  <p className="text-xs">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
