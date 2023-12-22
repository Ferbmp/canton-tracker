import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import DateRangePickerComponent from "@/app/components/atoms/DateRangePicker";
import dayjs from "dayjs";

describe("DateRangePickerComponent", () => {
  // ...
  it("should render the DateRangePickerComponent with necessary elements", () => {
    render(<DateRangePickerComponent onChange={() => {}} />);
    const rangePickerInputs = screen.getAllByRole("textbox");
    expect(rangePickerInputs.length).toBe(2); // Deve ter dois inputs de texto para as datas
  });

  it("should call onChange when the range changes", async () => {
    const mockOnChange = jest.fn();

    render(<DateRangePickerComponent onChange={mockOnChange} />);

    // Suponha que o componente renderiza dois inputs de texto para as datas de início e fim.
    const [startDateInput, endDateInput] = screen.getAllByRole("textbox");

    // Simula a digitação nas inputs de data. Estes valores são apenas para o propósito de teste.
    await userEvent.type(startDateInput, "2023-01-01");
    await userEvent.type(endDateInput, "2023-01-07");

    // Não é possível interagir diretamente com o calendário do Ant Design neste contexto,
    // mas se o componente estiver configurado corretamente, a digitação nos inputs deve
    // acionar a função onChange com os valores correspondentes.

    // Verifica se onChange foi chamado pelo menos uma vez.
    expect(mockOnChange).toHaveBeenCalled();
  });
});
