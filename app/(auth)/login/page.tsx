"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className=" flex flex-col justify-center items-center h-full">
      <div className="sm:w-2/4 w-full space-y-6 flex flex-col justify-center items-center">
        <Image
          src="https://metricapp.co/wp-content/uploads/2022/06/Group-55830.png"
          alt="logo"
          width={200}
          height={200}
        />
        <span className="font-bold text-xl text-center">
          Login to your Business Account
        </span>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <span className="font-xl font-bold text-gray-500">
          Forgot Password?
        </span>
        <Link href="/dashboard" className=" w-full">
          <Button className=" w-full text-white bg-metric p-4">Log In</Button>
        </Link>{" "}
        <Separator className="bg-gray-300" />
        <Button className="bg-[#333333] text-white w-full space-x-2 ">
          <FcGoogle size={20} />
          <span> Continue with Google</span>{" "}
        </Button>
        <span className="text-center">
          Dont have an account?{" "}
          <Link href="/sign-up" className="text-metric font-bold">
            Signup now!
          </Link>
        </span>
        <span className="text-xs text-center">
          By signing up I agree to the privacy policy and terms and conditions
        </span>
      </div>
    </div>
  );
};

export default Login;
