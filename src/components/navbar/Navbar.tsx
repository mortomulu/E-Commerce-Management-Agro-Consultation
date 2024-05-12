"use client";

import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";
import { Button, Tooltip } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  const pathname = usePathname();

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
            className={
              pathname === `${url}` ? "border-b-2 border-green-500" : ""
            }
          >
            <a>Home</a>
          </li>
          <li
            className={
              pathname === `${url}/consultation` ? "border-b-2 border-green-500" : ""
            }
          >
            <a>Consultation</a>
          </li>
          <li
            className={
              pathname === `${url}/compare` ? "border-b-2 border-green-500" : ""
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
};

export default Navbar;
