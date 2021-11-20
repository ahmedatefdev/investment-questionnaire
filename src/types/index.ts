export enum AnswerType {
  YES_NO,
  CHOOSE,
  NUMBER_INPUT
}

export interface Answer {
  id: number;
  text?: string;
  questionsIdToOpen: number[];
}

export interface Question {
  question: string;
  answerType: AnswerType;
  NextQuestionsIds?: number[];
  answers?: Answer[];
  MainQuestion?: boolean;
}
