import USA from "src/assets/usa";
import { SVGMap } from "react-svg-map";

import "react-svg-map/lib/index.css";

type MapProps = {
  onLocationClick?: (location: any) => void;
};

export const Map = ({ onLocationClick }: MapProps) => {
  return (
    <SVGMap
      onLocationClick={onLocationClick}
      map={USA}
      locationClassName="fill-current text-blue-300 outline-none hover:text-blue-400 cursor-pointer"
      isLocationSelected={(location: any) => true}
    />
  );
};
