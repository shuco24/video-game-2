import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import APIClient from "./api-client";

interface PostQuery {
  page: number;
  pageSize: number;
}

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

  private getQueryKey(queryParameters: any) {
    return [
      ...this._endPoint.split("/").filter(Boolean),
      ...(queryParameters &&
      typeof queryParameters === "object" &&
      Object.keys(queryParameters).length > 0
        ? [queryParameters]
        : []),
    ];
  }

  getAll(queryParameters: any, staleTime?: number) {
    return useQuery<TApi[], Error, TDomain[]>({
      queryKey: this.getQueryKey(queryParameters),
      queryFn: () => this._apiClient.getAll({ params: queryParameters }),
      select: (apiData) => apiData.map(this._transform),
      staleTime,
      ...(this._initialData && { placeholderData: this._initialData }),
    });
  }

  getAllInfinite(queryParameters: any, staleTime?: number) {
    return useInfiniteQuery<TApi[], Error, TDomain[], any, number>({
      queryKey: this.getQueryKey(queryParameters),
      queryFn: ({ pageParam = 1 }) =>
        this._apiClient.getAll({
          params: {
            ...queryParameters,
            page: pageParam,
            page_size: 5,
          },
        }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : undefined;
      },
      select: (apiData) =>
        apiData.pages.flatMap((page) => page.map(this._transform)),
      staleTime,
    });
  }
}

export default HttpService;
