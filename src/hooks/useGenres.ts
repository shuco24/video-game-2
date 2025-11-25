import { genreService } from "@/services";

function useGenres() {
  return genreService.getAll(undefined, 24 * 60 * 60 * 1000);
}

export default useGenres;
