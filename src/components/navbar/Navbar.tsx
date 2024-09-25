"use client";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import MenuItem from "./MenuItem";
import {
  Activity,
  Cctv,
  HandPlatter,
  Network,
  Receipt,
  Signal,
  Smartphone,
  TicketPercent,
  Tv,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

  const router = useRouter();

  const topItems: subLinkType[] = [
    {
      name: "Đăng kí dịch vụ",
      path: "/service",
      icon: fas.faHeadset,
    },
    {
      name: "Hộp thư góp ý",
      path: "/feedback",
      icon: fas.faEnvelope,
    },
    {
      name: "Điểm giao dịch",
      path: "/locations",
      icon: fas.faLocationDot,
    },
    {
      name: "Đăng nhập",
      path: "/login",
      icon: fas.faRightToBracket,
    },
  ];

  const items: linkType[] = [
    {
      name: "sim số",
    },
    {
      name: "tin tức",
      subLink: [
        {
          name: "tin khuyến mãi",
          path: "",
          icon: <TicketPercent size={14} />,
        },
        {
          name: "hoạt động VNPT Nghệ An",
          path: "",
          icon: <Activity size={14} />,
        },
      ],
    },
    {
      name: "sản phẩm - dịch vụ",
      subLink: [
        {
          name: "internet",
          path: "",
          icon: <Network size={14} />,
        },
        {
          name: "internet - truyền hình",
          path: "",
          icon: <Tv size={14} />,
        },
        {
          name: "internet - camera",
          path: "",
          icon: <Cctv size={14} />,
        },
        {
          name: "internet - TH - di động",
          path: "",
          icon: <Smartphone size={14} />,
        },
        {
          name: "truyền hình",
          path: "",
          icon: <Tv size={14} />,
        },
        {
          name: "vinaphone",
          path: "",
          icon: <Signal size={14} />,
        },
      ],
    },
    {
      name: "cước - hoá đơn",
      subLink: [
        {
          name: "tra cứu cước - hoá đơn",
          path: "",
          icon: <Receipt size={14} />,
        },
        {
          name: "tra cứu hoá đơn - dịch vụ khác",
          path: "",
          icon: <HandPlatter size={14} />,
        },
      ],
    },
    {
      name: "hỗ trợ",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="bg-[var(--header-bg)] text-white text-[0.75 rem] h-[40px] flex items-center">
        <div className="xl:container xl:mx-auto flex justify-between">
          <div className="flex gap-6 items-center">
            <button
              onClick={() => router.push("/")}
              className={`${
                pathName === "/" ? "bg-white text-black" : "text-white"
              } px-[16px] rounded-full flex items-center  gap-2`}
            >
              <FontAwesomeIcon icon={fas.faUser} size="xs" />
              Cá nhân
            </button>
            <button
              onClick={() => router.push("business")}
              className={`${
                pathName === "/business" ? "bg-white text-black" : "text-white"
              } px-[16px] rounded-full flex items-center gap-2`}
            >
              <FontAwesomeIcon icon={fas.faBuilding} size="xs" />
              Doanh nghiệp
            </button>
          </div>
          <div>
            <div className="relative">
              <input
                type="text"
                className="rounded-full w-[240px] pl-[24px] pr-[10px] outline-none text-black"
                placeholder="Nhập từ khoá tìm kiếm..."
              />
            </div>
          </div>
          <div className="flex gap-8">
            {topItems?.map((topItem: subLinkType) => (
              <button
                key={topItem.path}
                className="flex items-center gap-2"
                onClick={() => router.push(topItem.path)}
              >
                <FontAwesomeIcon icon={topItem.icon} size="xs" />
                {topItem.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className=" text-black h-[100px] flex items-center shadow-md bg-white">
        <div className="xl:container xl:mx-auto flex justify-between items-center">
          <div>
            <Image
              className="cursor-pointer"
              src="/images/vnptna.png"
              alt=""
              layout="responsive"
              width={100}
              height={50}
              objectFit="contain"
              onClick={() => router.push("/")}
            />
          </div>
          <div className="flex gap-4 text-[1rem]">
            {items.map((item: linkType) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
