import React from "react";

import { Map } from "./Map";

import Admin from "src/layouts/Admin";

const MapPage = () => (
  <>
    <div className="flex flex-wrap">
      <div className="w-full px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <Map />
        </div>
      </div>
    </div>
  </>
);

MapPage.layout = Admin;

export default MapPage;
