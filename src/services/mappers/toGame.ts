import type { Game } from "@/model";
import type { ApiGame } from "../api-types";
import toGenre from "./toGenre";
import toPlatform from "./toPlatform";

export default function toGame(apiGame: ApiGame): Game {
  return {
    id: apiGame.id,
    name: apiGame.name,
    emoji: apiGame.emoji,
    image: apiGame.background_image,
    score: apiGame.metacritic,
    slug: apiGame.slug,
    genres: apiGame.genres?.map(toGenre),
    parentPlatforms: apiGame.parent_platforms,
    platforms: apiGame.platforms?.map((gamePlatform) =>
      toPlatform(gamePlatform.platform)
    ),
  };
}
