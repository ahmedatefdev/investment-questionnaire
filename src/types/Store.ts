import { IAnswer, IQuestion } from ".";
export interface AnsweredQuestion {
  questionId: number;
  answerId: number;
  answerValue?: any;
}

interface Store {
  finish: boolean;
  currentQuestionsIds: number[];
  answers: AnsweredQuestion[];

  currentAnswers: AnsweredQuestion[];
  setCurrentQuestionsIds: (ids: number[]) => void;
  setAnswers: (answers: any) => void;
  setFinish: (finish: boolean) => void;
  onChangeCurrentAnswers: (
    question: IQuestion,
    answer: IAnswer,
    answerValue?: any
  ) => void;
  MoveNext: () => void;
  initQuestionary: () => void;
}
export default Store;
