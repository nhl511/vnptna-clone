"use client";
import { vnd } from "@/lib/currency";
import Link from "next/link";
import React from "react";
import { DialogTrigger } from "./ui/dialog";
import ImageWithFallback from "./ImageWithFallback";

const ProductCard = ({ item }: { item: internetProduct }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 border border-gray-200">
      <div className="font-bold text-white text-center py-1 bg-gradient-to-r from-[#0166b4] via-[#2795ec] to-[#0d7bd0] uppercase">
        {item.P_NAME}
      </div>
      <div className="relative h-[220px] overflow-hidden bg-black">
        <ImageWithFallback
          src={item.P_PICTURE}
          fallbackSrc="/images/noimg.jpeg"
          fill
          alt=""
        />
      </div>
      <div className="py-2">
        {item.P_PRICE ? (
          <h3 className="text-red-600 font-bold text-xl text-center">
            {vnd(item.P_PRICE)}
          </h3>
        ) : null}
      </div>
      <div className="px-8">
        <hr />
        <div
          className="mt-4 text-sm overflow-auto h-40"
          dangerouslySetInnerHTML={{ __html: item.P_SUMMARY }}
        />
      </div>
      <div className="flex justify-center gap-4 py-4 grid grid-cols-12 p-4">
        <Link
          href={`/products/${item.P_ID}`}
          className="col-span-12 xl:col-span-6"
        >
          <button className="bg-[linear-gradient(225deg,#2ed3ae,#109df7)] text-white px-4 py-2 font-bold w-full">
            XEM CHI TIẾT
          </button>
        </Link>
        <DialogTrigger asChild className="col-span-12 xl:col-span-6">
          <button className="bg-[linear-gradient(225deg,#2ed3ae,#109df7)] text-white px-4 py-2 font-bold w-full">
            ĐẶT MUA
          </button>
        </DialogTrigger>
      </div>
    </div>
  );
};

export default ProductCard;
