"use client";
import Image from "next/image";
import React, { useState } from "react";

const NewsCard = ({ item }: { item: newsType }) => {
  const [imgSrc, setImgSrc] = useState(
    item.SERVICE_PIC ?? "/images/noimg.jpeg"
  );
  return (
    <div className="">
      <div className="relative h-[220px] overflow-hidden bg-black">
        <Image
          src={imgSrc}
          alt=""
          fill={true}
          objectFit={imgSrc === "/images/noimg.jpeg" ? "cover" : "contain"}
          loader={(item) => item.src}
          onError={() => setImgSrc("/images/noimg.jpeg")}
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
