'use client';
import { useRouter } from 'next/navigation';
import { mockLayouts } from '../_data';
 
export default function LayoutsPage() {
  const data = mockLayouts;
  const router = useRouter();
  return (
    <div className="mt-5">
      <div className="text-left">
        <h2 className="text-2xl font-medium">Layout Templates</h2>
        <p className="text-gray-500 mt-2 text-sm mb-5">
          This is a generic page where you can render all the current supported
          layouts.
        </p>
        <div className="grid grid-cols-2 gap-4 border ml-5 mx-auto">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="bg-gray-100 border-gray-200 border rounded flex flex-row mb-5 p-4 hover:cursor-pointer hover:bg-slate-50 transition duration-1000 ease-in-out"
              onClick={() => {
                router.push(`/layouts/${item.id}`);
              }}
            >
              <div className="border border-gray-200 m-4 rounded bg-gray-200 w-36 h-20"></div>

              <div className="flex flex-col justify-center">
                <h3 className="font-medium">{item.layoutName}</h3>
                <p className="text-xs">{item.layoutDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
