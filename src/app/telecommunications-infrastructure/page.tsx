import IntroHeader from "@/components/IntroHeader";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getNewsByCateId } from "@/services/apis/menu.service";
import Link from "next/link";
import React from "react";

const TelecommunicationsInfrastructurePage = async () => {
  const introHeader = await getNewsByCateId({ id: 2114, page: 1, num: 1 });

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
            <BreadcrumbPage>Hạ tầng viễn thông</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <IntroHeader introHeader={introHeader} />
    </div>
  );
};

export default TelecommunicationsInfrastructurePage;
