import IntroHeader from "@/components/IntroHeader";
import ProductList from "@/components/ProductList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import React from "react";

const TransmissionNetWorkInfrastructurePage = () => {
  return (
    <div className="xl:container mx-auto px-4 xl:px-0 pb-5">
      <Breadcrumb className="my-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>
              <Link href="/business">Trang chủ</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Truyền dẫn - Hạ tầng mạng</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <IntroHeader id={2167} />
      <ProductList id={2167} />
    </div>
  );
};

export default TransmissionNetWorkInfrastructurePage;
