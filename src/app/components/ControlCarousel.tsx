import React from "react";

const ControlCarousel = ({
  count,
  current,
  api,
}: {
  count: number;
  current: number;
  api: any;
}) => {
  return (
    <div className="py-4 text-sm text-muted-foreground flex justify-center gap-4 flex-wrap">
      {Array.from({ length: count }, (_, index) => (
        <div
          onClick={() => {
            if (api && index + 1 !== current) {
              api.scrollTo(index);
            }
          }}
          className={`w-[12px] h-[12px] rounded-full ${
            index + 1 === current
              ? "bg-blue-500"
              : "border border-gray-500 cursor-pointer"
          }`}
          key={index}
        ></div>
      ))}
    </div>
  );
};

export default ControlCarousel;
