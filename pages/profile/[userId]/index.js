import React from "react";
import Sidebar from "../../../components/Sidebar";
import OrgCard from "../../../components/OrgCard";
import Members from "@/components/Members";
const index = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="w-full overflow-y-scroll">
          <div class=" border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 ">
            <OrgCard />
            <OrgCard />
            <OrgCard />
            <OrgCard />
          </div>
        </div>
        <Members />
      </div>
    </>
  );
};

export default index;
