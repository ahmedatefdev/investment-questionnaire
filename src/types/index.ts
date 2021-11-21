export enum AnswerType {
  YES_NO,
  CHOOSE,
  NUMBER_INPUT
}

export interface IAnswer {
  id: number;
  text?: string;
  questionsIdToOpen: number[];
}

export interface IQuestion {
  id: number;
  text: string;
  answerType: AnswerType;
  NextQuestionsIds?: number[];
  answers?: IAnswer[];
  MainQuestion?: boolean;
  ChildQuestionIds?: number[];
}
