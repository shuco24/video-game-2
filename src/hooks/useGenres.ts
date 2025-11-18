import useData from "./useData";
import { genreService } from "@/services";

export default () => useData(() => genreService.getAll());
