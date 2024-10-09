"use server";

import { cookies } from "next/headers";

export const authenticate = async (prevState: any, formData: any) => {
  const { partner_id, username, password, captcha_token, captcha_text } =
    Object.fromEntries(formData);
  const rawFormData = {
    partner_id,
    username,
    password,
    captcha_token,
    captcha_text,
  };

  try {
    const result = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
        "/api/v1/portal/user/processLogin",
      {
        body: JSON.stringify(rawFormData),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }
    );

    const payload = await result.json();
    const data = {
      status: result.status,
      payload,
    };

    if (!result.ok) {
      throw new Error(data.payload.message || data.payload.error.message);
    }

    cookies().set({
      name: "user_info",
      value: data.payload.data.token,
      httpOnly: true,
      path: "/",
    });

    return { message: "success" };
  } catch (error: any) {
    return {
      message: error?.message || "Something went wrong",
    };
  }
};
