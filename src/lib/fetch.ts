export const post = async ({
  endpoint,
  body,
}: {
  endpoint: string;
  body: any;
}) => {
  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_BASE_URL + endpoint, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  return res;
};
