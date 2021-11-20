import { Answer } from ".";
interface AnsweredQuestion {
  questionId: number;
  answerId: number;
}

interface Store {
  finish: boolean;
  currentQuestionsIds: number[];
  answers: AnsweredQuestion[];

  currentAnswers: Answer[];
  setCurrentQuestionsIds: (ids: number[]) => void;
  setCurrentAnswers: (answers: Answer[]) => void;
  setAnswers: (answers: any) => void;
  setFinish: (finish: boolean) => void;
}
export default Store;
