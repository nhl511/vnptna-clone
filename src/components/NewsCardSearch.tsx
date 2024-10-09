import Image from "next/image";
import React, { useState } from "react";

const NewsCardSearch = ({ item }: { item: any }) => {
  const [imgSrc, setImgSrc] = useState(
    item.SERVICE_PIC ?? "/images/noimg.jpeg"
  );
  return (
    <div className="flex flex-col sm:flex-row sm:h-[150px] gap-4">
      <div className="relative h-[200px] w-full sm:w-[300px] overflow-hidden bg-black">
        <Image
          src={imgSrc}
          alt=""
          layout="fill"
          objectFit={imgSrc === "/images/noimg.jpeg" ? "cover" : "contain"}
          loader={(item) => item.src}
          onError={() => setImgSrc("/images/noimg.jpeg")}
        />
      </div>
      <div className="w-full">
        <p className="text-xs mb-2">{item.SERVICE_CREATEDATE}</p>
        <h3 className="text-lg font-bold mb-2 text-blue-700">
          {item.SERVICE_TITLE}
        </h3>
        {/* <div dangerouslySetInnerHTML={{ __html: item.SERVICE_CONTENT }} /> */}
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
