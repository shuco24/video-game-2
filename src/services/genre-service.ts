import type { Genre } from "@/model";
import type ApiGenre from "./api-types/ApiGenre";
import HttpService from "./http-service";
import { mapGenre } from "./mappers";
import genres from "@/data/genres";

export default new HttpService<ApiGenre, Genre>("/genres", mapGenre, genres);
