import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonComponent from "@/app/components/atoms/Button";

describe("ButtonComponent", () => {
  it("should render the button with the correct label", () => {
    render(<ButtonComponent onClick={() => {}} label="Search Holidays" />);
    const buttonElement = screen.getByRole("button", {
      name: "Search Holidays",
    });
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call onClick when the button is clicked", () => {
    const handleClick = jest.fn();
    render(<ButtonComponent onClick={handleClick} label="Click Me" />);
    const buttonElement = screen.getByRole("button", { name: "Click Me" });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
