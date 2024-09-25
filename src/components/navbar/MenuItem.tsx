import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";

const MenuItem = ({ item }: { item: linkType }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          key={item.name}
          className="py-[20px] px-[16px] font-medium uppercase flex items-center gap-2 cursor-pointer"
        >
          {item.name}
          {item?.subLink?.length && <ChevronDownIcon />}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {item?.subLink?.map((link: subLinkType) => (
          <DropdownMenuLabel className="capitalize flex items-center gap-2 text-sm">
            {link.icon}
            {link.name}
          </DropdownMenuLabel>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuItem;
