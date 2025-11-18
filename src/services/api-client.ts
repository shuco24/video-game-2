import axios, { CanceledError } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: { key: "31f716112a544adeb07cfa8f5d15c386" },
});

export default apiClient;
export { CanceledError };
