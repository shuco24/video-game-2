import type { GameQuery } from "@/store";
import { emptyStringToUndefined } from "@/utils/string-utils";

export const mapSortOrder = {
  relevance: undefined,
  "-added": "added",
  "-released": "-released",
  name: "name",
  "-score": "-metacritic",
} as const;

export default function mapGameQuery(gameQuery: GameQuery) {
  return {
    genres: gameQuery.genre?.id,
    platforms: gameQuery.parentPlatform?.id,
    search: emptyStringToUndefined(gameQuery.searchText),
    ordering: emptyStringToUndefined(mapSortOrder[gameQuery.sortOrder]),
  };
}
