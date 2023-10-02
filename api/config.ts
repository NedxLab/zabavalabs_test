import axios, { AxiosInstance } from "axios";

const apiKey = process.env.NEXT_PUBLIC_OPENSEA_API_KEY;
const openSeaCLient: AxiosInstance = axios.create({
  baseURL: "https://api.opensea.io/",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": apiKey,
  },
});

export default openSeaCLient;
