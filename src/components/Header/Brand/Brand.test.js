import React from "react";
import { render, screen } from "@testing-library/react";
import Brand from "./Brand";

describe("Brand component", () => {
  it("Renders the correct heading as the brand name", () => {
    render(<Brand />);
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toMatch("Virtual Shop");
  });
});
