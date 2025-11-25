export default interface ApiPlatform {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface ApiPlatformResponse {
  results: ApiPlatform[];
}
