import parentplatformService from "@/services/parentplatform-service";

// export default () => ({
//   data: apiParentPlatforms.map((apiGenre) => mapParentPlatform(apiGenre)),
//   error: null,
//   isLoading: false,
// });

function useParentPlatforms() {
  return parentplatformService.getAll(undefined, 50_000);
}

export default useParentPlatforms;
