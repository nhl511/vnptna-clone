import React from "react";
import NewInfoItem from "./NewInfoItem/NewInfoItem";
import Link from "next/link";

const NewInfo = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      `/api/v1/portal/menu/getNewsByCateId?service_id=2172&page=1&num=5`,
    { next: { revalidate: 3 } }
  );
  const result = await res.json();

  return (
    <div>
      <h3 className="text-xl font-bold mb-2 text-end">THÔNG TIN MỚI NHẤT</h3>
      <hr />
      <div className="flex flex-col gap-3 mt-4">
        {result?.data?.lst?.map((item: newsType) => (
          <Link href={`/news/promotion-news/${item.SERVICE_ID}`}>
            <NewInfoItem key={item.SERVICE_ID} item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewInfo;
