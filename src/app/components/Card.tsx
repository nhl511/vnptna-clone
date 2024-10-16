"use client";
import ImageWithFallback from "@/components/ImageWithFallback";
import { DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import React from "react";

const Card = ({ product }: { product: internetProduct }) => {
  return (
    <div className="shadow-lg text-center flex flex-col justify-between p-4 my-4 border border-gray-200">
      <div>
        <h3 className="font-bold text-blue-800 truncate">{product.P_NAME}</h3>
        <div className="relative w-full h-[200px] mt-3 bg-white">
          <ImageWithFallback
            src={product.P_PICTURE}
            fallbackSrc="/images/noimg.jpeg"
            fill
            alt=""
          />
        </div>
        <div
          className="text-start mt-5 overflow-hidden h-[150px]"
          dangerouslySetInnerHTML={{ __html: product.P_SUMMARY }}
        />
      </div>

      <div>
        <div className="w-full gap-3 grid grid-cols-12 pb-2 pt-5">
          <Link
            href={`/products/${product.P_ID}`}
            className="col-span-12 xl:col-span-6 flex justify-end"
          >
            <button className="bg-[linear-gradient(225deg,#2ed3ae,#109df7)] text-white text-sm px-4 py-2 font-bold w-full xl:w-[150px]">
              XEM CHI TIẾT
            </button>
          </Link>
          <DialogTrigger asChild className="col-span-12 xl:col-span-6">
            <button className="bg-[linear-gradient(225deg,#2ed3ae,#109df7)] text-white text-sm px-4 py-2 font-bold w-full xl:w-[150px]">
              ĐẶT MUA
            </button>
          </DialogTrigger>
        </div>
      </div>
    </div>
  );
};

export default Card;
