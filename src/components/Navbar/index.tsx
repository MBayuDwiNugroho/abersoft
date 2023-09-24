'use client'

import { menuItems } from "@/data/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathname = usePathname();
  return (
    <nav className="p-8">
      <div className="container mx-auto">
        <ul className="flex justify-between space-x-4">
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={`text-[18px] transition duration-300 ${
                    pathname == item.path ? "text-primary font-bold" : "text-gray"
                  }`}
                  href={item.path}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}

          {/* <li>
            <a className="text-gray font-light text-[18px]" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="text-gray font-light text-[18px]" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="text-gray font-light text-[18px]" href="#">
              References
            </a>
          </li>
          <li>
            <a className="text-gray font-light text-[18px]" href="#">
              Contact
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
