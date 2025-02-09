import {
  IuserResponse,
  setUserResponse,
} from "@/app_redux/reducers/slice/auth/survey_slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const MultipleOptionComponent = ({ data, questionId }) => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const dispatch = useDispatch();

  const handleOptionClick = (index: number, item) => {
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter((i) => i !== index));
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedOptions([...selectedOptions, index]);
      setSelectedItems([...selectedItems, item]);
    }
  };

  useEffect(() => {
    if (selectedItems?.length > 0) {
      const constructedBody: IuserResponse = {
        question_id: questionId,
        response: selectedItems?.join(","),
      };

      dispatch(setUserResponse({ data: [constructedBody] }));
    } else {
      dispatch(setUserResponse({ data: [] }));
    }
  }, [selectedItems]);

  return (
    <div>
      {data?.map((option, index) => {
        // Check if the option is "Select All"

        return (
          <div
            key={index}
            className={`bg-white w-full flex items-center justify-between rounded-lg cursor-pointer transition-colors duration-300 mb-3`}
            onClick={() => handleOptionClick(index, option)}
          >
            <div
              className={`${
                selectedOptions.includes(index)
                  ? "bg-[#0C6243] text-white"
                  : "bg-white text-black"
              } text-sm w-full h-auto flex rounded-lg p-2 justify-between items-center transition-all duration-600`}
            >
              <span className="w-full">{option}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MultipleOptionComponent;
