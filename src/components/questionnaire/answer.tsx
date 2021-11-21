import React, { useMemo } from "react";
import { useAppContext } from "../../contexts";
import { AnswerType, IAnswer, IQuestion } from "../../types";

interface Props {
  question: IQuestion;
  disabled?: boolean;
}

const Answers: React.FC<Props> = ({ question, disabled }) => {
  const { currentAnswers, onChangeCurrentAnswers } = useAppContext();

  const val = useMemo(() => {
    return (
      currentAnswers?.find((ans) => {
        const isHasCurrentAns =
          question?.answers![0]?.id === ans?.answerId &&
          ans?.questionId === question?.id;
        return isHasCurrentAns;
      })?.answerValue || 0
    );
  }, [currentAnswers]);
  const answers =
    question.answerType === AnswerType.NUMBER_INPUT ? (
      <input
        className='form-control form-control-lg'
        type='text'
        placeholder='Enter the investment value'
        aria-label='investment value'
        disabled={disabled}
        value={val}
        onChange={(e) => {
          if (Number.isNaN(Number(e.currentTarget.value))) return;
          onChangeCurrentAnswers!(
            question,
            question.answers![0],
            Number(e.target.value)
          );
        }}
      />
    ) : (
      question.answers?.map((answer, i) => {
        const uniqName = `${question.text}-${answer.text}-${i}`;
        return (
          <div className='form-check d-inline-block mx-2' key={i}>
            <input
              className='form-check-input text-white'
              type='radio'
              name={`${question.text}`}
              checked={
                !!currentAnswers?.find(
                  (ans) =>
                    ans.questionId === question.id && ans.answerId === answer.id
                )
              }
              onChange={(e) => {
                onChangeCurrentAnswers!(question, answer);
              }}
              id={uniqName}
            />
            <label className='form-check-label text-white' htmlFor={uniqName}>
              {answer.text}
            </label>
          </div>
        );
      })
    );
  return <div className='mx-auto d-flex justify-content-center'>{answers}</div>;
};

export default Answers;
