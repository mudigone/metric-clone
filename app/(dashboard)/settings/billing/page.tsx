"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Billing = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between flex-wrap gap-4">
        <div className="flex flex-col">
          <span className="text-xl font-bold">Billing</span>
          <span className="text-xs text-muted-foreground">
            Details of your subscriptions & billing
          </span>
        </div>
        <Dialog>
          <DialogTrigger>
            <div className="bg-[#ffdd4a] text-black font-bold hover:bg-yellow-400 px-4 py-1 rounded-xl">
              Promo Code
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Do you have promo code?</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col gap-4 mt-4">
              <Input placeholder="Enter promo code" />

              <Button className="bg-[#ffdd4a] text-black font-bold hover:bg-yellow-400 px-4 py-1 rounded-xl">
                Apply
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div>
        <section className="w-full ">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
              <Card className="p-2 min-w-fit	">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">
                    Basic Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$19.99/mo</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Realtime financial dashboard
                  </p>
                  <ol className="list-decimal list-inside mt-4 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />
                      Automatic Metrics Tracking
                    </li>
                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />2
                      Add/Save Products
                    </li>

                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />
                      Cloud-based Transaction
                    </li>
                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />
                      Business and Competition
                    </li>
                  </ol>
                </CardContent>
                <Button className="bg-metric" disabled>Choose Plan</Button>
              </Card>
              <Card className="p-2 min-w-fit	">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">
                    Pro Plan
                  </CardTitle>
                  <Badge className="bg-metric">Most Popular</Badge>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$49.99/mo</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Suited for small businesses and startups.
                  </p>
                  <ol className="list-decimal list-inside mt-4 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />
                      Automatic Metrics Tracking
                    </li>
                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />2
                      Add/Save Products
                    </li>

                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />
                      Cloud-based Transaction
                    </li>
                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />
                      Business and Competition
                    </li>
                  </ol>
                </CardContent>
                <Button className="bg-metric">Choose Plan</Button>
              </Card>
              <Card className="p-2 min-w-fit">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">
                    Enterprise Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$99.99/mo</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Ideal for larger enterprises and corporations.
                  </p>
                  <ol className="list-decimal list-inside mt-4 text-gray-500 dark:text-gray-400">
                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />
                      Automatic Metrics Tracking
                    </li>
                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />2
                      Add/Save Products
                    </li>

                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />
                      Cloud-based Transaction
                    </li>
                    <li className="flex items-center">
                      <IconCheck className="w-4 h-4 mr-2 text-green-500" />
                      Business and Competition
                    </li>
                  </ol>
                </CardContent>
                <Button className="bg-metric" disabled>Choose Plan</Button>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Billing;

function IconCheck(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
