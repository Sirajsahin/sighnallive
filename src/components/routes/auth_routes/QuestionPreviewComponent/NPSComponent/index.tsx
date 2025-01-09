import { useUtils } from "@/app/hooks/useUtils";
import {
  IuserResponse,
  setUserResponse,
} from "@/app_redux/reducers/slice/auth/survey_slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const NPSComponent = ({ data, flage, questionId }) => {
  const { splitEmojiAndText } = useUtils();
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (option: number, item: string) => {
    setSelectedOption(option);

    const constructedBody: IuserResponse = {
      question_id: questionId,
      response: item,
    };

    dispatch(setUserResponse({ data: [constructedBody] }));
  };

  return (
    <div>
      <div
        className={`${flage ? "grid grid-cols-5" : "flex flex-wrap"} gap-3 my-4`}
      >
        {data?.map((option, index) => (
          <div
            key={index}
            className={`${flage ? "p-3 gap-3 flex-col justify-between" : "p-2 gap-3 flex "} w-full flex items-center  rounded-lg  text-sm  cursor-pointer transition-colors duration-500 ${
              selectedOption === index
                ? "bg-[#0C6243] text-white border"
                : "bg-white text-[#333333]"
            }`}
            onClick={() => handleOptionClick(index, option)}
          >
            <p className={`text-2xl ${!flage && "bg-white rounded-md px-1"}`}>
              {splitEmojiAndText(option)?.emoji}
            </p>
            <p className="text-xs">{splitEmojiAndText(option)?.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NPSComponent;
