import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

describe("Main Footer", () => {
  it("should Not Contain Home nav btn", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const linkElement = screen.queryByTestId("homeBtn");
    expect(linkElement).not.toBeInTheDocument();
  });
});
