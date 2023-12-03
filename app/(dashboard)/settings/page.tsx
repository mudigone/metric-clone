import Link from "next/link";
import React from "react";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaCircleUser } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { MdRepeatOn } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

const settingsItems = [
  {
    name: "Billing",
    icon: <RiMoneyDollarCircleFill size={45} className="text-metric" />,
    href: "/settings/billing",
    description: "Details of your subscriptions & billing",
  },
  {
    name: "Profile",
    icon: <FaCircleUser size={40} className="text-gray-600" />,
    href: "/settings/profile",
    description: "Information about yourself",
  },
  {
    name: "Contact Us",
    icon: <FaSquarePhone size={40} className="text-green-600" />,
    href: "/settings/contact",
    description: "Get in touch with us if you have any questions",
  },
  {
    name: "Recurring Transactions",
    icon: <MdRepeatOn size={40} className="text-metric" />,
    href: "/settings/transactions",
    description: "Make your transactions for convenience and efficiency",
  },
];

const Settings = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-xl font-bold">Settings</span>
        <span className="text-xs text-muted-foreground">
          All your account settings here
        </span>
      </div>
      <div className=" rounded-lg h-3/4 space-y-8 p-6 bg-white border border-gray-100 ">
        {settingsItems.map((item, index) => {
          return (
            <div key={item.href}>
              <Link
                className="flex flex-col gap-2 hover:bg-gray-100 p-2 rounded-lg"
                href={item.href}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <div className="flex flex-col">
                    <span className="font-bold">{item.name}</span>
                    <span className="text-muted-foreground text-xs">
                      {item.description}
                    </span>
                  </div>
                </div>
              </Link>
              <Separator className="bg-gray-100 " />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Settings;
