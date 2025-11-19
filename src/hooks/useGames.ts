import type { GameQuery } from "@/store";
import useData from "./useData";
import { gameService } from "@/services";
import { mapGameQuery } from "@/services/mappers";

export default (gameQuery: GameQuery) =>
  useData(() => gameService.getAll(mapGameQuery(gameQuery)), [gameQuery]);
