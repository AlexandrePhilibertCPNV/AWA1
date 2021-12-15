import React from "react";

import { Map } from "./Map";

import Admin from "src/layouts/Admin";

const MapPage = () => (
  <>
    <div className="flex flex-wrap">
      <div className="flex w-full px-4 space-x-4">
        <div className="relative flex min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-6">
          <Map />
        </div>
        <div className="relative flex flex-col flex-1 min-w-min flex-shrink-0 break-words bg-white mb-6 shadow-lg rounded p-6">
          <h1 className="text-xl font-semibold">Satistiques</h1>
          <hr className="border border-gray-200 my-4" />
          <h2></h2>
        </div>
      </div>
    </div>
  </>
);

MapPage.layout = Admin;

export default MapPage;
