import QUESTIONS_DATA, { ANSWERS_DATA } from "../data/questionsData";
import { AnsweredQuestion } from "../types/Store";

export function getCurrentFullAnswers(answers: AnsweredQuestion[]) {
  return answers?.map((ans) => {
    const question = QUESTIONS_DATA.find((qus) => {
      return ans.questionId === qus.id;
    })?.text;
    const answer = ans.answerValue !== undefined
      ? ans.answerValue
      : ANSWERS_DATA.find((currentAns) => {
        return ans.answerId === currentAns.id;
      })?.text;
    return { questionText: question, answerText: answer };
  });
}
