// src/components/atoms/DateRangePicker.tsx

"use client";

import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

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
      />
   );
};

export default DateRangePickerComponent;
