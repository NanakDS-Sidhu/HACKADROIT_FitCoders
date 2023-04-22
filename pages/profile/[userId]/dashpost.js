import React from "react";
import Sidebar from "../../../components/Sidebar";
import Card from "../../../components/Card";
import Members from "@/components/Members";
const dashpost = () => {
  return (
    <>
      <div className="flex h-screen">
        <Sidebar />
        <div className="overflow-y-scroll">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <Members/>
      </div>
    </>
  );
};

export default dashpost;