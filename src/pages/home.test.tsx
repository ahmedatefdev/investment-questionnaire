import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from ".";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { AppContextProvider } from "../contexts";
import Store from "../types/Store";

describe("Home Page", () => {
  it("page should has generate business plan button", () => {
    const history = createMemoryHistory();
    renderHomePage(history, { initQuestionary: jest.fn() });
    const buttonElement = screen.getByRole("button", {
      name: /generate/i
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it("page should navigate to questions page", () => {
    const history = createMemoryHistory();
    renderHomePage(history, { initQuestionary: jest.fn() });
    const buttonElement = screen.getByRole("button", {
      name: /generate/i
    });
    fireEvent.click(buttonElement);

    expect(history.location.pathname).toBe("/questions");
    expect(buttonElement).toBeInTheDocument();
  });
});
function renderHomePage(history: any, store?: Partial<Store>) {
  render(
    <AppContextProvider store={store}>
      <Router location={history.location} navigator={history}>
        <Home />
      </Router>
    </AppContextProvider>
  );
}
