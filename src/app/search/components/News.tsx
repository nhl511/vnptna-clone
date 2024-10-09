import Empty from "@/components/Empty/Empty";
import NewsCardSearch from "@/components/NewsCardSearch";
import NewsCardSearchSkeleton from "@/components/NewsCardSearchSkeleton";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import useSWR from "swr";

const News = ({ keyWord }: { keyWord: string }) => {
  const [news, setNews] = useState<any>([]);
  const [page, setPage] = useState(2);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [scrollTrigger, isInView] = useInView();
  const fetcher = async (keyWord: string) => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
        `/api/v1/portal/search?partner_id=66&type=dich-vu&key=${keyWord}&limit=6&page=1`
    );
    const result = await res.json();
    return result.data.result_search;
  };
  const { data, isLoading } = useSWR(
    `api/v1/portal/search?partner_id=66&type=dich-vu&key=${keyWord}&limit=6&page=1`,
    () => fetcher(keyWord)
  );

  const loadMoreNews = useCallback(async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
        `/api/v1/portal/search?partner_id=66&type=dich-vu&key=${keyWord}&limit=6&page=${page}`
    );
    const result = await res.json();
    if (result.data.result_search.length === 0) {
      setHasMoreData(false);
    }
    setNews((prevNews: any) => [...prevNews, ...result.data.result_search]);
    setPage((prevPage) => prevPage + 1);
  }, [page]);

  useEffect(() => {
    if (data?.length !== 0) {
      setNews(data);
      setPage(2);
      setHasMoreData(true);
    }
  }, [data]);

  useEffect(() => {
    if (isInView && hasMoreData) loadMoreNews();
  }, [isInView, hasMoreData]);

  if (isLoading) return <div>Loading...</div>;
  if (data.length === 0) return <Empty />;

  return (
    <div className="grid grid-cols-12 gap-6 sm:space-y-12">
      {news?.map((item: any) => (
        <div className="col-span-12">
          <Link href={`/news/promotion-news/${item.SERVICE_ID}`}>
            <NewsCardSearch item={item} />
          </Link>
        </div>
      ))}
      {hasMoreData && (
        <div ref={scrollTrigger} className="col-span-12">
          <NewsCardSearchSkeleton />
        </div>
      )}
    </div>
  );
};

export default News;
