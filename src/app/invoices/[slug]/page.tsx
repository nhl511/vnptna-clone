import React from "react";
import Download from "./components/Download";

const InvoiceDetailPage = async ({ params }: any) => {
  const { slug } = params;
  const parts = slug.split("-");
  const info = {
    year: parts[0],
    month: parts[1],
    code: parts[2],
  };
  const result = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL + "/api/v1/portal/user/getInvoice",
    {
      body: JSON.stringify({
        customer_code: info.code,
        month: info.month,
        year: info.year,
        partner_id: 66,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  ).then(async (result) => {
    const payload = await result.json();
    const data = {
      status: result.status,
      payload,
    };
    if (!result.ok) {
      console.log(data);
    }
    return data;
  });
  return (
    <div className="mt-5">
      <h2 className="text-3xl text-center font-bold my-4">Thông tin hoá đơn</h2>
      <Download customerCode={info.code} result={result} />
      <div dangerouslySetInnerHTML={{ __html: result.payload.data.html }} />
    </div>
  );
};

export default InvoiceDetailPage;
