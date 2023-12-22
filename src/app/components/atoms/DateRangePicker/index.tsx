"use client";

import React from "react";
import { DatePicker } from "antd";
import "./DateRangePicker.css";
const { RangePicker } = DatePicker;

interface DateRangePickerComponentProps {
   onChange: (range: [string | null, string | null]) => void;
}

const DateRangePickerComponent: React.FC<DateRangePickerComponentProps> = ({
   onChange,
}) => {
   const handleRangeChange = (dates: any, dateStrings: [string, string]) => {
      const formattedRange: [string | null, string | null] = [
         dateStrings[0] || null,
         dateStrings[1] || null,
      ];
      onChange(formattedRange);
   };

   return (
      <RangePicker
         onChange={handleRangeChange}
         inputReadOnly
         data-testid='date-range-picker'
         data-cy='date-range-picker'
         className='custom-range-picker'
      />
   );
};

export default DateRangePickerComponent;
