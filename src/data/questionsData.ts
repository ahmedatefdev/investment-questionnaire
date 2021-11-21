import { IAnswer, AnswerType, IQuestion } from "../types";

export const ANSWERS_DATA: IAnswer[] = [
  { id: 1, text: "B2C", questionsIdToOpen: [2] },
  {
    id: 2,
    text: "B2B",
    questionsIdToOpen: [3]
  },
  { id: 3, text: "both", questionsIdToOpen: [2, 3] },
  { id: 4, text: "yes", questionsIdToOpen: [4] },
  { id: 5, text: "no", questionsIdToOpen: [4] },
  { id: 6, text: "Number Input", questionsIdToOpen: [] }
];

const QUESTIONS_DATA: IQuestion[] = [
  {
    id: 1,
    answerType: AnswerType.CHOOSE,
    text: "Is your business model B2C or B2B or both?",
    answers: [ANSWERS_DATA[0], ANSWERS_DATA[1], ANSWERS_DATA[2]]
  },
  {
    id: 2,
    text: "Do you target all age brackets?",
    answerType: AnswerType.YES_NO,
    answers: [ANSWERS_DATA[3], ANSWERS_DATA[4]]
  },
  {
    id: 3,
    text: "Do you target all industries?",
    answerType: AnswerType.YES_NO,
    answers: [ANSWERS_DATA[3], ANSWERS_DATA[4]]
  },
  {
    id: 4,
    text: "Did you have an investment?",
    answerType: AnswerType.YES_NO,
    answers: [
      { ...ANSWERS_DATA[3], questionsIdToOpen: [] },
      { ...ANSWERS_DATA[4], questionsIdToOpen: [] }
    ],
    MainQuestion: true,
    ChildQuestionIds: [5]
  },
  {
    id: 5,
    text: "how much was the investment?",
    answerType: AnswerType.NUMBER_INPUT,
    answers: [ANSWERS_DATA[5]]
  }
];
export default QUESTIONS_DATA;
