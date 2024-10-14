import { endpoint } from "@/lib/apiEndpoint";
import { get } from "@/lib/fetch";

const api = "/api/v1/portal/partner";

export const getBanner = async (type: number) => {
  const res = await get({
    url: api + endpoint.partner.getBanner + `?partner_id=66&pos=2&type=${type}`,
  });
  const result = await res.json();
  return result.data;
};
