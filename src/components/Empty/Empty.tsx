import { useStore } from "@/zustand/store";
import Link from "next/link";
import React from "react";

const Empty = () => {
  const { isPersonal } = useStore();

  return (
    <div className="w-full h-[calc(100vh-200px)] flex justify-center items-center">
      <div className="text-center">
        <h3 className="text-2xl mb-5">
          Trang này hiện không có dữ liệu, vùi lòng quay lại sau!!
        </h3>
        <Link href={isPersonal ? "/" : "/business"}>
          <button className="bg-blue-400 text-white font-bold px-8 py-2 rounded-md">
            Quay lại trang chủ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Empty;
