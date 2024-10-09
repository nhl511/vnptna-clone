"use server";

import React from "react";
import Header from "../components/Header";
import FeedbackForm from "./components/FeedbackForm";

const getUnits = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      "/api/v1/portal/partner/getUnit?partner_id=66"
  );
  const result = await res.json();
  return result.data;
};

const getCriteria = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      "/api/v1/portal/partner/criteria?partner_id=66"
  );
  const result = await res.json();
  return result.data;
};
const FeedbackPage = async () => {
  const units = await getUnits();
  const criteria = await getCriteria();

  return (
    <div className="xl:container xl:mx-auto border border-gray-200 p-8 my-10">
      <Header title="Góp ý liên hệ" des="Phiếu góp ý - phản hồi" />
      <FeedbackForm units={units} criteria={criteria} />
    </div>
  );
};

export default FeedbackPage;
