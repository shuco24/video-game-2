import { useQuery } from "@tanstack/react-query";
import apiClient from "./api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

class HttpService<TApi, TDomain> {
  protected readonly _endPoint;
  protected readonly _transform;
  protected readonly _initialData;

  constructor(
    endPoint: string,
    transform: (apiItem: TApi) => TDomain,
    initialData?: TApi[]
  ) {
    this._endPoint = endPoint;
    this._transform = transform;
    this._initialData = initialData;
  }

  getAll(queryParameters?: any, staleTime?: number) {
    const controller = new AbortController();

    return useQuery<TApi[], Error, TDomain[]>({
      queryKey: [
        ...this._endPoint.split("/").filter(Boolean),
        ...(queryParameters &&
        typeof queryParameters === "object" &&
        Object.keys(queryParameters).length > 0
          ? [queryParameters]
          : []),
      ],
      queryFn: () =>
        apiClient
          .get<FetchResponse<TApi>>(this._endPoint, {
            ...(queryParameters && { params: queryParameters }),
          })
          .then((res) => res.data.results),
      select: (apiData) => apiData.map(this._transform),
      staleTime,
      ...(this._initialData && { placeholderData: this._initialData }),
    });
  }
}

export default HttpService;
