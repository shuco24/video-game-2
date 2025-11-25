import { gameService } from "@/services";
import type { GameQuery } from "@/store";

function useGames(gameQuery: GameQuery) {
  return gameService.getAll(gameQuery, 50_000);
}

export default useGames;
