"use client";
import MyPagination from "@/components/MyPagination";
import NewsCard from "@/components/NewsCard";
import { getNewsByPage } from "@/services/apis/menu.service";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Activity = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const { data } = getNewsByPage({ id: 2174, page: Number(page), num: 10 });

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
      {data?.lst?.map((item: newsType) => (
        <div className="col-span-12 md:col-span-6" key={item.SERVICE_ID}>
          <Link href={`/news/activity/${item.SERVICE_ID}`}>
            <NewsCard item={item} />
          </Link>
        </div>
      ))}
      <div className="my-10">
        <MyPagination
          pageQuery={Number(page) || 1}
          totalItems={data?.total}
          limit={10}
          type={2}
        />
      </div>
    </div>
  );
};

export default Activity;
