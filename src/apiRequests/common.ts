import { endpoint } from "@/lib/apiEndpoint";
import { get } from "@/lib/fetch";
import useSWR from "swr";

const api = "/api/v1/portal/common";
export const getCaptcha = () => {
  const fetcher = async () => {
    const res = await get({ url: api + endpoint.common.captcha });
    const result = await res.json();
    return result?.data;
  };
  const { data, mutate } = useSWR(api, fetcher);
  return {
    data,
    mutate,
  };
};
