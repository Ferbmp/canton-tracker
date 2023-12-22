"use client";

import React, {
   createContext,
   useContext,
   useState,
   useEffect,
   useCallback,
   ReactNode,
} from "react";
import {
   Canton,
   Holiday,
   HolidaySearchContextState,
   SearchState,
} from "../types";
import { message } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);
import CantonService from "../services/CantonService";
import HolidayService from "../services/HolidayService";

const HolidaySearchContext = createContext<
   HolidaySearchContextState | undefined
>(undefined);

export const HolidaySearchProvider: React.FC<{ children: ReactNode }> = ({
   children,
}) => {
   const [cantons, setCantons] = useState<Canton[]>([]);
   const [holidays, setHolidays] = useState<Holiday[]>([]);
   const [searchState, setSearchState] = useState<SearchState>({
      selectedCanton: null,
      dateRange: [null, null],
   });
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      const fetchCantons = async () => {
         setLoading(true);
         try {
            const data = await CantonService.fetchCantons();
            setCantons(data);
         } catch (err) {
            const error = err as Error;
            message.error("Erro ao buscar feriados: " + error.message);
         } finally {
            setLoading(false);
         }
      };

      fetchCantons();
   }, []);

   const fetchHolidays = useCallback(async () => {
      if (
         !searchState.selectedCanton ||
         !searchState.dateRange[0] ||
         !searchState.dateRange[1]
      ) {
         message.error("Please select a canton and a valid date range.");

         return;
      }

      setLoading(true);
      setHolidays([]);

      const startDate = searchState.dateRange[0];
      const endDate = searchState.dateRange[1];

      const formattedStartDate = startDate
         ? dayjs(startDate, "DD-MM-YYYY").format("YYYY-MM-DD")
         : null;
      const formattedEndDate = endDate
         ? dayjs(endDate, "DD-MM-YYYY").format("YYYY-MM-DD")
         : null;

      try {
         const data = await HolidayService.fetchHolidays(
            searchState.selectedCanton,
            formattedStartDate,
            formattedEndDate
         );
         setHolidays(data);
      } catch (err) {
         const error = err as Error;
         console.error("Error fetching holidays:", error);
         message.error("Error fetching holidays: " + error.message);
      } finally {
         setLoading(false);
      }
   }, [searchState.selectedCanton, searchState.dateRange]);

   const setSelectedCanton = (isoCode: string | null) => {
      setSearchState((prev) => ({ ...prev, selectedCanton: isoCode }));
   };

   const setDateRange = ([startDate, endDate]: [
      string | null,
      string | null
   ]) => {
      setSearchState((prev) => ({ ...prev, dateRange: [startDate, endDate] }));
   };

   return (
      <HolidaySearchContext.Provider
         value={{
            cantons,
            holidays,
            searchState,
            loading,
            selectedCanton: searchState.selectedCanton,
            setSelectedCanton,
            setDateRange,
            fetchHolidays,
         }}
      >
         {children}
      </HolidaySearchContext.Provider>
   );
};

export const useHolidaySearch = () => {
   const context = useContext(HolidaySearchContext);
   if (!context) {
      throw new Error(
         "useHolidaySearch must be used within a HolidaySearchProvider"
      );
   }
   return context;
};
