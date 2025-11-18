import type { Genre } from "@/model";
import type ApiGenre from "../api-types/ApiGenre";

export default function toGenre(apiGenre: ApiGenre): Genre {
  return {
    id: apiGenre.id,
    name: apiGenre.name,
    image: apiGenre.image_background,
    slug: apiGenre.slug,
  };
}
