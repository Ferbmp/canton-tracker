export interface Holiday {
   id: string;
   startDate: string;
   endDate: string;
   type: string;
   name: Array<{ language: string; text: string }>;
   nationwide: boolean;
   subdivisions: Array<{ code: string; shortName: string }>;
}
export interface Canton {
   isoCode: string;
   name: [{ language: string; text: string }];
}

export interface SearchState {
   selectedCanton: string | null;
   dateRange: [string | null, string | null];
}
export interface HolidaySearchContextState {
   cantons: Canton[];
   holidays: Holiday[];
   searchState: SearchState;
   selectedCanton: string | null;
   setSelectedCanton: (isoCode: string | null) => void;
   setDateRange: ([startDate, endDate]: [string | null, string | null]) => void;
   fetchHolidays: () => void;
   loading: boolean;
}
