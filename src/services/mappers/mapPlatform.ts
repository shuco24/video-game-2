import type { Platform, ParentPlatform } from "@/model";
import type {
  ApiPlatform,
  ApiPlatformParent as ApiParentPlatform,
} from "../api-types";

export default function mapPlatform(apiPlatform: ApiPlatform): Platform {
  return {
    id: apiPlatform.id,
    name: apiPlatform.name,
    image: apiPlatform.image_background,
    slug: apiPlatform.slug,
  };
}

export function mapParentPlatform(
  apiParentPlatform: ApiParentPlatform
): ParentPlatform {
  return {
    id: apiParentPlatform.id,
    name: apiParentPlatform.name,
    slug: apiParentPlatform.slug,
  };
}
