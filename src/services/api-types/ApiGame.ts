import type ApiGenre from "./ApiGenre";
import type { ApiParentPlatform } from "./ApiPlatform";
import type ApiPlatform from "./ApiPlatform";

export default interface ApiGame {
  id: number;
  background_image: string;
  emoji: string;
  name: string;
  metacritic: number;
  released: string;
  slug: string;
  parent_platforms: { platform: ApiParentPlatform }[];
  platforms: { platform: ApiPlatform }[];
  genres: ApiGenre[];
}

export interface ApiGameResponse {
  results: ApiGame[];
}
