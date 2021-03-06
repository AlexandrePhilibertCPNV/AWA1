import USA from "src/assets/usa";
import { SVGMap } from "react-svg-map";

import "react-svg-map/lib/index.css";
import { useState } from "react";

type MapProps = {
  onLocationClick?: (location: any) => void;
};

export const Map = ({ onLocationClick }: MapProps) => {
  // Track the selected state in order to manually set which state is selected
  // on the map. This allows us to apply a custom style to the selected state.
  const [selectedLocation, setSelectedLocation] = useState(null);

  function handleLocationClick(location: any) {
    setSelectedLocation(location.target.id);

    if (onLocationClick) {
      onLocationClick(location);
    }
  }

  return (
    <SVGMap
      onLocationClick={handleLocationClick}
      map={USA}
      locationClassName="fill-current text-blue-300 outline-none hover:text-blue-400 cursor-pointer"
      isLocationSelected={(location: any) => location.id === selectedLocation}
    />
  );
};
