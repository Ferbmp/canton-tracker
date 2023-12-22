// SelectCantons.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SelectCantons from "@/app/components/atoms/SelectCantons";

describe("SelectCantons Component", () => {
  // Dados fictícios para os cantões
  const mockCantons = [
    { isoCode: "C1", name: [{ language: "EN", text: "Canton1" }] },
    { isoCode: "C2", name: [{ language: "EN", text: "Canton2" }] },
  ];

  // Teste para verificar se o componente renderiza corretamente
  test("renderiza sem erros e possui o placeholder correto", () => {
    render(<SelectCantons cantons={mockCantons} onChange={() => {}} />);

    const placeholderElement = screen.getByText("Select a Canton");
    console.log(placeholderElement);
    expect(placeholderElement).toBeInTheDocument();
  });

  // Teste para verificar a funcionalidade de AutoComplete
  test("filtra os cantões com base na entrada do usuário", () => {
    render(<SelectCantons cantons={mockCantons} onChange={() => {}} />);

    const input = screen.getByRole("combobox");
    fireEvent.change(input, { target: { value: "C1" } });
    expect(input.value).toBe("C1");

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(1);
    expect(options[0]).toHaveTextContent("Canton1");
  });

  // Teste para verificar se a seleção de uma opção chama o onChange com o código ISO correto
  test("chama onChange com o isoCode correto quando uma opção é selecionada", () => {
    const handleChange = jest.fn();
    render(<SelectCantons cantons={mockCantons} onChange={handleChange} />);

    const input = screen.getByRole("combobox");
    fireEvent.change(input, { target: { value: "Canton1" } });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "Enter" });

    expect(handleChange).toHaveBeenCalledWith("C1");
  });
});
