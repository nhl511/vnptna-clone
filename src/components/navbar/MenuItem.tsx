"use client";
import React from "react";

import {
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import ListItem from "./listItem/ListItem";

const MenuItem = ({ item }: { item: linkType }) => {
  return (
    <>
      <NavigationMenuTrigger className="uppercase text-sm">
        {item.name}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-[768px] lg:w-[1024px] xl:w-[1280px] grid grid-cols-12">
          {item?.subLink?.map((link: subLinkType) => (
            <ListItem key={link.path} item={link} />
          ))}
        </ul>
      </NavigationMenuContent>
    </>
  );
};

export default MenuItem;
