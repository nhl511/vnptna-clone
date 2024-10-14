import { endpoint } from "@/lib/apiEndpoint";
import { get } from "@/lib/fetch";

const api = "/api/v1/portal/product";

export const getProducts = async (limit: number) => {
  const res = await get({
    url:
      api +
      endpoint.product.getProducts +
      `?partner_id=66&limit=${limit}&language=vi`,
    option: { next: { revalidate: 5 } },
  });
  const result = await res.json();
  return result.data;
};

export const getProductsByServiceCate = async (id: number) => {
  const res = await get({
    url:
      api +
      endpoint.product.getProductsByServiceCate +
      `?partner_id=66&service_cate_id=${id}`,
  });
  const result = await res.json();
  return result;
};

export const getProductInfo = async (id: number) => {
  const res = await get({
    url: api + endpoint.product.getInfoProduct + `?product_id=${id}`,
  });
  const result = await res.json();
  return result;
};
