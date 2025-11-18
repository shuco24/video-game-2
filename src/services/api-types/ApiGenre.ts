export default interface ApiGenre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

export interface ApiGenreResponse {
  results: ApiGenre[];
}
