import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";

const ListItem = ({ item }: { item: subLinkType }) => {
  return (
    <li className="col-span-3">
      <Link href={item.path}>
        <NavigationMenuLink asChild>
          <a className="block p-8 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
            <div className="uppercase text-sm leading-none flex flex-col items-center gap-4 text-blue-700 font-bold">
              {item.icon}
              {item.name}
            </div>
          </a>
        </NavigationMenuLink>
      </Link>
    </li>
  );
};

export default ListItem;
