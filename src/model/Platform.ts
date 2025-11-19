export default interface Platform {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface ParentPlatform {
  id: number;
  name: string;
  slug: string;
}
