import {
  Activity,
  Cctv,
  HandPlatter,
  Headset,
  Mail,
  MapPin,
  Network,
  Receipt,
  Smartphone,
  TicketPercent,
  Tv,
} from "lucide-react";
import Image from "next/image";
export const topItems: subLinkType[] = [
  {
    name: "Đăng kí dịch vụ",
    path: "/service",
    icon: <Headset size={16} />,
  },
  {
    name: "Hộp thư góp ý",
    path: "/feedback",
    icon: <Mail size={16} />,
  },
  {
    name: "Điểm giao dịch",
    path: "/locations",
    icon: <MapPin size={16} />,
  },
];

export const personalItems: linkType[] = [
  {
    name: "sim số",
    path: "https://digishop.vnpt.vn/sim-so?tab=c320",
  },
  {
    name: "tin tức",
    subLink: [
      {
        name: "tin khuyến mãi",
        path: "/news/promotion-news",
        icon: <TicketPercent size={24} />,
      },
      {
        name: "hoạt động VNPT Nghệ An",
        path: "/news/activity",
        icon: <Activity size={24} />,
      },
    ],
  },
  {
    name: "sản phẩm - dịch vụ",
    subLink: [
      {
        name: "internet",
        path: "/internet",
        icon: <Network size={24} />,
      },
      {
        name: "internet - truyền hình",
        path: "/internet-tv",
        icon: <Tv size={24} />,
      },
      {
        name: "internet - camera",
        path: "/internet-cam",
        icon: <Cctv size={24} />,
      },
      {
        name: "internet - TH - di động",
        path: "/internet-tv-mobile",
        icon: <Smartphone size={24} />,
      },
      {
        name: "truyền hình",
        path: "/tv",
        icon: <Tv size={24} />,
      },
      {
        name: "vinaphone",
        path: "/vinaphone",
        icon: (
          <Image src="/images/vinaphone.png" alt="" width={100} height={50} />
        ),
      },
    ],
  },
  {
    name: "cước - hoá đơn",
    subLink: [
      {
        name: "tra cứu cước - hoá đơn",
        path: "/user-info",
        icon: <Receipt size={24} />,
      },
      {
        name: "tra cứu hoá đơn - dịch vụ khác",
        path: "/look-up",
        icon: <HandPlatter size={24} />,
      },
    ],
  },
  {
    name: "hỗ trợ",
    path: "/support",
  },
];

export const businessItems: linkType[] = [
  {
    name: "tin doanh nghiệp",
    subLink: [
      {
        name: "tin tức doanh nghiệp",
        path: "/news/business-news",
        icon: <Receipt size={24} />,
      },
      {
        name: "doanh nghiệp SMES",
        path: "https://onesme.vn/enterprise",
        icon: <Receipt size={24} />,
      },
    ],
  },
  {
    name: "sp - dv viễn thông",
    subLink: [
      {
        name: "di động doanh nghiệp",
        path: "/mobile-business",
        icon: <Receipt size={24} />,
      },
      {
        name: "cố định doanh nghiệp",
        path: "/permanent-business",
        icon: <Receipt size={24} />,
      },
      {
        name: "internet doanh nghiệp",
        path: "/internet-business",
        icon: <Receipt size={24} />,
      },
      {
        name: "truyền dẫn - hạ tầng mạng",
        path: "/transmission-network-infrastructure",
        icon: <Receipt size={24} />,
      },
    ],
  },
  {
    name: "giải pháp cntt",
    subLink: [
      {
        name: "quản trị doanh nghiệp",
        path: "/business-management",
        icon: <Receipt size={24} />,
      },
      {
        name: "giáo dục điện tử",
        path: "/e-education",
        icon: <Receipt size={24} />,
      },
      {
        name: "chính quyền điện tử",
        path: "/e-government",
        icon: <Receipt size={24} />,
      },
      {
        name: "y tế điện tử",
        path: "/e-medical",
        icon: <Receipt size={24} />,
      },
    ],
  },
  {
    name: "năng lực vnpt",
    subLink: [
      {
        name: "hạ tầng viễn thông",
        path: "/telecommunications-infrastructure",
        icon: <Receipt size={24} />,
      },
      {
        name: "năng lực ICT và CNTT",
        path: "/ict-cntt",
        icon: <Receipt size={24} />,
      },
      {
        name: "đối tác",
        path: "/partner",
        icon: <Receipt size={24} />,
      },
      {
        name: "giải thưởng",
        path: "/prize",
        icon: <Receipt size={24} />,
      },
    ],
  },
  {
    name: "cước - hoá đơn",
    subLink: [
      {
        name: "tra cứu cước - hoá đơn",
        path: "/user-info",
        icon: <Receipt size={24} />,
      },
      {
        name: "tra cứu hoá đơn dịch vụ khác",
        path: "/look-up",
        icon: <Receipt size={24} />,
      },
    ],
  },
  {
    name: "hỗ trợ",
    path: "/support",
  },
];

export const years = [
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
  "2024",
  "2025",
  "2026",
  "2027",
  "2028",
  "2029",
];

export const months: monthType[] = [
  {
    title: "Tháng 1",
    value: "1",
  },
  {
    title: "Tháng 2",
    value: "2",
  },
  {
    title: "Tháng 3",
    value: "3",
  },
  {
    title: "Tháng 4",
    value: "4",
  },
  {
    title: "Tháng 5",
    value: "5",
  },
  {
    title: "Tháng 6",
    value: "6",
  },
  {
    title: "Tháng 7",
    value: "7",
  },
  {
    title: "Tháng 8",
    value: "8",
  },
  {
    title: "Tháng 9",
    value: "9",
  },
  {
    title: "Tháng 10",
    value: "10",
  },
  {
    title: "Tháng 11",
    value: "11",
  },
  {
    title: "Tháng 12",
    value: "12",
  },
];

export const tables: tableType[] = [
  {
    title: "Tổng hợp",
    value: "",
  },
  {
    title: "Chi tiết",
    value: "",
  },
];

export const video: videoType = {
  key: 1,
  url: "/videos/ads_bg.mp4",
  type: "video/mp4",
};
export const intro: introType = {
  title: "TỐI ƯU GÓI CƯỚC CHO GIA ĐÌNH BẠN TRONG 05 BƯỚC",
  description:
    "Bạn đang băn khoăn lắp Wifi tốc độ bao nhiêu, có lắp thêm truyền hình hay Camera không cho phù hợp với ngôi nhà của mình. Hay đơngiản chỉ là một chiếc SIM siêu Data đủ cho nhu cầu cá nhân của chínhbạn. Hãy tự khám phá để tối ưu mức chi tiêu của gia đình bạn.",
};
