import type { Game } from "@/model";
import type { ApiGame } from "../api-types";
import mapGenre from "./mapGenre";
import mapPlatform, { mapParentPlatform } from "./mapPlatform";

export default function mapGame(apiGame: ApiGame): Game {
  return {
    id: apiGame.id,
    emoji: apiGame.emoji,
    image: apiGame.background_image,
    name: apiGame.name,
    released: new Date(apiGame.released),
    score: apiGame.metacritic,
    slug: apiGame.slug,
    genres: apiGame.genres?.map(mapGenre),
    parentPlatforms: apiGame.parent_platforms?.map((gameParentPlatform) =>
      mapParentPlatform(gameParentPlatform.platform)
    ),
    platforms: apiGame.platforms?.map((gamePlatform) =>
      mapPlatform(gamePlatform.platform)
    ),
  };
}
