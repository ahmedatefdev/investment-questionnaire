import React from "react";
import { render, screen } from "@testing-library/react";
import Page from ".";
import { BrowserRouter } from "react-router-dom";

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
  it("should Contain Header", async () => {
    render(
      <BrowserRouter>
        <Page />
      </BrowserRouter>
    );
    const linkElement = await screen.findByTestId("homeBtn");
    expect(linkElement).toBeInTheDocument();
  });
});
