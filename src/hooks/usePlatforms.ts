import platformService from "@/services/platform-service";

function usePlatforms() {
  return platformService.getAll();
}

export default usePlatforms;
