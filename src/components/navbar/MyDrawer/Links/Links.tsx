"use client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Links = ({ link }: { link: linkType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="my-2">
      <div className="flex items-center justify-between space-x-4">
        {!link.path ? (
          <CollapsibleTrigger asChild>
            <div className="flex justify-between w-full py-2">
              <h4 className="text-base capitalize text-blue-800 font-bold">
                {link.name}
              </h4>
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          </CollapsibleTrigger>
        ) : (
          <SheetClose asChild>
            <div
              className="flex justify-between w-full py-2"
              onClick={() => {
                link.path && router.push(link.path);
              }}
            >
              <h4 className="text-base capitalize text-blue-800 font-bold">
                {link.name}
              </h4>
            </div>
          </SheetClose>
        )}
      </div>

      <CollapsibleContent
        className={cn(
          "text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        )}
      >
        {link?.subLink?.map((item: subLinkType) => (
          <SheetClose asChild>
            <Link href={item.path}>
              <div className="text-sm capitalize text-blue-800 pl-8 py-4">
                {item.name}
              </div>
            </Link>
          </SheetClose>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

export default Links;
