import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { locations } from "@/data/data";
import React from "react";

const LocationPage = () => {
  return (
    <div className="xl:container xl:mx-auto min-h-[100vh]">
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">STT</TableHead>
            <TableHead>Tên</TableHead>
            <TableHead>Địa chỉ</TableHead>
            <TableHead>Điện thoại</TableHead>
            <TableHead>Tìm đường</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {locations.map((location: locationType) => (
            <TableRow key={location.no}>
              <TableCell>{location.no}</TableCell>
              <TableCell>{location.name}</TableCell>
              <TableCell>{location.address}</TableCell>
              <TableCell>{location.phone}</TableCell>
              <TableCell>
                <p className="text-[var(--login-btn)] font-bold">
                  Xem bản đồ đường đi
                </p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LocationPage;
