import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectCantons from "@/app/components/atoms/SelectCantons";

describe("SelectCantons Component", () => {
   const mockCantons = [
      { isoCode: "C1", name: [{ language: "EN", text: "Canton1" }] },
      { isoCode: "C2", name: [{ language: "EN", text: "Canton2" }] },
   ];

   test("renders without errors and has the correct placeholder", () => {
      render(<SelectCantons cantons={mockCantons} onChange={() => {}} />);

      const placeholderElement = screen.getByText("Select a Canton");
      expect(placeholderElement).toBeInTheDocument();
   });

   test("filters cantons based on user input", () => {
      render(<SelectCantons cantons={mockCantons} onChange={() => {}} />);

      const input = screen.getByRole("combobox");
      fireEvent.change(input, { target: { value: "C1" } });
      expect(input.value).toBe("C1");

      const options = screen.queryAllByRole("option");
      expect(options).toHaveLength(1);
      expect(options[0]).toHaveTextContent("Canton1");
   });

   test("calls onChange with the correct isoCode when an option is selected", () => {
      const handleChange = jest.fn();
      render(<SelectCantons cantons={mockCantons} onChange={handleChange} />);

      const input = screen.getByRole("combobox");
      fireEvent.change(input, { target: { value: "Canton1" } });
      fireEvent.keyDown(input, { key: "ArrowDown" });
      fireEvent.keyDown(input, { key: "Enter" });

      expect(handleChange).toHaveBeenCalledWith("C1");
   });
});
