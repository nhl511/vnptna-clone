export const post = async ({ url, body }: { url: string; body: any }) => {
  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_BASE_URL + url, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
  return res;
};

export const get = async ({ url, option }: { url: string; option?: any }) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_BASE_URL + url,
    option ? option : null
  );
  return res;
};
