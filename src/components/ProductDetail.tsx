"use client";
import { Smartphone } from "lucide-react";
import React from "react";
import { DialogTrigger } from "./ui/dialog";
import ImageWithFallback from "./ImageWithFallback";

const ProductDetail = ({ product }: { product: internetProduct }) => {
  return (
    <div>
      <h3 className="text-xl font-bold my-8">{product.P_NAME}</h3>
      <div className="grid grid-cols-12 gap-4 md:gap-8 lg:gap-16">
        <div className="col-span-12 lg:col-span-6 relative">
          <ImageWithFallback
            src={product.P_PICTURE}
            fallbackSrc="/images/noimg.jpeg"
            layout="responsive"
            width={100}
            height={50}
            alt=""
          />
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div dangerouslySetInnerHTML={{ __html: product.P_SUMMARY }} />
          <div className="mt-8 flex items-center gap-2">
            <Smartphone className="text-red-600" size={32} strokeWidth={2.5} />
            <p className="text-lg font-bold">Tổng đài từ vấn: 18001166</p>
          </div>
          <DialogTrigger asChild>
            <button className="bg-blue-500 text-white my-4 px-12 py-1 font-bold rounded-md">
              Đặt mua
            </button>
          </DialogTrigger>
        </div>
      </div>
      <div className="bg-gray-100 mt-8">
        <div className="bg-gray-200 px-8 py-4">
          <h4 className="text-blue-800 font-bold">GIỚI THIỆU</h4>
        </div>
        <div
          className="p-5"
          dangerouslySetInnerHTML={{ __html: product.P_DESCRIPTION }}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
