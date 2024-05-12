"use client";

import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { Button, Tooltip } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
// sidebar
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

const Navbar = () => {
  const pathname = usePathname();

  if (
    pathname == "/" ||
    pathname == "/consultation" ||
    pathname == "/compare"
  ) {
    return (
      <div className="navbar bg-white mb-8 fixed top-0 z-10">
        <div className="navbar-start w-1/5">
          <a className="btn btn-ghost text-xl">
            <span className="text-green-500 -mr-1">Agro</span>Merce
          </a>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal gap-10 px-1">
            <li
              className={pathname === "/" ? "border-b-2 border-green-500" : ""}
            >
              <a>Home</a>
            </li>
            <li
              className={
                pathname === "/consultation"
                  ? "border-b-2 border-green-500"
                  : ""
              }
            >
              <a>Consultation</a>
            </li>
            <li
              className={
                pathname === "/compare" ? "border-b-2 border-green-500" : ""
              }
            >
              <a>Compare</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-8">
          <FaBalanceScale className="w-8 h-8" />
          <FaShoppingCart className="w-7 h-7" />
          <FaHeart className="w-7 h-7" />
          <Link href={"/signin"} className="btn text-white">
            {" "}
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  if (
    pathname == "/admin" ||
    pathname == "/admin/users" ||
    pathname == "/admin/all-product" ||
    pathname == "/admin/pra-planting" ||
    pathname == "/admin/post-planting" ||
    pathname == "/admin/add-product"
  ) {
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
                <Sidebar.Item href="/admin/all-product">
                  All Product
                </Sidebar.Item>
                <Sidebar.Item href="/admin/pra-planting">
                  Pra-Planting
                </Sidebar.Item>
                <Sidebar.Item href="/admin/post-planting">
                  Post-Planting
                </Sidebar.Item>
              </Sidebar.Collapse>
            </div>
            <div
              className={
                pathname == "/admin/add-product"
                  ? "bg-green-200 rounded-lg"
                  : ""
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

  return null
};

export default Navbar;
