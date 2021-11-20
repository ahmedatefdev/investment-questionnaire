import React from "react";
import { render, screen } from "@testing-library/react";
import Page from ".";
import { BrowserRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
describe("Main Page wrapper", () => {

  test("page should has welcome word in paragraph", () => {
    render(
      <BrowserRouter>
        <Page>
          <p>Welcome</p>
        </Page>
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/welcome/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should Contain Home nav btn", async () => {
    const history = createMemoryHistory();

    render(
      <Router location={"/questions"} navigator={history}>
        <Page />
      </Router>
    );
    const linkElement = screen.queryByTestId("homeBtn");
    expect(linkElement).toBeInTheDocument();
  });

  it("should Not Contain Home nav btn", async () => {
    const history = createMemoryHistory();

    render(
      <Router location={history.location} navigator={history}>
        <Page />
      </Router>
    );
    const linkElement = screen.queryByTestId("homeBtn");
    expect(linkElement).not.toBeInTheDocument();
  });
});
