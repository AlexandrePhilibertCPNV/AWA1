import { useEffect } from "react";

import { isServer } from "src/lib/isServer";

import "svgmap/dist/svgMap.min.css";

/**
 * TODO: Use this instead : https://www.npmjs.com/package/react-svg-map
 */
export const Map = () => {
  useEffect(() => {
    if (!isServer) {
      // Dynamically import svgmap as the module is trying to access the window
      // object on the server side...
      import("svgmap").then(({ default: svgMap }) => {
        new svgMap({
          targetElementID: "map",
          colorNoData: "#aaa",
          data: {
            data: {
              gdp: {
                name: "GDP per capita",
                format: "{0} USD",
                thousandSeparator: ",",
                thresholdMax: 50000,
                thresholdMin: 1000,
              },
              change: {
                name: "Change to year before",
                format: "{0} %",
              },
            },
            applyData: "gdp",
            values: {
              AF: { gdp: 587, change: 4.73 },
              AL: { gdp: 4583, change: 11.09 },
              DZ: { gdp: 4293, change: 10.01 },
            },
          },
        });
      });
    }
  }, []);

  return <div id="map"></div>;
};
