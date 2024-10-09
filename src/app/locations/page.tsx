import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";

const LocationPage = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      "/api/v1/portal/partner/listBranch?partner_id=66"
  );
  const result = await res.json();
  return (
    <div className="xl:container xl:mx-auto min-h-[100vh]">
      <Table className="mt-10">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Tên</TableHead>
            <TableHead>Địa chỉ</TableHead>
            <TableHead>Điện thoại</TableHead>
            <TableHead>Tìm đường</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {result.data.map((location: branchType) => (
            <TableRow key={location.branch_id}>
              <TableCell>{location.branch_id}</TableCell>
              <TableCell>{location.branch_name}</TableCell>
              <TableCell>{location.branch_address}</TableCell>
              <TableCell>{location.branch_phone}</TableCell>
              <TableCell>
                <Link
                  href={`https://maps.google.com/?ll=${location.branch_gps}`}
                >
                  <p className="text-[var(--login-btn)] font-bold">
                    Xem bản đồ đường đi
                  </p>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default LocationPage;
