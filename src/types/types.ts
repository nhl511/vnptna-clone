interface bannerType {
  BANNER_ID: number;
  BANNER_SOURCE: string;
}

interface videoType {
  key: number;
  url: string;
  type: string;
}

interface introType {
  title: string;
  description: string;
}

interface newsType {
  SERVICE_ID: number;
  SERVICE_PIC: string;
  SERVICE_TITLE: string;
  SERVICE_SUB_CONTENT: string;
  SERVICE_CONTENT: string;
  SERVICE_CREATEDATE: string;
}

interface subLinkType {
  name: string;
  path: string;
  icon: any;
}

interface linkType {
  name: string;
  path?: string;
  subLink?: subLinkType[];
}

interface benefitType {
  icon: any;
  title: string;
  description: string;
}

interface locationType {
  no: number;
  name: string;
  address: string;
  phone: string;
}

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  limit: number;
  onPageChange: (page: number) => void;
}

interface internetProduct {
  P_ID: number;
  P_NAME: string;
  P_DESCRIPTION: string;
  P_PICTURE: string;
  P_PRICE: number;
  P_SUMMARY: string;
  P_TYPE: number;
}

interface branchType {
  branch_id: number;
  branch_name: string;
  branch_phone: string;
  branch_address: string;
  branch_gps: string;
}

interface monthType {
  title: string;
  value: string;
}

interface tableType {
  title: string;
  value: string;
}
