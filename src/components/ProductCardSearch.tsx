"use client";
import { vnd } from "@/lib/currency";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DialogTrigger } from "./ui/dialog";

const ProductCardSearch = ({ item }: { item: internetProduct }) => {
  const [imgSrc, setImgSrc] = useState(item.P_PICTURE ?? "/images/noimg.jpeg");

  return (
    <div className="border border-gray-200">
      <div className="relative h-[220px] overflow-hidden bg-black">
        <Image
          src={imgSrc}
          alt=""
          layout="fill"
          objectFit={imgSrc === "/images/noimg.jpeg" ? "cover" : "contain"}
          loader={(item) => item.src}
          onError={() => setImgSrc("/images/noimg.jpeg")}
        />
      </div>
      <div className="py-2 px-4">
        <h3 className="text-center font-bold text-blue-700 text-base text-ellipsis truncate">
          {item.P_NAME}
        </h3>
        <h3 className="text-red-600 font-bold text-xl text-center">
          {vnd(item.P_PRICE)}
        </h3>
      </div>
      <div className="px-8">
        <hr />
        <div
          className="mt-4 text-sm overflow-hidden h-40"
          dangerouslySetInnerHTML={{ __html: item.P_SUMMARY }}
        />
      </div>
      <div className="flex justify-center gap-4 py-4 grid grid-cols-12 p-4">
        <Link
          href={`/products/${item.P_ID}`}
          className="col-span-12 xl:col-span-6"
        >
          <button className="bg-[linear-gradient(225deg,#2ed3ae,#109df7)] text-white px-4 py-2 font-bold w-full text-sm">
            XEM CHI TIẾT
          </button>
        </Link>
        <DialogTrigger asChild className="col-span-12 xl:col-span-6">
          <button className="bg-[linear-gradient(225deg,#2ed3ae,#109df7)] text-white px-4 py-2 font-bold w-full text-sm">
            ĐẶT MUA
          </button>
        </DialogTrigger>
      </div>
    </div>
  );
};

export default ProductCardSearch;
