import useGenres from "./hooks/useGenres";
import useParentPlatforms from "./hooks/useParentPlatforms";

function App() {
  // const { request: requestGenre, cancel: cancelGenre } = genreService.getAll();
  // requestGenre.then((res) => console.log(res));

  // const { request: requestPlatform, cancel: cancelPlatform } =
  //   platformService.getAll();
  // requestPlatform.then((res) => console.log(res));

  const { data } = useParentPlatforms();
  console.log(data);

  return <div>Hola</div>;
}

export default App;
