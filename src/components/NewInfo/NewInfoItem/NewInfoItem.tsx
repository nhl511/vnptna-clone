"use client";
import Image from "next/image";
import React from "react";
import moment from "moment";
const NewInfoItem = ({ item }: { item: newsType }) => {
  return (
    <div className="flex border border-gray-200 rounded-md p-2 gap-2 h-[96px]">
      <div className="w-[150px] h-full overflow-hidden relative">
        <Image
          src={item.SERVICE_PIC}
          alt=""
          layout="fill"
          objectFit="cover"
          loader={(item) => item.src}
        />
      </div>

      <div className="flex w-full flex-col gap-2">
        <p
          className="font-bold text-sm overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.SERVICE_TITLE}
        </p>
        <p className="text-xs">
          {moment(item.SERVICE_CREATEDATE).format("HH:MM, DD/MM/YYYY")}
        </p>
      </div>
    </div>
  );
};

export default NewInfoItem;
