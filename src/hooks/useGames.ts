import { gameService } from "@/services";
import { mapGameQuery } from "@/services/mappers";
import type { GameQuery } from "@/store";

function useGames(gameQuery: GameQuery) {
  return gameService.getAllInfinite(mapGameQuery(gameQuery), 50_000);
}

export default useGames;
