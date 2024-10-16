import { apiCaller } from "@/axios/client";
import { ENDPOINTS } from "./api-endpoints.service";

export const getProducts = async (limit: number) => {
  const result = await apiCaller.get(ENDPOINTS.product.getProducts, {
    params: {
      partner_id: 66,
      limit,
      language: "vi",
    },
  });
  return result.data;
};

export const getProductsByServiceCate = async (id: number) => {
  const result = await apiCaller.get(
    ENDPOINTS.product.getProductsByServiceCate,
    {
      params: {
        partner_id: 66,
        service_cate_id: id,
      },
    }
  );
  return result;
};

export const getProductInfo = async (id: number) => {
  const result = await apiCaller.get(ENDPOINTS.product.getInfoProduct, {
    params: {
      product_id: id,
    },
  });
  return result;
};
