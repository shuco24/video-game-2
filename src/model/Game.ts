import type Genre from "./Genre.ts";
import type Platform from "./Platform.ts";
import type { ParentPlatform } from "./Platform.ts";

export default interface Game {
  id: number;
  emoji: string;
  image: string;
  name: string;
  released: Date;
  score: number;
  slug: string;
  parentPlatforms?: ParentPlatform[];
  platforms?: Platform[];
  genres?: Genre[];
}
