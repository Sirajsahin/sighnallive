import { useQuestionPreviewAPI } from "@/app/hooks/api_hooks/Group/useQuestionPreviewAPI";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ImagePreviewComponent from "./ImagePreviewComponent";
import MultipleOptionComponent from "./MultipleOptionComponent";
import NPSComponent from "./NPSComponent";
import OpenTextArea from "./OpenTextArea";
import OptionComponent from "./OptionComponent";
import RatingComponent from "./RatingComponent";

const QuestionPreviewComponent = () => {
  const [params, _setparams] = useSearchParams();
  const { execute: fetchQuestionDetails, prevQuestionDetails } =
    useQuestionPreviewAPI();
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [prevFlage, setPrevFlage] = useState<boolean>(true);

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
    if (currentQuestionIndex < prevQuestionDetailsData?.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handlePreviews = () => {
    if (currentQuestionIndex < prevQuestionDetailsData?.length) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentQuestion =
    prevQuestionDetailsData?.length > 0 &&
    prevQuestionDetailsData[currentQuestionIndex];

  const renderQuestionComponent = () => {
    switch (currentQuestion?.question_type_id) {
      case "single_choice":
        return <OptionComponent data={currentQuestion?.options} />;
      case "multiple_choice":
        return <MultipleOptionComponent data={currentQuestion?.options} />;
      case "mood_scale":
        return <NPSComponent data={currentQuestion?.mood} flage={prevFlage} />;
      case "rating_scale":
        return (
          <RatingComponent
            data={currentQuestion?.rating_scale}
            flage={prevFlage}
          />
        );
      case "open_text_response":
        return <OpenTextArea />;
      case "image_single_choice":
        return (
          <ImagePreviewComponent
            data={currentQuestion?.image}
            flage={prevFlage}
            type={false}
          />
        );
      case "image_multiple_choice":
        return (
          <ImagePreviewComponent
            data={currentQuestion?.image}
            flage={prevFlage}
            type={true}
          />
        );
      default:
        return null;
    }
  };

  const handelSubmit = () => {
    navigate(`/thankyou`);
  };

  console.log(prevQuestionDetails, "SDdsd");

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
              Question {currentQuestionIndex + 1} to{" "}
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
                    onClick={handelSubmit}
                    className="inline-flex justify-center rounded-md bg-[#333333] px-4 py-2 text-sm font-semibold text-white cursor-pointer border-transparent"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleContinue}
                    className="inline-flex justify-center rounded-md bg-[#333333] px-4 py-2 text-sm font-semibold text-white cursor-pointer border"
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
                      className="inline-flex justify-center rounded-md bg-[#333333] px-4 py-2 text-sm font-semibold text-white cursor-pointer border-transparent"
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      type="submit"
                      onClick={handleContinue}
                      className="inline-flex justify-center rounded-md bg-[#333333] px-4 py-2 text-sm font-semibold text-white cursor-pointer border-transparent"
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
