import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-xl font-bold">Profile</span>
        <span className="text-xs text-muted-foreground">
          Account Information
        </span>
      </div>
      <div className="p-8 bg-white rounded-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4  ">
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Country" />
          <Input placeholder="DOB" />
          <Input placeholder="Full Address" />
          <Button className="bg-metric">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
