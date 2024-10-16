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
import { getNewsByCateId } from "@/services/apis/menu.service";
import { getProductsByServiceCate } from "@/services/apis/products.service";
import Link from "next/link";
import React from "react";

const InternetBusinessPage = async () => {
  const introHeader = await getNewsByCateId({ id: 2166, page: 1, num: 1 });

  const products = await getProductsByServiceCate(2166);
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
            <BreadcrumbPage>Internet Doanh nghiệp</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <IntroHeader introHeader={introHeader} />
      <ProductList products={products.data} />
    </div>
  );
};

export default InternetBusinessPage;
