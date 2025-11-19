import apiGenres from "@/data/genres";
import { mapGenre } from "@/services/mappers";

export default () => ({
  data: apiGenres.map((apiGenre) => mapGenre(apiGenre)),
  error: null,
  isLoading: false,
});
