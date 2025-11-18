import { Grid, GridItem, HStack, Image, Switch, Text } from "@chakra-ui/react";
import { ColorModeSwitch, NavBar } from "./components";
import GenresList from "./components/GenreList";
import { useState } from "react";
import type GameQuery from "./store/GameQuery";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"header" 
               "main"`,
        md: `"header header" 
             "nav main"`,
      }}
      gridTemplateRows="auto 1fr"
      gridTemplateColumns={{ base: "1fr", md: "200px 1fr" }}
      minHeight="100vh"
      paddingX={4}
    >
      {/* HEADER */}
      <GridItem area="header">
        <NavBar />
      </GridItem>

      {/* SIDEBAR */}
      <GridItem area="nav" pt={4} display={{ base: "none", md: "block" }}>
        <GenresList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genre: genre })
          }
        />
      </GridItem>

      {/* MAIN CONTENT */}
      <GridItem area="main" backgroundColor="red">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
