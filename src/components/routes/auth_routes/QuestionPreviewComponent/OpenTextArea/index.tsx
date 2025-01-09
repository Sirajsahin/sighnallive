import {
  IuserResponse,
  setUserResponse,
} from "@/app_redux/reducers/slice/auth/survey_slice";
import TextareaComponent from "@/components/ui/TextareaComponent";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const OpenTextArea = ({ questionId }) => {
  const dispatch = useDispatch();

  const formHook = useForm<any>({
    defaultValues: {
      question_details: null,
    },
  });

  useEffect(() => {
    const constructedBody: IuserResponse = {
      question_id: questionId,
      response: formHook.watch("question_details"),
    };

    dispatch(setUserResponse({ data: [constructedBody] }));
  }, [formHook.watch("question_details")]);

  return (
    <>
      <TextareaComponent
        className="text-sm w-full"
        rows={4}
        placeholder="Your end consumers give there comments here..."
        register={formHook.register(`question_details`, {
          required: false,
        })}
        fieldError={
          formHook?.formState?.errors?.question_details
            ? formHook.formState.errors.question_details
            : null
        }
        errorMessages={[
          {
            message: "Option is required",
            type: "required",
          },
        ]}
      />
    </>
  );
};
export default OpenTextArea;
