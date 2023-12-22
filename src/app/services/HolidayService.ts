// src/services/HolidayService.ts

import axiosClient from "../api/axiosClient";

const fetchHolidays = async (
  subdivisionCode: string,
  validFrom: string,
  validTo: string
) => {
  try {
    const response = await axiosClient.get("/PublicHolidays", {
      params: {
        countryIsoCode: "CH",
        validFrom: validFrom,
        validTo: validTo,
        subdivisionCode: subdivisionCode,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
const HolidayService = {
  fetchHolidays,
};

export default HolidayService;
