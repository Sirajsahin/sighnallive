import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";

export const useQuestionPreviewAPI = () => {
  const [prevQuestionDetails, setPrevQuestionDetails] = useState<any>(null);
  const execute = useCallback(async (survey_id: string) => {
    try {
      const accessToken = localStorage.getItem("AuthToken");
      await axios
        .get(`https://api.sighnal.com/survey/data/${survey_id} `, {
          headers: {
            Authorization: `${accessToken}`,
          },
        })
        .then((res: AxiosResponse<any>) => {
          if (res.data.status === true) {
            setPrevQuestionDetails(res.data?.data);
          } else {
            setPrevQuestionDetails([]);
          }
        })
        .catch((e: AxiosError) => {
          setPrevQuestionDetails([]);
          if (e.code === "ERR_BAD_REQUEST") {
            //
          }
          if (e.status === 400) {
            toast.error("User Onboard Faild");
          }
          if (e.response.status === 500) {
            toast.error("Server error 500");
          }
        });
    } catch (e: any) {
      setPrevQuestionDetails([]);
      toast.error("Server Error: " + e.message);
    }
  }, []);
  return { execute, prevQuestionDetails };
};
