import { apiCaller } from "@/axios/client";
import { ENDPOINTS } from "./api-endpoints.service";

export const login = async (formData: any) => {
  try {
    const result = await apiCaller.post(ENDPOINTS.user.login, formData);
    return { message: "success", token: result.data.token };
  } catch (error: any) {
    return {
      message:
        error.response.data.message ||
        error.response.data.error.message ||
        "Something went wrong",
    };
  }
};

export const changePassword = async (formData: any) => {
  try {
    await apiCaller.post(ENDPOINTS.user.changePassword, formData);
    return { message: "success" };
  } catch (error: any) {
    return {
      message:
        error.response.data.message ||
        error.response.data.error.message ||
        "Something went wrong",
    };
  }
};
