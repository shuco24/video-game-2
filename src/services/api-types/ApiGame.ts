import type ApiGenre from "./ApiGenre";
import type { ApiParentPlatform } from "./ApiPlatform";
import type ApiPlatform from "./ApiPlatform";

export default interface ApiGame {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  emoji: string;
  metacritic: number;
  parent_platforms: ApiParentPlatform[];
  platforms: { platform: ApiPlatform }[];
  genres: ApiGenre[];
}

export interface ApiGameResponse {
  results: ApiGame[];
}
