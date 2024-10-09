"use client";
import Empty from "@/components/Empty/Empty";
import MyPagination from "@/components/MyPagination";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

const BusinessNews = () => {
  const [page, setPage] = useState(1);
  const fetcher = async (page: number) => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
        `/api/v1/portal/menu/getNewsByCateId?service_id=2179&page=${page}&num=10`
    );
    const result = await res.json();
    return result.data;
  };
  useEffect(() => {
    if (page) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [page]);
  const { data, isLoading } = useSWR(
    `api/v1/portal/menu/getNewsByCateId?service_id=2179&page=${page}&num=10`,
    () => fetcher(page)
  );
  if (isLoading) return <div>Loading...</div>;
  if (data.lst.length === 0) return <Empty />;
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
          currentPage={page}
          totalItems={data?.total}
          limit={10}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default BusinessNews;
