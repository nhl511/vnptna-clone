"use client";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { LogIn, LogOut, Menu, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import MyDrawer from "./MyDrawer/MyDrawer";
import Link from "next/link";
import { Sheet, SheetTrigger } from "../ui/sheet";
import { useStore } from "@/zustand/store";
import { businessItems, personalItems, topItems } from "@/data/data";

const Navbar = ({ initialToken }: { initialToken: string }) => {
  const { isPersonal, setIsPersonal, token, setToken } = useStore();
  const [inputSearch, setInputSearch] = useState("");

  const router = useRouter();

  const logout = async () => {
    const response = await fetch("/api/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      window.location.href = "/login";
    } else {
      console.error("Failed to delete the cookie");
    }
  };
  const handleFind = () => {
    inputSearch && router.push(`/search?key-word=${inputSearch}`);
    setInputSearch("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputSearch) {
      handleFind();
    }
  };

  useEffect(() => {
    if (initialToken) {
      setToken(initialToken);
    }
  }, [initialToken]);

  useEffect(() => {
    if (inputSearch) {
      const timer = setTimeout(() => {
        handleFind();
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [inputSearch]);

  return (
    <Sheet>
      <div>
        <div className="bg-[var(--header-bg)]">
          <NavigationMenu className="xl:container mx-auto text-white flex justify-between items-center h-[40px] px-4 xl:px-0 text-nowrap">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => {
                    setIsPersonal(true);
                    router.push("/");
                  }}
                  className={` ${
                    isPersonal ? "bg-white text-black" : "text-white"
                  } px-[16px] rounded-full flex items-center gap-2 cursor-pointer`}
                >
                  <FontAwesomeIcon icon={fas.faUser} size="xs" />
                  Cá nhân
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  onClick={() => {
                    setIsPersonal(false);
                    router.push("/business");
                  }}
                  className={`${
                    !isPersonal ? "bg-white text-black" : "text-white"
                  } px-[16px] rounded-full flex items-center gap-2 cursor-pointer`}
                >
                  <FontAwesomeIcon icon={fas.faBuilding} size="xs" />
                  Doanh nghiệp
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <div className="relative w-full hidden lg:block">
                  <input
                    value={inputSearch}
                    onChange={(e) => setInputSearch(e.target.value)}
                    type="text"
                    className="rounded-full pl-[24px] pr-[40px] outline-none text-black"
                    placeholder="Nhập từ khoá tìm kiếm..."
                    onKeyDown={handleKeyDown}
                  />

                  <Search
                    size={16}
                    strokeWidth={3}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-700 cursor-pointer"
                    onClick={() => {
                      handleFind();
                    }}
                  />
                </div>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className="hidden md:flex gap-8 text-xs">
              {topItems?.map((topItem: subLinkType) => (
                <NavigationMenuItem>
                  <NavigationMenuLink
                    key={topItem.path}
                    className="flex items-center gap-2 text-nowrap cursor-pointer text-white"
                    onClick={() => router.push(topItem.path)}
                  >
                    {topItem.icon}
                    {topItem.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                {!token ? (
                  <NavigationMenuLink
                    key="login"
                    className="flex items-center gap-2 text-nowrap cursor-pointer text-white"
                    onClick={() => router.push("/login")}
                  >
                    <LogIn size={16} /> Đăng nhập
                  </NavigationMenuLink>
                ) : (
                  <NavigationMenuLink
                    key="logout"
                    className="flex items-center gap-2 text-nowrap cursor-pointer text-white"
                    onClick={async () => await logout()}
                  >
                    <LogOut size={16} /> Đăng xuất
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="bg-white">
          <NavigationMenu className="xl:container mx-auto h-[100px] items-center justify-start md:justify-between px-4 xl:px-0">
            <div className="md:hidden mr-4">
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
            </div>
            <div>
              <Image
                className="cursor-pointer"
                src="/images/vnptna.png"
                alt=""
                layout="responsive"
                width={100}
                height={50}
                objectFit="cover"
                onClick={() =>
                  isPersonal ? router.push("/") : router.push("/business")
                }
              />
            </div>
            <NavigationMenuList className="gap-4 text-[1rem] hidden md:flex">
              {(isPersonal ? personalItems : businessItems).map(
                (item: linkType) =>
                  !item.path ? (
                    <NavigationMenuItem key={item.name}>
                      <MenuItem item={item} />
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem
                      onClick={() => item.path && router.push(item?.path)}
                    >
                      <Link href={item.path} legacyBehavior passHref>
                        <NavigationMenuLink className="uppercase text-sm cursor-pointer text-nowrap">
                          {item.name}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      <MyDrawer
        linksTop={topItems}
        links={isPersonal ? personalItems : businessItems}
      />
    </Sheet>
  );
};

export default Navbar;
