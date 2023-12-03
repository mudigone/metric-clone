import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const Reports = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-xl font-bold">Reports</span>
        <span className="text-xs text-muted-foreground">Latest Reports </span>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Input
          placeholder="Search for the reports"
          className="w-2/3 sm:w-2/5"
        />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filters" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filters</SelectLabel>

              <SelectItem value="banana">Active</SelectItem>
              <SelectItem value="blueberry">Inactive</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button>Apply</Button>
      </div>

      <div className="p-20 flex justify-center items-center bg-white rounded-xl">
        <span className="text-muted-foreground font-bold">
          No reports found!
        </span>
      </div>
    </div>
  );
};

export default Reports;
