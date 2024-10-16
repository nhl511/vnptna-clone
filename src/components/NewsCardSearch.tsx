import React from "react";
import ImageWithFallback from "./ImageWithFallback";

const NewsCardSearch = ({ item }: { item: any }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:h-[150px] gap-4">
      <div className="relative h-[200px] w-full sm:w-[300px] overflow-hidden bg-black">
        <ImageWithFallback
          src={item.SERVICE_PIC}
          fallbackSrc="/images/noimg.jpeg"
          fill
          alt=""
        />
      </div>
      <div className="w-full">
        <p className="text-xs mb-2">{item.SERVICE_CREATEDATE}</p>
        <h3 className="text-lg font-bold mb-2 text-blue-700">
          {item.SERVICE_TITLE}
        </h3>
        <p
          className="overflow-hidden text-ellipsis text-sm text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.SERVICE_SUB_CONTENT}
        </p>
      </div>
    </div>
  );
};

export default NewsCardSearch;
