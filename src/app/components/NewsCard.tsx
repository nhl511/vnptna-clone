import Image from "next/image";
import React from "react";

const NewsCard = ({ item }: { item: newsType }) => {
  return (
    <div>
      <div className="relative w-full h-[220px] overflow-hidden">
        <Image src={item.image} alt="" layout="fill" objectFit="cover" />
      </div>
      <h4 className="my-3 font-bold text-sm uppercase truncate">
        {item.title}
      </h4>
      <p
        className="overflow-hidden text-ellipsis text-sm"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {item.description}
      </p>
    </div>
  );
};

export default NewsCard;
