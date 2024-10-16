"use server";
import React from "react";
import Header from "../components/Header";
import ServiceForm from "./components/ServiceForm";
import { getPortalServices, getUnits } from "@/services/apis/partner.service";

const ServicePage = async () => {
  const services = await getPortalServices();
  const units = await getUnits();

  return (
    <div className="xl:container xl:mx-auto border border-gray-200 p-8 my-10">
      <Header title="Đăng ký dịch vụ" des="Phiếu đăng ký dịch vụ" />
      <ServiceForm services={services} units={units} />
    </div>
  );
};

export default ServicePage;
