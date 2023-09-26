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
    <nav className="p-8">
      <div className="container mx-auto">

        {/* navigation for desktop */}
        <ul className={`hidden md:flex justify-between space-x-4 ${open}`}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={`text-[18px] transition duration-300 ${
                    pathname == item.path
                      ? "text-primary font-bold"
                      : "text-gray"
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
          className={`h-screen bg-white z-50 p-8 w-screen fixed top-0 flex flex-col md:hidden gap-8 transition-all duration-500 ease-in-out ${
            open ? `right-0` : `right-[-100%]`
          }`}
        >
          <div
            className="ml-auto text-primary text-xl"
            onClick={() => handleToggleClick()}
          >
            x
          </div>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={`text-[18px] transition duration-300 ${
                    pathname == item.path
                      ? "text-primary font-bold"
                      : "text-gray"
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
          className="ml-auto block md:hidden z-50"
          onClick={() => handleToggleClick()}
        />
      </div>
    </nav>
  );
};

export default Navbar;
