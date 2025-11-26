import platformService from "@/services/platform-service";

function usePlatforms() {
  return platformService.getAll(undefined, 24 * 60 * 60 * 1000);
}

export default usePlatforms;
