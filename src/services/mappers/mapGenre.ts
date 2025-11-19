import type { Genre } from "@/model";
import type ApiGenre from "../api-types/ApiGenre";

export default function mapGenre(apiGenre: ApiGenre): Genre {
  return {
    id: apiGenre.id,
    name: apiGenre.name,
    image: apiGenre.image_background,
    slug: apiGenre.slug,
  };
}
