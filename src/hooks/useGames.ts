import { gameService } from "@/services";
import { mapGameQuery } from "@/services/mappers";
import type { GameQuery } from "@/store";

function useGames(gameQuery: GameQuery) {
  return gameService.getAll(mapGameQuery(gameQuery), 50_000);
}

export default useGames;
