import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "..";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import Questions from ".";

describe("Questions Page", () => {
  it("page should generate first questions", () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Questions />
      </Router>
    );

    // const buttonElement = screen.getByRole("button", {
    //   name: /generate/i
    // });
    // expect(buttonElement).toBeInTheDocument();
  });

  it("should show model if there answers without finish", () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    );

    // const buttonElement = screen.getByRole("button", {
    //   name: /generate/i
    // });

    // fireEvent.click(buttonElement);

    // expect(history.location.pathname).toBe("/questions");
    // expect(buttonElement).toBeInTheDocument();
  });

  it("should reset if all answers giving", () => {});
  it("should go to result page on finish btn click", () => {});
  it("should go back too previous question", () => {});
  it("should go hide back btn on first question", () => {});
  it("should have finish btn on finish", () => {});
  it("should not move if not answer", () => {});
  it("should show message of success if finish", () => {});
  it("should be next question be disable if click", () => {});
  
});
