import { mapParentPlatform } from "./mappers/mapPlatform";
import HttpService from "./http-service";
import type { ParentPlatform } from "@/model";
import type ApiParentPlatform from "./api-types/ApiParentPlatform";
import parentPlatforms from "@/data/parentPlatforms";

export default new HttpService<ApiParentPlatform, ParentPlatform>(
  "/platforms/lists/parents",
  mapParentPlatform,
  parentPlatforms
);
