import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: { key: "31f716112a544adeb07cfa8f5d15c386" },
});

class APIClient<TApi> {
  private readonly _endPoint: string;

  constructor(endPoint: string) {
    this._endPoint = endPoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<TApi>>(this._endPoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
