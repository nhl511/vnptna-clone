import React from "react";

const ControlCarouselInfi = ({ api }: { api: any }) => {
  const handleScrollNextTwo = () => {
    if (api) {
      api.scrollNext();
      api.scrollNext();
    }
  };
  const handleScrollPrevTwo = () => {
    if (api) {
      api.scrollPrev();
      api.scrollPrev();
    }
  };
  return (
    <div className="flex justify-center items-center gap-4 py-4">
      <div
        onClick={handleScrollPrevTwo}
        className="cursor-pointer w-[12px] h-[12px] rounded-full bg-gray-200 animate-pulse"
      ></div>
      <div
        onClick={() => api.scrollPrev()}
        className="cursor-pointer w-[14px] h-[14px] rounded-full bg-gray-300 transition-all duration-300 hover:scale-110"
      ></div>
      <div className="w-[16px] h-[16px] rounded-full bg-blue-400 animate-pulse"></div>
      <div
        onClick={() => api.scrollNext()}
        className="cursor-pointer w-[14px] h-[14px] rounded-full bg-gray-300 transition-all duration-300 hover:scale-110"
      ></div>
      <div
        onClick={handleScrollNextTwo}
        className="cursor-pointer w-[12px] h-[12px] rounded-full bg-gray-200 animate-pulse"
      ></div>
    </div>
  );
};

export default ControlCarouselInfi;
