"use client";

import { Sidebar } from "flowbite-react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

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
          <div
            className={pathname == "/admin" ? "bg-green-200 rounded-lg" : ""}
          >
            <Sidebar.Item href="/admin" icon={HiChartPie}>
              <p className="">Dashboard</p>
            </Sidebar.Item>
          </div>
          <div
            className={
              pathname == "/admin/users" ? "bg-green-200 rounded-lg" : ""
            }
          >
            <Sidebar.Item href="/admin/users" icon={HiUser}>
              Users
            </Sidebar.Item>
          </div>
          <div
            className={
              pathname === "/admin/all-product" ||
              pathname === "/admin/pra-planting" ||
              pathname === "/admin/post-planting"
                ? "bg-green-200 rounded-lg"
                : ""
            }
          >
            <Sidebar.Collapse href="#" icon={HiShoppingBag} label="Products">
              <Sidebar.Item href="/admin/all-product">All Product</Sidebar.Item>
              <Sidebar.Item href="/admin/pra-planting">Pra-Planting</Sidebar.Item>
              <Sidebar.Item href="/admin/post-planting">Post-Planting</Sidebar.Item>
            </Sidebar.Collapse>
          </div>
          <div
            className={
              pathname == "/admin/add-product" ? "bg-green-200 rounded-lg" : ""
            }
          >
            <Sidebar.Item href="/admin/add-product" icon={BiSolidCartAdd}>
              Add product
            </Sidebar.Item>
          </div>
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
