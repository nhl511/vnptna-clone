"use server";
import React from "react";
import Header from "../components/Header";
import ServiceForm from "./components/ServiceForm";

const getService = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      "/api/v1/portal/partner/portal-service?partner_id=66"
  );
  const result = await res.json();
  return result.data;
};

const getUnits = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
      "/api/v1/portal/partner/getUnit?partner_id=66"
  );
  const result = await res.json();
  return result.data;
};

const ServicePage = async () => {
  const services = await getService();
  const units = await getUnits();

  return (
    <div className="xl:container xl:mx-auto border border-gray-200 p-8 my-10">
      <Header title="Đăng ký dịch vụ" des="Phiếu đăng ký dịch vụ" />
      <ServiceForm services={services} units={units} />
    </div>
  );
};

export default ServicePage;
