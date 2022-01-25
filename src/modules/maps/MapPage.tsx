import React, { useMemo, useState } from "react";

import { Map } from "./Map";
import USA from "../../assets/usa";

import Admin from "src/layouts/Admin";
import { SalesDonutChart } from "./SalesDonutChart";
import { SalesBarChart } from "./SalesBarChart";

const MapPage = () => {
  const [selectedState, setSelectedState] = useState<string>();

  const stats = useMemo(
    () => [
      { id: "ak", data: [76, 24] },
      { id: "ar", data: [24, 76] },
      { id: "az", data: [75, 23] },
      { id: "ca", data: [63, 37] },
      { id: "co", data: [17, 83] },
      { id: "ct", data: [47, 53] },
      { id: "dc", data: [84, 16] },
      { id: "de", data: [84, 16] },
      { id: "fl", data: [35, 65] },
      { id: "ga", data: [42, 58] },
      { id: "hi", data: [63, 37] },
      { id: "ia", data: [91, 9] },
      { id: "id", data: [57, 43] },
      { id: "il", data: [27, 73] },
      { id: "in", data: [76, 24] },
      { id: "ks", data: [86, 14] },
      { id: "ky", data: [57, 43] },
      { id: "la", data: [48, 52] },
      { id: "ma", data: [50, 50] },
      { id: "md", data: [25, 75] },
      { id: "me", data: [23, 77] },
      { id: "mi", data: [86, 14] },
      { id: "mn", data: [25, 75] },
      { id: "mo", data: [57, 43] },
      { id: "ms", data: [27, 73] },
      { id: "mt", data: [76, 24] },
      { id: "nc", data: [86, 14] },
      { id: "nd", data: [57, 43] },
      { id: "ne", data: [48, 52] },
      { id: "nh", data: [50, 50] },
      { id: "nj", data: [25, 75] },
      { id: "nm", data: [23, 77] },
      { id: "nv", data: [86, 14] },
      { id: "ny", data: [57, 43] },
      { id: "oh", data: [27, 73] },
      { id: "ok", data: [76, 24] },
      { id: "or", data: [86, 14] },
      { id: "pa", data: [57, 43] },
      { id: "ri", data: [48, 52] },
      { id: "sc", data: [50, 50] },
      { id: "sd", data: [25, 75] },
      { id: "tn", data: [23, 77] },
      { id: "tx", data: [86, 14] },
      { id: "ut", data: [76, 24] },
      { id: "va", data: [23, 77] },
      { id: "vt", data: [63, 37] },
      { id: "wa", data: [17, 83] },
      { id: "wi", data: [47, 53] },
      { id: "wv", data: [84, 16] },
      { id: "wy", data: [84, 16] },
    ],
    []
  );

  function handleLocationClick(location: any) {
    setSelectedState(location.target.id);
  }

  const selectedStateName = USA.locations.find(
    (state) => state.id === selectedState
  )?.name;

  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex w-full px-4 space-x-4">
          <div className="relative flex w-full min-w-0 p-6 mb-6 break-words bg-white rounded shadow-lg">
            <Map onLocationClick={handleLocationClick} />
          </div>
          <div className="relative flex flex-col flex-1 flex-shrink-0 p-6 mb-6 break-words bg-white rounded shadow-lg min-w-min">
            <h1 className="text-xl font-semibold">
              Sales {selectedStateName ?? "Total"}
            </h1>
            <hr className="mt-4 border-t border-gray-200" />
            <h2 className="my-6 font-bold text-center">Target Sales %</h2>
            <SalesDonutChart
              labels={["Done", "Remaining"]}
              datasets={[
                {
                  backgroundColor: ["#ed64a6", "#eee"],
                  borderColor: ["#ed64a6", "#eee"],
                  data: stats.find((state) => state.id === selectedState)
                    ?.data ?? [67, 33],
                  fill: false,
                  barThickness: 8,
                },
              ]}
            />
            <h2 className="my-6 font-bold text-center">Breakdown by city</h2>
            <SalesBarChart
              labels={["Kansas City", "Saint Louis", "Springfield", "Columbia"]}
              datasets={[
                {
                  label: "Sales",
                  backgroundColor: "#ed64a6",
                  data: [23, 67, 34, 45],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

MapPage.layout = Admin;

export default MapPage;
