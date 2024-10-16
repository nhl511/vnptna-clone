import { apiCaller } from "@/axios/client";
import { ENDPOINTS } from "./api-endpoints.service";
import useSWR from "swr";

export const getCaptcha = () => {
  const fetcher = async () => {
    const result = await apiCaller.get(ENDPOINTS.common.captcha);
    return result.data;
  };
  const { data, mutate } = useSWR("captcha", fetcher);
  return {
    data,
    mutate,
  };
};
