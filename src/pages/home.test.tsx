import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from ".";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Home Page", () => {
  it("page should has generate business plan button", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    );
    const buttonElement = screen.getByRole("button", {
      name: /generate/i
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it("page should navigate to questions page", () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    );
    const buttonElement = screen.getByRole("button", {
      name: /generate/i
    });
    fireEvent.click(buttonElement);

    expect(history.location.pathname).toBe("/questions");
    expect(buttonElement).toBeInTheDocument();
  });
});
