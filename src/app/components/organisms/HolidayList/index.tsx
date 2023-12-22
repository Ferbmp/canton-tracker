// src/components/organisms/HolidayList.tsx
"use client";

import React from "react";
import { Collapse } from "antd";
import { Holiday } from "@/app/types";

const { Panel } = Collapse;

interface HolidayListProps {
   holidays: Holiday[];
}

const HolidayList: React.FC<HolidayListProps> = ({ holidays }) => {
   return (
      <Collapse accordion>
         {holidays.map((holiday) => (
            <Panel
               data-cy='holiday-list'
               header={
                  holiday.name.find((n) => n.language === "EN")?.text ||
                  "Unknown"
               }
               key={holiday.id}
            >
               <p>Start Date: {holiday.startDate}</p>
               <p>End Date: {holiday.endDate}</p>
               <p>Type: {holiday.type}</p>
               <p>Nationwide: {holiday.nationwide ? "Yes" : "No"}</p>
            </Panel>
         ))}
      </Collapse>
   );
};

export default HolidayList;
