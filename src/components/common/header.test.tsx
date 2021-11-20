import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

describe("Main Footer", () => {
  it("should has by word ", async () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const linkElement = await screen.findByTestId("homeBtn");
    expect(linkElement).toBeInTheDocument();
  });
});
