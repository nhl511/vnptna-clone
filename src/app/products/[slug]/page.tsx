import { getProductInfo } from "@/apiRequests/product";
import ProductDetail from "@/components/ProductDetail";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const linkMapper = (id: number) => {
  switch (true) {
    case id === 127:
      return "/internet";
    case id === 128:
      return "/internet-tv";
    case id === 129:
      return "/internet-cam";
    case id === 130:
      return "/internet-tv-mobile";
    case id === 131:
      return "/tv";
    case id === 132:
      return "/vinaphone";
    case id === 133:
      return "/e-government";
    case id === 134:
      return "/permanent-business";
    case id === 135:
      return "/e-education";
    case id === 136:
      return "/e-medical";
    case id === 139:
      return "/business-management";
    case id === 140:
      return "/mobile-business";
    case id === 141:
      return "/internet-business";
    default:
      return "";
  }
};

const ProductDetailPage = async ({ params }: any) => {
  const { slug } = params;
  const result = await getProductInfo(slug);
  const link = linkMapper(result.data.C_ID);

  return (
    <div className="xl:container mx-auto px-4 xl:px-0 pb-5">
      <Breadcrumb className="my-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href={result.data.P_TYPE === 1 ? "/" : "/business"}>
                Trang chủ
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href={link}>{result.data.C_NAME}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{result.data.P_NAME}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <ProductDetail product={result.data} />
    </div>
  );
};

export default ProductDetailPage;
