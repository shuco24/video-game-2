import { Grid, GridItem, Heading, HStack, VStack } from "@chakra-ui/react";
import { GameGrid, NavBar, PlatformSelector, SortSelector } from "./components";
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
      gridTemplateColumns={{ base: "1fr", md: "180px 1fr" }}
      minHeight="100vh"
      paddingX={4}
    >
      {/* HEADER */}
      <GridItem area="header" mb={4}>
        <NavBar />
      </GridItem>

      {/* SIDEBAR */}
      <GridItem area="nav" mt={2} display={{ base: "none", md: "block" }}>
        <GenresList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) =>
            setGameQuery({ ...gameQuery, genre: genre })
          }
        />
      </GridItem>

      {/* MAIN CONTENT */}
      <GridItem area="main">
        <VStack align="start">
          <Heading fontSize="4xl" textAlign="left" as="h2">{`${
            gameQuery.genre?.name || ""
          } ${gameQuery.parentPlatform?.name || ""} Games`}</Heading>
          <HStack paddingY={3}>
            <PlatformSelector
              selectedPlatform={gameQuery.parentPlatform}
              onSelect={(parentPlatform) =>
                setGameQuery({ ...gameQuery, parentPlatform: parentPlatform })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelect={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder: sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </VStack>
      </GridItem>
    </Grid>
  );
}

export default App;
