import { endpoint } from "@/lib/apiEndpoint";
import { post } from "@/lib/fetch";

const api = "/api/v1/portal/user";

export const login = async (formData: any) => {
  try {
    const res = await post({
      url: api + endpoint.user.login,
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

export const changePassword = async (formData: any) => {
  try {
    const res = await post({
      url: api + endpoint.user.changePassword,
      body: formData,
    });
    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.message || result.error.message);
    }
    return { message: "success" };
  } catch (error: any) {
    return { message: error?.message };
  }
};
