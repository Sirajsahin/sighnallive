import { useQuestionPreviewAPI } from "@/app/hooks/api_hooks/Group/useQuestionPreviewAPI";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ImagePreviewComponent from "./ImagePreviewComponent";
import MultipleOptionComponent from "./MultipleOptionComponent";
import NPSComponent from "./NPSComponent";
import OpenTextArea from "./OpenTextArea";
import OptionComponent from "./OptionComponent";
import RatingComponent from "./RatingComponent";
import { useRouter } from "@/app/hooks/useRouter";
import useRouteInfo from "@/app/hooks/useRouteInfo";
import {
  ISurvetSliceState,
  IuserResponse,
  IUserResponseProps,
  setPayloadData,
} from "@/app_redux/reducers/slice/auth/survey_slice";
import { useDispatch } from "react-redux";
import { useSurveyResponse } from "@/app/hooks/api_hooks/Group/useSurveyResponse";

const QuestionPreviewComponent = () => {
  const [params, _setparams] = useSearchParams();
  const { execute: fetchQuestionDetails, prevQuestionDetails } =
    useQuestionPreviewAPI();
  const navigate = useNavigate();

  const { execute: submitResponse } = useSurveyResponse();

  const { getRouteKey } = useRouter();
  const { userResponse, payloadData } = useRouteInfo(
    getRouteKey("HOME_PAGE", "id")
  )?.routeState?.state as ISurvetSliceState;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [prevFlage, setPrevFlage] = useState<boolean>(true);

  const dispatch = useDispatch();
  // const [isExpanded, setIsExpanded] = useState(false);
  // const maxLength = 100; // Maximum length for truncated text

  // const toggleExpansion = () => {
  //   setIsExpanded(!isExpanded);
  // };
  const prevQuestionDetailsData: any =
    prevQuestionDetails && (prevQuestionDetails?.questions as any);

  useEffect(() => {
    // Detect if the device is mobile or not
    const userAgent = navigator.userAgent || navigator.vendor;
    if (
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      )
    ) {
      setPrevFlage(false);
    } else {
      setPrevFlage(true);
    }
  }, []);

  const isCalled = useRef(false); // Track whether the function has been called
  useEffect(() => {
    if (!isCalled.current) {
      const survey_id = params.get("survey_id");
      if (survey_id) {
        fetchQuestionDetails(survey_id);
      }
      isCalled.current = true; // Mark as called
    }
  }, [isCalled]);

  const handleContinue = () => {
    const isQuestionAvalable: IuserResponse[] = userResponse?.filter(
      (item) => item.question_id === currentQuestion?.question_id
    );
    const constructedBody: IuserResponse = {
      question_id: isQuestionAvalable[0]?.question_id,
      response: isQuestionAvalable[0]?.response,
    };
    dispatch(setPayloadData({ data: [...payloadData, constructedBody] }));

    if (currentQuestionIndex < prevQuestionDetailsData?.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handlePreviews = () => {
    if (currentQuestionIndex < prevQuestionDetailsData?.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };
  // console.log(userResponse, "userResponse");
  const currentQuestion =
    prevQuestionDetailsData?.length > 0 &&
    prevQuestionDetailsData[currentQuestionIndex];

  const renderQuestionComponent = () => {
    switch (currentQuestion?.question_type_id) {
      case "single_choice":
        return (
          <OptionComponent
            data={currentQuestion?.options}
            questionId={currentQuestion?.question_id}
          />
        );
      case "multiple_choice":
        return (
          <MultipleOptionComponent
            data={currentQuestion?.options}
            questionId={currentQuestion?.question_id}
          />
        );
      case "mood_scale":
        return (
          <NPSComponent
            data={currentQuestion?.mood}
            flage={prevFlage}
            questionId={currentQuestion?.question_id}
          />
        );
      case "rating_scale":
        return (
          <RatingComponent
            data={currentQuestion?.rating_scale}
            flage={prevFlage}
            questionId={currentQuestion?.question_id}
          />
        );
      case "open_text_response":
        return <OpenTextArea questionId={currentQuestion?.question_id} />;
      case "image_single_choice":
        return (
          <ImagePreviewComponent
            data={currentQuestion?.image}
            flage={prevFlage}
            type={false}
            questionId={currentQuestion?.question_id}
          />
        );
      case "image_multiple_choice":
        return (
          <ImagePreviewComponent
            data={currentQuestion?.image}
            flage={prevFlage}
            type={true}
            questionId={currentQuestion?.question_id}
          />
        );
      default:
        return null;
    }
  };

  const handelSubmit = () => {
    const actualData = [...payloadData]; // Create a shallow copy of payloadData
    const userResponseToAdd = userResponse[0];

    // Check for uniqueness based on a key, e.g., `question_id`
    const isAlreadyPresent = actualData.some(
      (item) => item.question_id === userResponseToAdd.question_id
    );

    if (!isAlreadyPresent) {
      actualData.push(userResponseToAdd);
    }

    const constructed: IUserResponseProps = {
      mobile: prevQuestionDetails?.mobile,
      responses: actualData,
    };

    submitResponse(constructed, params.get("survey_id")).then(({ status }) => {
      if (status) {
        navigate(`/thankyou`);
      }
    });
    //
  };

  const isDisableButton = () => {
    const isQuestionAvalable: IuserResponse[] = userResponse?.filter(
      (item) => item.question_id === currentQuestion?.question_id
    );
    console.log(isQuestionAvalable, "isQuestionAvalable");
    return isQuestionAvalable?.length > 0 ? false : true;
  };

  return (
    <div className="">
      <div className="grid-cols-3 grid items-center border-b  pb-4 ">
        <div className=" flex items-center gap-3 font-bold cursor-pointer"></div>

        <div></div>
      </div>
      {prevFlage ? (
        <div className="grid grid-cols-3 gap-14 my-10 mx-14">
          <div className="grid grid-cols-4">
            <div className="col-span-4">
              <div className="mb-4">
                <div className="h-20 w-20 rounded-full bg-[#D9D9D9] flex items-center justify-center relative overflow-hidden cursor-pointer">
                  {prevQuestionDetails?.icon && (
                    <img
                      src={prevQuestionDetails?.icon}
                      alt="Company Logo"
                      className="h-full w-full object-cover rounded-full cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <h3 className="font-medium text-base">
                {prevQuestionDetails?.survey_name}
              </h3>
              <p className="text-sm my-3 text-[#475467]">
                {prevQuestionDetails?.survey_description}
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <p className="text-xs ">
              Question {currentQuestionIndex + 1} to &nbsp;
              {prevQuestionDetailsData?.length}
            </p>
            <div className="h-auto bg-[#4754670D] p-5 rounded-xl flex flex-col gap-4 mt-2">
              <p className="text-sm text-[#333333]">
                {currentQuestion?.question}
              </p>
              {renderQuestionComponent()}
              <div className="flex items-center gap-8 mx-5">
                {currentQuestion?.can_skipped === "true" && (
                  <button
                    className="text-[#333333] font-medium cursor-pointer"
                    onClick={handleContinue}
                  >
                    Skip
                  </button>
                )}

                {currentQuestionIndex !== 0 && (
                  <button
                    type="submit"
                    onClick={handlePreviews}
                    className="inline-flex justify-center rounded-md text-[#333333] px-6 py-2 text-sm font-semibold bg-white border cursor-pointer"
                  >
                    Back
                  </button>
                )}
                {prevQuestionDetailsData?.length ===
                currentQuestionIndex + 1 ? (
                  <button
                    type="submit"
                    disabled={isDisableButton()}
                    onClick={handelSubmit}
                    className={`${isDisableButton() ? "bg-gray-400" : "bg-[#333333]"} inline-flex justify-center rounded-md bg-[#333333] px-4 py-2 text-sm font-semibold text-white cursor-pointer border-transparent`}
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleContinue}
                    disabled={isDisableButton()}
                    className={`inline-flex justify-center rounded-md ${isDisableButton() ? "bg-gray-400" : "bg-[#333333]"} px-4 py-2 text-sm font-semibold text-white cursor-pointer border`}
                  >
                    Continue
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full my-10">
          <div className="border-[5px] border-opacity-20 border-gray-500 w-[370px] min-h-[700px] p-4 rounded-2xl">
            <div>
              <div className="">
                <div className="h-20 w-20 rounded-full bg-[#D9D9D9] flex items-center justify-center relative overflow-hidden cursor-pointer">
                  {prevQuestionDetails?.icon && (
                    <img
                      src={prevQuestionDetails?.icon}
                      alt="Company Logo"
                      className="h-full w-full object-cover rounded-full cursor-pointer"
                    />
                  )}
                </div>
              </div>
              <h3 className="font-bold text-xl my-3">
                {prevQuestionDetails?.survey_name}
              </h3>
              <p className="text-sm my-3 text-[#475467] font-normal">
                {prevQuestionDetails?.survey_description}
              </p>
            </div>
            <div>
              <p className="text-xs mt-3">
                Question {currentQuestionIndex + 1} to{" "}
                {prevQuestionDetailsData?.length}
              </p>
              <div className="h-auto bg-[#4754670D] p-5 rounded-xl flex flex-col gap-4 mt-2">
                <p className="text-sm text-[#333333] font-medium">
                  {currentQuestion?.question}
                </p>
                {renderQuestionComponent()}
                <div
                  className={`flex items-center gap-${currentQuestion?.can_skipped === "true" && "5"} `}
                >
                  {currentQuestion?.can_skipped === "true" && (
                    <button
                      className="text-[#333333] font-medium cursor-pointer"
                      onClick={handleContinue}
                    >
                      Skip
                    </button>
                  )}

                  {currentQuestionIndex !== 0 && (
                    <button
                      type="submit"
                      onClick={handlePreviews}
                      className="inline-flex justify-center rounded-md text-[#333333] px-6 py-2 text-sm font-semibold  cursor-pointer"
                    >
                      Back
                    </button>
                  )}
                  {prevQuestionDetailsData?.length ===
                  currentQuestionIndex + 1 ? (
                    <button
                      type="submit"
                      onClick={handelSubmit}
                      disabled={isDisableButton()}
                      className={`inline-flex justify-center rounded-md ${isDisableButton() ? "bg-gray-400" : "bg-[#333333]"} px-4 py-2 text-sm font-semibold text-white cursor-pointer border-transparent`}
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleContinue}
                      disabled={isDisableButton()}
                      className={`inline-flex justify-center ${isDisableButton() ? "bg-gray-400" : "bg-[#333333]"} rounded-md px-4 py-2 text-sm font-semibold text-white cursor-pointer border-transparent`}
                    >
                      Continue
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionPreviewComponent;
