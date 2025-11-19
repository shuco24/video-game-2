import apiParentPlatforms from "@/data/parentPlatforms";
import { mapParentPlatform } from "@/services/mappers/mapPlatform";

//export default () => useData(() => platformService.getParents());

export default () => ({
  data: apiParentPlatforms.map((apiGenre) => mapParentPlatform(apiGenre)),
  error: null,
  isLoading: false,
});
