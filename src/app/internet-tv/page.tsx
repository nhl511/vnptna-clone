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
import { getNewsByCateId } from "@/services/apis/menu.service";
import { getProductsByServiceCate } from "@/services/apis/products.service";

const InternetTVPage = async () => {
  const introHeader = await getNewsByCateId({ id: 2122, page: 1, num: 1 });
  const products = await getProductsByServiceCate(2122);
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
      <IntroHeader introHeader={introHeader} />
      <ProductList products={products.data} />
    </div>
  );
};

export default InternetTVPage;
