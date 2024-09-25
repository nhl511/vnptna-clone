import Image from "next/image";
import React from "react";

const Card = ({ product }: { product: productType }) => {
  return (
    <div className="h-[500px] m-4 shadow-lg p-4 text-center flex flex-col justify-between">
      <div>
        {product.title}
        <div className="relative w-full h-[200px] mt-3">
          <Image
            src={product.image}
            alt=""
            layout="fill"
            objectFit="contained"
          />
        </div>
        <div className="flex flex-col items-start mt-5 text-sm">
          <p>{product.description}</p>
          <ul className="flex flex-col gap-2 mt-2">
            {product.details.map((detail: string) => (
              <li className="text-start" key={detail}>
                - {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="flex w-full justify-center gap-4">
          <button className="bg-[linear-gradient(225deg,#2ed3ae,#109df7)] text-white px-4 py-2 font-bold">
            XEM CHI TIẾT
          </button>
          <button className="bg-[linear-gradient(225deg,#2ed3ae,#109df7)] text-white px-4 py-2 font-bold">
            ĐẶT MUA
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
