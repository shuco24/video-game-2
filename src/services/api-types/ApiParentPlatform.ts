export default interface ApiParentPlatform {
  id: number;
  name: string;
  slug: string;
}

export interface ApiParentPlatformResponse {
  results: ApiParentPlatform[];
}
