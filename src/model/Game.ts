import type Genre from "./Genre.ts";
import type Platform from "./Platform.ts";
import type { ParentPlatform } from "./Platform.ts";

export default interface Game {
  id: number;
  name: string;
  emoji: string;
  image: string;
  score: number;
  slug: string;
  parentPlatforms?: ParentPlatform[];
  platforms?: Platform[];
  genres?: Genre[];
}
