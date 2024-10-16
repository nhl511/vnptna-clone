import { apiCaller } from "@/axios/client";
import { ENDPOINTS } from "./api-endpoints.service";

export const getBanner = async (type: number) => {
  const result = await apiCaller.get(ENDPOINTS.partner.getBanner, {
    params: {
      partner_id: 66,
      pos: 2,
      type,
    },
  });
  return result.data;
};

export const getPortalServices = async () => {
  const result = await apiCaller.get(ENDPOINTS.partner.portalService, {
    params: {
      partner_id: 66,
    },
  });
  return result.data;
};

export const getUnits = async () => {
  const result = await apiCaller.get(ENDPOINTS.partner.getUnits, {
    params: {
      partner_id: 66,
    },
  });
  return result.data;
};

export const getCriteria = async () => {
  const result = await apiCaller.get(ENDPOINTS.partner.criteria, {
    params: {
      partner_id: 66,
    },
  });
  return result.data;
};

export const getListBranch = async () => {
  const result = await apiCaller.get(ENDPOINTS.partner.listBranch, {
    params: {
      partner_id: 66,
    },
  });
  return result.data;
};
