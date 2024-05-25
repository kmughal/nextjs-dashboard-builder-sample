'use client';

import { mockLayouts } from "@/app/_data";
import { ChartData } from "@/app/_types";


export default function LayoutPage({ params }: { params: { id: string } }) {
  const search = mockLayouts.find((item) => item.id === +params.id);
  if (!search) {
    return;
  }
  return (
    <>
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
            <div className="ml-20text-medium">{search.amountOfPages}</div>
            <div className="ml-20 text-gray-500 text-sm">Pages</div>
          </div>
          <div className="flex flex-col border-l-2 border-gray-300">
            <div className="ml-20 text-medium">{search.lastUpdated}</div>
            <div className="ml-20 text-gray-500 text-sm">Last updated</div>
          </div>
        </div>
        <div>
          <h1>{search.kpi.description}</h1>
          <div style={{ width: '100%', height: 300 }}>
            {search.kpi.charts.map((chart: ChartData) => (
              <div key={chart.name}>{chart.getChart()}</div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium ml-4 mb-5">Business Questions</h2>
          <div className="grid grid-cols-2 gap-4 border ml-5 mx-auto">
            {search.kpi.businessQuestions.map((item, index) => (
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
    </>
  );
}
