import World from "src/assets/world";
import { SVGMap } from "react-svg-map";

import "react-svg-map/lib/index.css";

/**
 * TODO: Use this instead : https://www.npmjs.com/package/react-svg-map
 */
export const Map = () => {
  return (
    <SVGMap
      map={World}
      locationClassName="fill-current text-blue-300 outline-none hover:text-blue-400 cursor-pointer"
    />
  );
};
