import type { Platform, PlatformParent } from "@/model";
import type { ApiPlatform, ApiPlatformParent } from "../api-types";

export default function toPlatform(apiPlatform: ApiPlatform): Platform {
  return {
    id: apiPlatform.id,
    name: apiPlatform.name,
    image: apiPlatform.image_background,
    slug: apiPlatform.slug,
  };
}

export function toPLatformParent(
  apiPlatformParent: ApiPlatformParent
): PlatformParent {
  return {
    id: apiPlatformParent.id,
    name: apiPlatformParent.name,
  };
}
