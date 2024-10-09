"use server";

import { login } from "@/apiRequests/auth";
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

  const result = await login(rawFormData);
  if (result?.token) {
    cookies().set({
      name: "user_info",
      value: result?.token,
      httpOnly: true,
      path: "/",
    });
  }

  return {
    message: result.message,
  };
};
