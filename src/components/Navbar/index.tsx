"use client";

import { menuItems } from "@/data/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import HamburgerMenuIcon from "../Icons/hamburgerMenu";

const Navbar = () => {
  const router = useRouter();

  const [open, setOpen] = useState<Boolean>(false);
  const pathname = usePathname();

  const handleToggleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="container mx-auto p-8 lg:px-0 lg:py-8">
      {/* navigation for desktop */}
      <ul className={`hidden justify-between space-x-4 md:flex ${open}`}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={`text-[18px] transition duration-300 ${
                  pathname == item.path ? "font-bold text-primary" : "text-gray"
                }`}
                href={item.path}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* navigation for mobile  */}
      <ul
        className={`fixed top-0 z-50 flex h-screen w-screen flex-col gap-8 bg-white p-8 transition-all duration-500 ease-in-out md:hidden ${
          open ? `right-0` : `right-[-100%]`
        }`}
      >
        <div
          className="ml-auto text-xl text-primary "
          onClick={() => handleToggleClick()}
        >
          <span className="rounded-full px-2 ">X</span>
        </div>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a
                className={`text-[18px] transition duration-300 ${
                  pathname == item.path ? "font-bold text-primary" : "text-gray"
                }`}
                onClick={() => {
                  setOpen(false);
                  router.push(item.path);
                }}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>

      <HamburgerMenuIcon
        className="z-50 ml-auto block md:hidden"
        onClick={() => handleToggleClick()}
      />
    </nav>
  );
};

export default Navbar;
