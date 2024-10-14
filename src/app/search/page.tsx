"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import Products from "./components/Products";
import News from "./components/News";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const keyWord = searchParams.get("key-word");
  const [typeState, setTypeState] = useState("san-pham");
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const handleFind = () => {
    if (searchInput) {
      // const params = new URLSearchParams(window.location.search);
      // params.set("key-word", searchInput);
      router.push("/search?key-word=" + searchInput);
      setSearchInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleFind();
    }
  };

  return (
    <div className="pb-20">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="truncate max-w-[150px] text-sm">
            Kết quả tìm kiếm: <b>{keyWord}</b>
          </div>
          <div className="flex gap-4">
            <p className="text-nowrap">Lọc theo: </p>
            <RadioGroup
              className="flex gap-4"
              onValueChange={setTypeState}
              value={typeState}
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  className="w-[20px] h-[20px]"
                  value="san-pham"
                />
                <p className="text-nowrap">Sản phẩm</p>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem className="w-[20px] h-[20px]" value="dich-vu" />
                <p className="text-nowrap">Tin tức</p>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="flex mt-5 md:mt-0">
          <input
            type="text"
            placeholder="Nhập từ khoá tìm kiếm"
            className="border border-gray-400 px-4 py-1"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="bg-blue-400 text-white px-4" onClick={handleFind}>
            <Search size={14} strokeWidth={3} />
          </button>
        </div>
      </div>

      {typeState === "san-pham" ? (
        <Products keyWord={keyWord ?? ""} />
      ) : (
        <News keyWord={keyWord ?? ""} />
      )}
    </div>
  );
};

export default SearchPage;
