import type { Genre } from "@/model";
import type ApiGenre from "./api-types/ApiGenre";
import HttpService from "./http-service";
import { mapGenre } from "./mappers";

export default new HttpService<ApiGenre, Genre>("/genres", mapGenre);
