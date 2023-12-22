"use client";

import React from "react";
import { Collapse } from "antd";
import { Holiday } from "@/app/types";
import { CalendarOutlined, FieldTimeOutlined } from "@ant-design/icons"; // Importando ícones
import dayjs from "dayjs";
const { Panel } = Collapse;

interface HolidayListProps {
   holidays: Holiday[];
}

const HolidayList: React.FC<HolidayListProps> = ({ holidays }) => {
   const formatDate = (date: string) => dayjs(date).format("DD.MM.YYYY"); // Formato suíço

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
               <p>
                  <CalendarOutlined /> Start Date:{" "}
                  {formatDate(holiday.startDate)}
               </p>
               <p>
                  <FieldTimeOutlined /> End Date: {formatDate(holiday.endDate)}
               </p>
               <p>Type: {holiday.type}</p>
               <p>Nationwide: {holiday.nationwide ? "Yes" : "No"}</p>
            </Panel>
         ))}
      </Collapse>
   );
};

export default HolidayList;
