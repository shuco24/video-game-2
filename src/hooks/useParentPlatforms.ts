import useData from "./useData";
import platformService from "@/services/platform-service";

export default () => useData(() => platformService.getParents());
