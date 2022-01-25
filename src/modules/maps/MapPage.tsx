import React, { useEffect, useState } from "react";

import { Map } from "./Map";
import USA from "../../assets/usa";

import Admin from "src/layouts/Admin";
import { SalesDonutChart } from "./SalesDonutChart";
import { SalesBarChart } from "./SalesBarChart";
import { useStateStats } from "./useStateStats";
import { motion, useAnimation } from "framer-motion";

const MapPage = () => {
  const [selectedState, setSelectedState] = useState<string>();
  const { data: stats } = useStateStats(selectedState);
  // Manually control the framer-motion animation as we are triggering it when
  // the user click on the map and the selected state changes.
  const controls = useAnimation();

  useEffect(() => {
    // Trigger the animation on mount
    controls.start({ right: [-100, 0], opacity: [0, 1] });
  }, [controls]);

  function handleLocationClick(location: any) {
    setSelectedState(location.target.id);

    // Trigger the animation on click
    controls.start({ right: [-100, 0], opacity: [0, 1] });
  }

  const selectedStateName = USA.locations.find(
    (state) => state.id === selectedState
  )?.name;

  return (
    <>
      <div className="flex flex-wrap overflow-x-hidden">
        <div className="flex w-full px-4 space-x-4">
          <motion.div
            animate={{ left: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="relative flex w-full min-w-0 p-6 mb-6 break-words bg-white rounded shadow-lg"
          >
            <Map onLocationClick={handleLocationClick} />
          </motion.div>
          <motion.div
            animate={controls}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col flex-1 flex-shrink-0 p-6 mb-6 break-words bg-white rounded shadow-lg min-w-min"
          >
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
                  data: stats?.target ?? [67, 33],
                  fill: false,
                  barThickness: 8,
                },
              ]}
            />
            <h2 className="my-6 font-bold text-center">Breakdown by city</h2>
            <SalesBarChart
              labels={
                stats?.cities?.map((c: any) => c.name) ?? [
                  "Kansas City",
                  "Saint Louis",
                  "Springfield",
                  "Columbia",
                ]
              }
              datasets={[
                {
                  label: "Sales",
                  backgroundColor: "#ed64a6",
                  data: stats?.cities?.map((c: any) => c.value) ?? [
                    23, 67, 34, 45,
                  ],
                },
              ]}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

MapPage.layout = Admin;

export default MapPage;
