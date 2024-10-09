import React, { useState } from "react";
import Links from "./Links/Links";
import {
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Search, SquareX } from "lucide-react";
import Link from "next/link";

const MyDrawer = ({
  links,
  linksTop,
}: {
  links: linkType[];
  linksTop: subLinkType[];
}) => {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <SheetContent className="w-full overflow-auto p-0" side="left">
      <SheetHeader className="mb-5 shadow-lg w-full p-4 flex">
        <SheetClose asChild>
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/images/vnptna.png"
              alt=""
              layout="responsive"
              width={100}
              height={25}
              objectFit="cover"
            />
          </Link>
        </SheetClose>
        <SheetClose asChild>
          <div className="absolute right-4">
            <SquareX className="text-blue-600" size={30} />
          </div>
        </SheetClose>
        {/* <div className="relative w-full py-5">
          <input
            type="text"
            className="w-full rounded-full pl-[24px] pr-[40px] outline-none text-black border border-black py-3"
            placeholder="Nhập từ khoá tìm kiếm..."
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <SheetClose asChild>
            <Link href={inputSearch ? `/search?key-word=${inputSearch}` : ``}>
              <Search
                size={20}
                strokeWidth={3}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-blue-700"
                onClick={() => setInputSearch("")}
              />
            </Link>
          </SheetClose>
        </div> */}
      </SheetHeader>

      <SheetFooter className="px-4">
        {linksTop?.map((linkTop: subLinkType) => (
          <div key={linkTop.path}>
            <Links link={linkTop} />
            <hr />
          </div>
        ))}
        {links?.map((link: linkType) => (
          <div key={link.path}>
            <Links link={link} />
            <hr />
          </div>
        ))}
      </SheetFooter>
    </SheetContent>
  );
};

export default MyDrawer;
