import type { Platform } from "@/model";
import { type ApiPlatform } from "./api-types";
import mapPlatform from "./mappers/mapPlatform";
import HttpService from "./http-service";

export default new HttpService<ApiPlatform, Platform>("/genres", mapPlatform);
