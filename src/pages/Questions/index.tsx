import React, { useEffect, useMemo } from "react";
import MainSpin from "../../components/common/mainSpin";
import Page from "../../components/page";
import Question from "../../components/questionnaire/question";
import { useAppContext } from "../../contexts";
import QUESTIONS_DATA from "../../data/questionsData";
import { useParams, useNavigate } from "react-router-dom";

interface Props {}

const Questions = (props: Props) => {
  const { setCurrentQuestionsIds, currentQuestionsIds } = useAppContext();
  const { MoveNext, finish, setFinish, answers, initQuestionary } =
    useAppContext();
  const navigate = useNavigate();
  useEffect(() => {
    // setCurrentQuestionsIds!([QUESTIONS_DATA[0].id]);
    // setFinish!(false);
    initQuestionary!();
    return () => {
      setFinish!(false);
    };
  }, []);

  useEffect(() => {
    // setCurrentQuestionsIds!([QUESTIONS_DATA[0].id]);
    if (finish && answers?.length) {
      navigate("/result");
    }
  }, [finish]);

  const currentQuestions = useMemo(
    () =>
      QUESTIONS_DATA.filter((question) =>
        currentQuestionsIds?.includes(question.id)
      ).map((question, i) => (
        <div key={i}>
          <Question question={question} />
          {question.MainQuestion &&
            QUESTIONS_DATA.filter((questionData) =>
              question.ChildQuestionIds?.includes(questionData.id)
            ).map((currQuestion) => (
              <Question question={currQuestion} parentQuestion={question} />
            ))}
        </div>
      )),
    [currentQuestionsIds]
  );
  return (
    <Page>
      <div className='d-flex justify-content-center align-items-center flex-column bg-dark min-wrapper-hight m-auto '>
        {!currentQuestions.length ? (
          <MainSpin />
        ) : (
          <>
            <div className='container'>{currentQuestions}</div>
            <div className='mt-5 d-flex justify-content-around align-items-center container'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={MoveNext}>
                {"Next"}
              </button>
            </div>
          </>
        )}
      </div>
    </Page>
  );
};

export default Questions;
