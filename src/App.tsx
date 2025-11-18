import { genreService } from "./services";
import gameService from "./services/game-service";
import platformService from "./services/platform-service";

function App() {
  // const { request: requestGenre, cancel: cancelGenre } = genreService.getAll();
  // requestGenre.then((res) => console.log(res));

  // const { request: requestPlatform, cancel: cancelPlatform } =
  //   platformService.getAll();
  // requestPlatform.then((res) => console.log(res));

  const { request: request, cancel } = gameService.getAll();
  request.then((res) => console.log(res));

  return <div>Hola</div>;
}

export default App;
