import { gameService } from "@/services";
import type { GameQuery } from "@/store";

// export default (gameQuery: GameQuery) =>
//   useData(() => gameService.getAll(mapGameQuery(gameQuery)), [gameQuery]);
function useGames(gameQuery: GameQuery) {
  return gameService.getAll(gameQuery, 50_000);
}

export default useGames;
