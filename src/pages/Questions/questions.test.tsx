import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Questions from ".";
import { AppContextProvider } from "../../contexts";

describe("Questions Page", () => {
  it("page should generate first question", () => {
    const history = createMemoryHistory();

    render(
      <AppContextProvider>
        <Router location={history.location} navigator={history}>
          <Questions />
        </Router>
      </AppContextProvider>
    );

    const buttonElement = screen.getByText(/r B2B or both/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("should show model if there answers without finish", () => {
    const history = createMemoryHistory();

    render(
      <AppContextProvider>
        <Router location={history.location} navigator={history}>
          <Questions />
        </Router>
      </AppContextProvider>
    );
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    const buttonElement = screen.getByRole("button", {
      name: /next/i
    });
    fireEvent.click(buttonElement);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  it("should go to result page on finish flag is true", () => {
    const history = createMemoryHistory();

    render(
      <AppContextProvider
        store={{
          setCurrentQuestionsIds: jest.fn(),
          setFinish: jest.fn(),
          initQuestionary: jest.fn(),
          finish: true,
          answers: [{ answerId: 1, questionId: 2 }]
        }}>
        <Router location={history.location} navigator={history}>
          <Questions />
        </Router>
      </AppContextProvider>
    );
    expect(history.location.pathname).toEqual("/result");
  });
});
