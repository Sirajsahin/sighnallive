import {
  IuserResponse,
  setUserResponse,
} from "@/app_redux/reducers/slice/auth/survey_slice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const RatingComponent = ({ data, flage, questionId }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<number>(null);

  const createRatingData = (value: string) => {
    const item = [];
    for (let i = 1; i <= parseInt(value); i++) {
      item.push(`${i}`);
    }
    return item;
  };

  const handleOptionClick = (option: number, item: string) => {
    setSelected(option);

    const constructedBody: IuserResponse = {
      question_id: questionId,
      response: item,
    };

    dispatch(setUserResponse({ data: [constructedBody] }));
  };

  return (
    <div>
      <div className={`grid grid-cols-${flage ? "12" : "5"} gap-3  `}>
        {createRatingData(data)?.map((val, index) => {
          return (
            <div
              key={index}
              className={`text-sm font-semibold  ${selected === index ? "bg-black text-white" : "bg-white "} p-3 rounded-lg text-center py-3  cursor-pointer `}
              onClick={() => handleOptionClick(index, val)}
            >
              {val}
            </div>
          );
        })}
      </div>
      {flage && (
        <div className="w-2/5">
          <div className="text-sm justify-between flex items-center my-3 w-full">
            <p>Very unsatisfied</p>
            <p>Very Satisfied</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RatingComponent;
