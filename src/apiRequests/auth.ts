import { post } from "@/lib/fetch";

export const login = async (formData: any) => {
  try {
    const res = await post({
      endpoint: "/api/v1/portal/user/processLogin",
      body: formData,
    });

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || result.error.message);
    }

    return { message: "success", token: result.data.token };
  } catch (error: any) {
    return {
      message: error?.message || "Something went wrong",
    };
  }
};
