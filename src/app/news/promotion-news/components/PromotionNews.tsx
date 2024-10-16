"use client";
import React from "react";
import NewsCard from "@/components/NewsCard";
import MyPagination from "@/components/MyPagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getNewsByPage } from "@/services/apis/menu.service";

const PromotionNews = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const { data } = getNewsByPage({ id: 2172, page: Number(page), num: 10 });

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
          type={1}
        />
      </div>
    </div>
  );
};

export default PromotionNews;
