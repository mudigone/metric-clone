import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Users = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-xl font-bold">Users</span>
        <span className="text-xs text-muted-foreground">
          Manage users access here
        </span>
      </div>

      <div className="rounded-lg bg-white p-8 flex justify-center items-center max-h-full flex-col gap-6 ">
        <Image
          src="https://web.metricapp.co/assets/adduser-c42cd3bd.svg"
          alt="users-image"
          width={700}
          height={200}
        />
        <span className="text-xl font-bold">Invite Users</span>
        <span>Invite users who would manage accounts on your behalf</span>
        <Button className="bg-[#ffdd4a] text-black font-bold hover:bg-yellow-400 px-12 py-1 rounded-xl ">
          Invite Users
        </Button>
      </div>
    </div>
  );
};

export default Users;
