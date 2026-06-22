import axios from "axios";

const baseURL = import.meta.env.VITE_BACKEND_URL;
console.log("baseUrl", baseURL);
const apiClient = axios.create({
  baseURL: baseURL,
});

export default apiClient;
