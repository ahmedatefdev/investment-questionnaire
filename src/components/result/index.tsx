import React from "react";
import { useAppContext } from "../../contexts";
import { getCurrentFullAnswers } from "../../lib/getCurrentFullAnswers";

interface Props {}

const Results = (props: Props) => {
  const { answers } = useAppContext();
  const result = getCurrentFullAnswers(answers!);

  return (
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xxl-3 w-100 text-center'>
      {answers === undefined || answers?.length <= 0 ? (
        <div className='col text-white w-100 mb-4'>
          <h2 className=''>No answers To show please do the Questionary!</h2>
        </div>
      ) : (
        result?.map((data, i) => {
          return (
            <div className='col text-white' key={i}>
              <h3 className='text-white'>{data.questionText}</h3>
              <p className='lead'>{data.answerText}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Results;

