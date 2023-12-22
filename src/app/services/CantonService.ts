// src/services/CantonService.ts

import axiosClient from "../api/axiosClient";

const fetchCantons = async () => {
  try {
    const response = await axiosClient.get("/Subdivisions?countryIsoCode=CH");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const CantonService = {
  fetchCantons,
};

export default CantonService;
