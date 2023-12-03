"use client";

import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { LuActivity } from "react-icons/lu";
import { IoDocumentText } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { usePathname } from "next/navigation";

export const sidebarItems = [
  {
    name: "Dashboard",
    icon: <FaHome size={25} />,
    href: "/dashboard",
  },

  {
    name: "Activity",
    icon: <LuActivity size={25} />,
    href: "/activity",
  },
  {
    name: "Reports",
    icon: <IoDocumentText size={25} />,
    href: "/reports",
  },
  {
    name: "Products",
    icon: <FaCartArrowDown size={25} />,
    href: "/products",
  },
  {
    name: "Users",
    icon: <FaUsers size={25} />,
    href: "/users",
  },
  {
    name: "Settings",
    icon: <IoSettings size={25} />,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="p-4 h-full hidden sm:block ">
      <div className="flex flex-col space-y-4">
        {sidebarItems.map((item, index) => {
          const isSelected = pathname.includes(item.href);
          return (
            <Link
              key={index}
              href={item.href}
              className={
                isSelected
                  ? `flex items-center space-x-2 text-white bg-metric rounded-2xl px-4 py-2 `
                  : `flex items-center space-x-2 hover:bg-metric hover:text-white rounded-2xl px-4 py-2  `
              }
            >
              {item.icon}
              <span className="hidden md:block">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
