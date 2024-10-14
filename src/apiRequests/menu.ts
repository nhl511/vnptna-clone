import { endpoint } from "@/lib/apiEndpoint";
import { get } from "@/lib/fetch";

const api = "/api/v1/portal/menu";

export const getNewsByCateId = async ({
  id,
  page,
  num,
}: {
  id: number;
  page: number;
  num: number;
}) => {
  const res = await get({
    url:
      api +
      endpoint.menu.getNewsByCateId +
      `?service_id=${id}&page=${page}&num=${num}`,
    option: { next: { revalidate: 5 } },
  });
  const result = await res.json();
  return result.data;
};

export const getIntroHeader = async (id: number) => {
  const res = await get({
    url: api + endpoint.menu.getNewsByCateId + `?service_id=${id}&page=1&num=1`,
  });
  const result = await res.json();
  return result;
};

export const getNewsDetail = async (id: number) => {
  const res = await get({
    url: api + endpoint.menu.getNewsDetail + `?service_id=${id}`,
  });
  const result = await res.json();
  return result;
};
