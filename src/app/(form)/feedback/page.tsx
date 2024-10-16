"use server";

import React from "react";
import Header from "../components/Header";
import FeedbackForm from "./components/FeedbackForm";
import { getCriteria, getUnits } from "@/services/apis/partner.service";

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
