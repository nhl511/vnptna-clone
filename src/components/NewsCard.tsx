"use client";
import React from "react";
import ImageWithFallback from "./ImageWithFallback";

const NewsCard = ({ item }: { item: newsType }) => {
  return (
    <div className="">
      <div className="relative h-[220px] overflow-hidden bg-black">
        <ImageWithFallback
          src={item.SERVICE_PIC}
          fallbackSrc="/images/noimg.jpeg"
          fill
          alt=""
        />
      </div>
      <h4 className="my-3 font-bold text-sm uppercase truncate">
        {item.SERVICE_TITLE}
      </h4>
      <p
        className="overflow-hidden text-ellipsis text-sm"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {item.SERVICE_SUB_CONTENT}
      </p>
    </div>
  );
};

export default NewsCard;
