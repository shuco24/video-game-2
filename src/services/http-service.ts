import apiClient, { CanceledError } from "./api-client";

class HttpService<TApi, TDomain> {
  protected readonly _endPoint: string;
  protected readonly _transform: (apiItem: TApi) => TDomain;

  constructor(endPoint: string, transform: (apiItem: TApi) => TDomain) {
    this._endPoint = endPoint;
    this._transform = transform;
  }

  getAll() {
    const controller = new AbortController();
    const request = apiClient
      .get<{ results: TApi[] }>(this._endPoint, { signal: controller.signal })
      .then((res) => res.data.results.map(this._transform))
      .catch((err) => {
        if (err instanceof CanceledError)
          return Promise.reject({ canceled: true });

        return Promise.reject(err);
      });

    return { request, cancel: () => controller.abort() };
  }
}

export default HttpService;
