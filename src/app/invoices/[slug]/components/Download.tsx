"use client";
import React from "react";

const Download = ({
  result,
  customerCode,
}: {
  result: any;
  customerCode: string;
}) => {
  const downloadFile = async ({
    token_download,
    type,
  }: {
    token_download: string;
    type: string;
  }) => {
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          "/api/v1/portal/user/downloadInvoice",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token_download,
            type,
            partner_id: 66,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = customerCode + "." + type; // Replace with the desired file name and extension
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url); // Clean up the URL object
      document.body.removeChild(a); // Remove the link element after downloading
    } catch (error) {
      console.error("Failed to download file:", error);
    }
  };

  return (
    <div className="flex justify-center gap-4 mt-5 mb-10">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={() => {
          downloadFile({
            token_download: result.payload.data.token_download,
            type: "pdf",
          });
        }}
      >
        Tải về file PDF
      </button>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={() => {
          downloadFile({
            token_download: result.payload.data.token_download,
            type: "xml",
          });
        }}
      >
        Tải về file XML
      </button>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        onClick={() => {
          downloadFile({
            token_download: result.payload.data.token_download,
            type: "inv",
          });
        }}
      >
        Tải về file INV
      </button>
    </div>
  );
};

export default Download;
