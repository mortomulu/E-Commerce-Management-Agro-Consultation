"use client";

import { Sidebar } from "flowbite-react";
import { BiBuoy, BiLogOutCircle, BiSolidCartAdd } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

export default function SideNavbar() {
  return (
    <Sidebar
      aria-label="Sidebar with content separator example"
      className="fixed w-56 h-screen top-0"
    >
      <h1 className="text-2xl font-semibold mb-10 ml-4">
        {" "}
        <span className="text-green-500">Agro</span>Merce
      </h1>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Collapse href="#" icon={HiShoppingBag} label="Products">
            <Sidebar.Item href="#">All Product</Sidebar.Item>
            <Sidebar.Item href="#">Pra-Planting</Sidebar.Item>
            <Sidebar.Item href="#">Post-Planting</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={BiSolidCartAdd}>
            Add product
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={BiLogOutCircle}>
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
