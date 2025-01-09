import {
  IuserResponse,
  setUserResponse,
} from "@/app_redux/reducers/slice/auth/survey_slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const OptionComponent = ({ data, questionId }) => {
  const dispatch = useDispatch();

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handelSelect = (index, item) => {
    setSelectedOption(index);

    const constructedBody: IuserResponse = {
      question_id: questionId,
      response: item,
    };

    dispatch(setUserResponse({ data: [constructedBody] }));
  };

  return (
    <div>
      {data?.map((option, index) => (
        <div
          key={index}
          className={`bg-white w-full flex items-center justify-between rounded-lg  cursor-pointer transition-colors duration-300 mb-3`}
          onClick={() => handelSelect(index, option)}
        >
          <div
            className={`${selectedOption === index ? "bg-[#0C6243] text-white" : "bg-white text-black "} text-sm  w-full h-auto flex rounded-lg  p-2 justify-between items-center  transition-all duration-600`}
          >
            <span className="w-full">{option}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OptionComponent;
