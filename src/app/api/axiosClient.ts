// src/api/axiosClient.ts

import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://openholidaysapi.org",
});

export default axiosClient;
