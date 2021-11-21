import React, { useMemo } from "react";
import { useAppContext } from "../../contexts";
import { ANSWERS_DATA } from "../../data/questionsData";
import { AnswerType, IQuestion } from "../../types";
import Answers from "./answer";

interface Props {
  question: IQuestion;
  parentQuestion?: IQuestion;
}

const Question: React.FC<Props> = ({ question, parentQuestion }) => {
  const { currentAnswers } = useAppContext();

  const disabled = useMemo(
    () =>
      ANSWERS_DATA.find(
        (ansDate) =>
          ansDate.id ===
          currentAnswers?.find((ans) => ans.questionId === parentQuestion?.id)
            ?.answerId
      )?.text?.toLocaleLowerCase() !== "yes",
    [currentAnswers]
  );

  return (
    <div className=' border-3 border-bottom p-3 mb-3 text-danger'>
      <h2
        className={`text-white mb-4 color ${
          parentQuestion && disabled && "text-muted"
        }`}>
        {question.text}
      </h2>
      <Answers question={question} disabled={disabled} />
    </div>
  );
};

export default Question;
