import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./footer";

describe("Main Footer", () => {
  it("should has by word ", () => {
    render(<Footer />);
    const linkElement = screen.getByText(/by/i);
    expect(linkElement).toBeInTheDocument();
  });
});
