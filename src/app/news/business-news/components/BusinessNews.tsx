"use client";
import Empty from "@/components/Empty/Empty";
import MyPagination from "@/components/MyPagination";
import NewsCard from "@/components/NewsCard";
import { getNewsByPage } from "@/services/apis/menu.service";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const BusinessNews = () => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const { data } = getNewsByPage({ id: 2179, page: Number(page), num: 10 });

  if (data?.lst?.length === 0) return <Empty />;
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
      {data?.lst?.map((item: newsType) => (
        <div className="col-span-12 md:col-span-6" key={item.SERVICE_ID}>
          <Link href={`/news/promotion-news/${item.SERVICE_ID}`}>
            <NewsCard item={item} />
          </Link>
        </div>
      ))}
      <div className="my-10">
        <MyPagination
          pageQuery={Number(page) || 1}
          totalItems={data?.total}
          limit={10}
          type={3}
        />
      </div>
    </div>
  );
};

export default BusinessNews;
