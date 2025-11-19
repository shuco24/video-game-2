import type { Genre, ParentPlatform } from "@/model";

export const sortOrders = {
  relevance: "Relevance",
  "-added": "Date added",
  "-released": "Release date",
  name: "Name",
  "-score": "Score",
} as const;

export type sortOrderKeys = keyof typeof sortOrders;

export default interface GameQuery {
  genre: Genre | null;
  parentPlatform: ParentPlatform | null;
  sortOrder: sortOrderKeys;
  searchText: string;
}
