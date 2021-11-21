import React, { createContext, useCallback, useContext, useState } from "react";
import QUESTIONS_DATA, { ANSWERS_DATA } from "../data/questionsData";
import { IAnswer, IQuestion } from "../types";
import Store, { AnsweredQuestion } from "../types/Store";

export const AppContext = createContext<Partial<Store>>({ finish: false });
interface Props {
  store?: Partial<Store>;
}
export const AppContextProvider: React.FC<Props> = ({ children, store }) => {
  const [currentQuestionsIds, setCurrentQuestionsIds] = useState<number[]>([]);
  const [currentAnswers, setCurrentAnswers] = useState<AnsweredQuestion[]>([]);
  const [answers, setAnswers] = useState<AnsweredQuestion[]>([]);
  const [finish, setFinish] = useState(false);

  const initQuestionary = () => {
    setCurrentQuestionsIds!([QUESTIONS_DATA[0].id]);
    setCurrentAnswers([]);
    setAnswers([]);
    setFinish(false);
  };
  const onChangeCurrentAnswers = (
    question: IQuestion,
    answer: IAnswer,
    answerValue: any
  ) => {
    setCurrentAnswers((old: AnsweredQuestion[]): AnsweredQuestion[] => [
      ...old.filter((answered) =>
        question.MainQuestion
          ? answered?.questionId !== question.id &&
            !question.ChildQuestionIds?.includes(answered.questionId)
          : answered?.questionId !== question.id
      ),
      { answerId: answer?.id, questionId: question?.id, answerValue }
    ]);
  };

  const getNewQuestionsIds = () => {
    const currentAnswersIds = currentAnswers.map((ans) => ans.answerId);
    let getAns = currentAnswers.map((ans) =>
      QUESTIONS_DATA.find((mainQ) => ans.questionId === mainQ.id)
    );

    let newIds: number[] = [];

    getAns.forEach((newAns) =>
      newAns!
        .answers!.filter((ans) => currentAnswersIds.includes(ans.id))
        .forEach((curQ) => {
          newIds = [...newIds, ...curQ?.questionsIdToOpen];
        })
    );
    newIds = newIds.filter((v, i, a) => a.indexOf(v) === i);
    return newIds;
  };

  const MoveNext = () => {
    const questions = currentQuestionsIds.map((id) => {
      const question = QUESTIONS_DATA.find((qus) => {
        return id === qus.id;
      });
      return question;
    });

    const isHasParentQuestion = questions.some((qus) => {
      return !!qus?.MainQuestion;
    });

    if (
      !currentAnswers.length ||
      (currentQuestionsIds.length > currentAnswers.length &&
        !isHasParentQuestion)
    )
      return alert("Please answer all questions!");

    setAnswers((old) => [...old, ...currentAnswers]);

    let newIds: number[] = getNewQuestionsIds();

    if (!newIds.length) return setFinish(true);

    setCurrentQuestionsIds(newIds);
    setCurrentAnswers([]);
  };

  const AppContextStore: Store = {
    currentQuestionsIds,
    currentAnswers,
    answers,
    finish,
    setCurrentQuestionsIds,
    onChangeCurrentAnswers,
    setAnswers,
    setFinish,
    MoveNext,
    initQuestionary
  };

  return (
    <AppContext.Provider value={store || AppContextStore}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
