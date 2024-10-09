import IntroHeader from "@/components/IntroHeader";
import React from "react";
import ProductList from "@/components/ProductList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const InternetTVPage = () => {
  return (
    <div className="xl:container mx-auto px-4 xl:px-0 pb-5">
      <Breadcrumb className="my-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Internet - Truyền hình</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <IntroHeader id={2122} />
      <ProductList id={2122} />
    </div>
  );
};

export default InternetTVPage;
