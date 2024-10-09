import Empty from "@/components/Empty/Empty";
import ProductCardSearch from "@/components/ProductCardSearch";
import React, { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import { useInView } from "react-intersection-observer";

const Products = ({ keyWord }: { keyWord: string }) => {
  const [products, setProducts] = useState<any>([]);
  const [page, setPage] = useState(2);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [scrollTrigger, isInView] = useInView();
  const fetcher = async (keyWord: string) => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
        `/api/v1/portal/search?partner_id=66&type=san-pham&key=${keyWord}&limit=6&page=1`
    );
    const result = await res.json();
    return result.data.result_search;
  };
  const { data, isLoading } = useSWR(
    `api/v1/portal/search?partner_id=66&type=san-pham&key=${keyWord}&limit=6&page=1`,
    () => fetcher(keyWord)
  );

  const loadMoreProducts = useCallback(async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
        `/api/v1/portal/search?partner_id=66&type=san-pham&key=${keyWord}&limit=6&page=${page}`
    );
    const result = await res.json();
    if (result.data.result_search.length === 0) {
      setHasMoreData(false);
    }
    setProducts((prevProducts: any) => [
      ...prevProducts,
      ...result.data.result_search,
    ]);
    setPage((prevPage) => prevPage + 1);
  }, [page]);

  useEffect(() => {
    if (data?.length !== 0) {
      setProducts(data);
      setPage(2);
      setHasMoreData(true);
    }
  }, [data]);

  useEffect(() => {
    if (isInView && hasMoreData) loadMoreProducts();
  }, [isInView, hasMoreData]);

  if (isLoading) return <div>Loading...</div>;
  if (data.length === 0) return <Empty />;

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {products?.map((item: any) => (
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <ProductCardSearch item={item} />
          </div>
        ))}
      </div>
      {hasMoreData && (
        <div ref={scrollTrigger} className="w-full flex justify-center my-20">
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
