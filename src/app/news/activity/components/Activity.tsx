"use client";
import { getNewsByCateId } from "@/apiRequests/menu";
import MyPagination from "@/components/MyPagination";
import NewsCard from "@/components/NewsCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const Activity = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  const fetcher = async (page: number) => {
    const result = await getNewsByCateId({
      id: 2174,
      page: page,
      num: 10,
    });
    return result;
  };

  const { data, isLoading } = useSWR(
    `api/v1/portal/menu/getNewsByCateId?service_id=2174&page=${page}&num=10`,
    () => fetcher(Number(page))
  );
  if (isLoading) return <div>Loading...</div>;
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
