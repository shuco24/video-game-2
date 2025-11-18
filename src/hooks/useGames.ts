import useData from "./useData";
import gameService from "@/services/game-service";

export default () => useData(() => gameService.getAll());
