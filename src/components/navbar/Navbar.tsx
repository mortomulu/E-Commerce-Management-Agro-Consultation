"use client"

import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaBalanceScale } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar bg-white mb-8 fixed top-0 z-10">
      <div className="navbar-start w-1/5">
        <a className="btn btn-ghost text-xl">
          <span className="text-green-500">Agro</span>merce
        </a>
      </div>
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal gap-10 px-1">
          <li className="border-b-2 border-green-500">
            <a>Home</a>
          </li>
          <li>
            <a>Consultation</a>
          </li>
          <li>
            <a>Compare</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex gap-8">
        <FaBalanceScale className="w-8 h-8" />

        <FaShoppingCart className="w-7 h-7" />
        <FaHeart className="w-7 h-7" />
        <a className="btn text-white">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
