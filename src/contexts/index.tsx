import React, { createContext, useContext, useState } from "react";
import { Answer } from "../types";
import Store from "../types/Store";

export const AppContext = createContext<Partial<Store>>({ finish: false });

export const AppContextProvider: React.FC = ({ children }) => {
  const [currentQuestionsIds, setCurrentQuestionsIds] = useState<number[]>([]);
  const [currentAnswers, setCurrentAnswers] = useState<Answer[]>([]);
  const [answers, setAnswers] = useState([]);
  const [finish, setFinish] = useState(false);
  const AppContextStore: Store = {
    currentQuestionsIds,
    currentAnswers,
    answers,
    finish,
    setCurrentQuestionsIds,
    setCurrentAnswers,
    setAnswers,
    setFinish
  };

  return (
    <AppContext.Provider value={AppContextStore}>
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
