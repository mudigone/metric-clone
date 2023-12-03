import React from "react";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
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
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const Products = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <span className="text-xl font-bold">Products</span>
        <span className="text-xs text-muted-foreground">
          All your products{" "}
        </span>
      </div>
      <div className="flex gap-4 flex-wrap">
        <Input
          placeholder="Search for the product"
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
        <Button className="bg-[#ffdd4a] text-black font-bold hover:bg-yellow-400 px-4 py-1 rounded-xl">
          Add Product
        </Button>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-full divide-y divide-gray-200">
          <Table className="bg-white rounded-lg">
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold">Product Name</TableHead>
                <TableHead className="font-bold">Price</TableHead>
                <TableHead className="font-bold">Category</TableHead>
                <TableHead className="font-bold">Stock</TableHead>
                <TableHead className="font-bold">Rating</TableHead>
                <TableHead className="font-bold">Discount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Product 1</TableCell>
                <TableCell>$99.99</TableCell>
                <TableCell>Electronics</TableCell>
                <TableCell>In Stock</TableCell>
                <TableCell>
                  <Badge variant="default">4.5</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">10% OFF</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product 2</TableCell>
                <TableCell>$199.99</TableCell>
                <TableCell>Clothing</TableCell>
                <TableCell>In Stock</TableCell>
                <TableCell>
                  <Badge variant="default">3.7</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">15% OFF</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product 3</TableCell>
                <TableCell>$299.99</TableCell>
                <TableCell>Home Appliances</TableCell>
                <TableCell>Out of Stock</TableCell>
                <TableCell>
                  <Badge variant="destructive">4.2</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={null}>5% OFF</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product 4</TableCell>
                <TableCell>$399.99</TableCell>
                <TableCell>Books</TableCell>
                <TableCell>In Stock</TableCell>
                <TableCell>
                  <Badge variant="default">4.8</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">20% OFF</Badge>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-10" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Products;
