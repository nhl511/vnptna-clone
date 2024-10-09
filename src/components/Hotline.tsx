import { Headset } from "lucide-react";
import React from "react";

const Hotline = () => {
  return (
    <div className="flex items-center fixed w-[60px] h-[60px] rounded-full bg-orange-500 text-white z-50 top-40 right-5 shadow-lg cursor-pointer hover:w-[300px] transition-all duration-300">
      <div className="absolute right-0 w-[60px] h-[60px] flex justify-center items-center">
        <Headset size={32} strokeWidth={2.5} />
      </div>
      <div className="w-full text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p className="font-bold text-lg">HOTLINE</p>
        <p>18001166</p>
      </div>
    </div>
  );
};

export default Hotline;
