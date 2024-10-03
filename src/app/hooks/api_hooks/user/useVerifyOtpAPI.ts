import { USER_LOGIN_APIS } from "@/api_framework/api_config";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback } from "react";
import toast from "react-hot-toast";

type InventoryTaxCreateAPIResponse = { status: boolean; message: string };

export const useVerifyOtpAPI = () => {
  const execute = useCallback(async (otp: string) => {
    const accessToken = localStorage.getItem("AuthToken");
    try {
      const response: InventoryTaxCreateAPIResponse = await axios
        .post(
          USER_LOGIN_APIS.VERIFY_OTP.baseURL ?? "",
          { otp: otp },
          {
            headers: {
              Authorization: `${accessToken}`,
            },
          }
        )
        .then((res: AxiosResponse<any>) => {
          if (res.data.status === true) {
            toast.success("OTP Verify Successful");
            return { status: true, message: "" };
          } else {
            toast.error("OTP Verify Failed");
            return {
              status: false,
              message: res.data.message ?? "Unknown error",
            };
          }
        })
        .catch((e: AxiosError) => {
          if (e.response?.status === 400) {
            toast.error("OTP Verify: Bad Request");
            return { status: false, message: "Bad Request" };
          }
          if (e.response?.status === 500) {
            toast.error("Server Error 500");
            return { status: false, message: "Server Error" };
          }
          toast.error("OTP Verify Failed");
          return { status: false, message: e.message };
        });
      return response;
    } catch (e: any) {
      toast.error("Server Error: " + e.message);
      return { status: false, message: e.message };
    }
  }, []);
  return { execute };
};
