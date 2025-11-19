import type { Game } from "@/model";
import type { ApiGame } from "./api-types";
import HttpService from "./http-service";
import { mapGame } from "./mappers";

export default new HttpService<ApiGame, Game>("/games", mapGame);
