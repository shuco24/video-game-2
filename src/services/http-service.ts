import { useQuery } from "@tanstack/react-query";
import APIClient from "./api-client";

class HttpService<TApi, TDomain> {
  protected readonly _endPoint;
  protected readonly _transform;
  protected readonly _initialData;
  protected readonly _apiClient;

  constructor(
    endPoint: string,
    transform: (apiItem: TApi) => TDomain,
    initialData?: TApi[]
  ) {
    this._endPoint = endPoint;
    this._transform = transform;
    this._initialData = initialData;
    this._apiClient = new APIClient<TApi>(this._endPoint);
  }

  getAll(queryParameters: any, staleTime?: number) {
    return useQuery<TApi[], Error, TDomain[]>({
      queryKey: [
        ...this._endPoint.split("/").filter(Boolean),
        ...(queryParameters &&
        typeof queryParameters === "object" &&
        Object.keys(queryParameters).length > 0
          ? [queryParameters]
          : []),
      ],
      queryFn: () => this._apiClient.getAll({ params: queryParameters }),
      select: (apiData) => apiData.map(this._transform),
      staleTime,
      ...(this._initialData && { placeholderData: this._initialData }),
    });
  }
}

export default HttpService;
