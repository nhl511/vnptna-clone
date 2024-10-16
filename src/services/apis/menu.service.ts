import { apiCaller } from "@/axios/client";
import { ENDPOINTS } from "./api-endpoints.service";
import useSWR from "swr";

export const getNewsByCateId = async ({
  id,
  page,
  num,
}: {
  id: number;
  page: number;
  num: number;
}) => {
  const result = await apiCaller.get(ENDPOINTS.menu.getNewsByCateId, {
    params: {
      service_id: id,
      page,
      num,
    },
  });
  return result.data;
};

export const getNewsDetail = async (id: number) => {
  const result = await apiCaller.get(ENDPOINTS.menu.getNewsDetail, {
    params: {
      service_id: id,
    },
  });
  return result;
};

export const getNewsByPage = ({
  page,
  id,
  num,
}: {
  page: number;
  id: number;
  num: number;
}) => {
  const fetcher = async ({
    id,
    page,
    num,
  }: {
    id: number;
    page: number;
    num: number;
  }) => {
    const result = await getNewsByCateId({
      id: id,
      page: page,
      num,
    });
    return result;
  };

  const { data, isLoading } = useSWR(
    `api/v1/portal/menu/getNewsByCateId?service_id=${id}&page=${page}&num=${num}`,
    () => fetcher({ id, page: Number(page), num })
  );
  return {
    data,
  };
};
