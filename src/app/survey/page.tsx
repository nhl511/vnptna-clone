import React from "react";
import News from "./components/News";
import Payment from "../components/Payment";
import Survey from "./components/Survey";

const SurveyPage = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      `/api/v1/portal/menu/getNewsByCateId?service_id=2172&page=1&num=30`,
    { next: { revalidate: 5 } }
  );
  const result = await res.json();
  return (
    <div>
      <Survey />
      <News news={result.data.lst} />
      <Payment />
    </div>
  );
};

export default SurveyPage;
