import { render, screen, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Result from ".";
import { AppContextProvider } from "../../contexts";
import Store from "../../types/Store";
import { resultData as fakeResultData } from "../../__mocks__/data";
import QUESTIONS_DATA, { ANSWERS_DATA } from "../../data/questionsData";

describe("Result Page", () => {
  it("should show message of success if finish", () => {
    const history = createMemoryHistory();

    renderResultPage(history, { answers: [{ answerId: 1, questionId: 3 }] });

    const successElm = screen.getByTestId("toast-test");
    expect(successElm).toBeInTheDocument();
    expect(successElm.classList.contains("show")).toBeTruthy();
  });

  it("should has questions and answer", () => {
    const history = createMemoryHistory();

    renderResultPage(history, { answers: fakeResultData });

    const firstQuestion = screen.getByText(QUESTIONS_DATA[0].text);
    const secAnswer = screen.getByText(ANSWERS_DATA[0].text!);

    expect(firstQuestion).toBeInTheDocument();
    expect(secAnswer).toBeInTheDocument();
  });

  it("should has to home btn", () => {
    const history = createMemoryHistory();

    renderResultPage(history);

    const buttonElement = screen.getByRole("button", {
      name: /Return To Home/i
    });

    expect(buttonElement).toBeInTheDocument();
  });
  it("should return to home if home btn clicked", () => {
    const history = createMemoryHistory();

    renderResultPage(history);

    const buttonElement = screen.getByRole("button", {
      name: /Return To Home/i
    });

    fireEvent.click(buttonElement);

    expect(history.location.pathname).toBe("/");
  });
});

function renderResultPage(history: any, store?: Partial<Store>) {
  render(
    <AppContextProvider store={store}>
      <Router location={history.location} navigator={history}>
        <Result />
      </Router>
    </AppContextProvider>
  );
}
