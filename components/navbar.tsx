"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { TiPlus } from "react-icons/ti";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxHamburgerMenu } from "react-icons/rx";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarItems } from "./sidebar";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex px-8 py-4 items-center justify-between sticky">
      <div className="flex justify-center items-center space-x-2">
        <Sheet>
          <SheetTrigger>
            <RxHamburgerMenu className="sm:hidden cursor-pointer" size={20} />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <div className="flex  flex-col space-y-2">
                {sidebarItems.map((item, index) => {
                  const isSelected = pathname.includes(item.href);
                  return (
                    <Link key={index} href={item.href}>
                      <div
                        className={
                          isSelected
                            ? `flex items-center space-x-2 text-white bg-metric rounded-2xl px-4 py-2 `
                            : `flex items-center space-x-2 hover:bg-metric hover:text-white rounded-2xl px-4 py-2 text-black `
                        }
                      >
                        {item.icon}
                        <span>{item.name}</span>
                      </div>
                    </Link>
                  );
                })}
                <Separator className="bg-gray-300" />
                <Popover>
                  <PopoverTrigger>
                    <div className="text-white rounded-3xl bg-black px-4 py-2 items-center flex ">
                      <TiPlus /> Add Transaction
                    </div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="flex flex-col space-y-2 text-white">
                      <Button className="bg-metric">Add Income</Button>
                      <Button className="bg-metric">Add Expense</Button>
                      <Button className="bg-metric">
                        Add Withdrawal/Deposit
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
                <span className="bg-gray-100 font-bold px-4 py-1 rounded-2xl border border-solid border-gray-500 ">
                  AUD
                </span>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <Link href="/dashboard">
          <Image
            src="https://metricapp.co/wp-content/uploads/2022/06/Group-55830.png"
            alt="logo"
            width={130}
            height={130}
            priority
          />
        </Link>
      </div>
      <div className="flex space-x-8 justify-center items-center">
        <Popover>
          <PopoverTrigger className="hidden sm:block">
            <div className="text-white rounded-3xl bg-metric px-3 py-1 items-center flex ">
              <TiPlus /> Add Transaction
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col space-y-2 text-white">
              <Button className="bg-metric">Add Income</Button>
              <Button className="bg-metric">Add Expense</Button>
              <Button className="bg-metric">Add Withdrawal/Deposit</Button>
            </div>
          </PopoverContent>
        </Popover>

        <span className="bg-gray-100 font-bold px-4 py-1 rounded-2xl border border-solid border-gray-500 hidden sm:block">
          AUD
        </span>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex space-x-2 text-xs justify-center items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>MM</AvatarFallback>
            </Avatar>
            <div className="hidden flex-col sm:flex">
              <span className="font-bold">Muhammad Mudassir</span>
              <span className="text-xs">user@gmail.com</span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/settings/profile">
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">
                Profile
              </DropdownMenuItem>
            </Link>
            <Link href="/settings/billing">
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">
                Billing
              </DropdownMenuItem>
            </Link>
            <Link href="/login">
              <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">
                Log out
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
