import React, { PropsWithChildren } from "react";

// components

import AdminNavbar from "src/components/Navbars/AdminNavbar";
import Sidebar from "src/components/Sidebar/Sidebar";
import HeaderStats from "src/components/Headers/HeaderStats";
import FooterAdmin from "src/components/Footers/FooterAdmin";

export default function Admin({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
