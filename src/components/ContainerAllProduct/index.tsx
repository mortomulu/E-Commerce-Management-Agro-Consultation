"use client"

import TableAllProduct from "@/components/Table/TableAllProduct";
import SideNavbar from "@/components/Sidebar/SideNavbar";
import { useState } from "react";

const ContainerAllProduct = () => {

  return (
    <div className="h-auto flex">
      <SideNavbar />
      <TableAllProduct />
    </div>
  );
};

export default ContainerAllProduct