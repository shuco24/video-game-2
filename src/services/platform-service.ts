import type { Platform } from "@/model";
import { type ApiPlatform } from "./api-types";
import toPlatform, { toPLatformParent } from "./mappers/mapPlatform";
import HttpService from "./http-service";
import apiClient from "./api-client";
import type { ApiParentPlatformResponse } from "./api-types/ApiPlatform";

class PlatformService extends HttpService<ApiPlatform, Platform> {
  constructor() {
    super("/platforms", toPlatform);
  }

  getParents() {
    const controller = new AbortController();
    const request = apiClient
      .get<ApiParentPlatformResponse>(`${this._endPoint}/lists/parents`, {
        signal: controller.signal,
      })
      .then((res) =>
        res.data.results.map((apiParentPlatform) =>
          toPLatformParent(apiParentPlatform)
        )
      );
    return { request, cancel: () => controller.abort() };
  }
}

export default new PlatformService();
