import useGames from "@/hooks/useGames";
import type { GameQuery } from "@/store";
import { Grid } from "@chakra-ui/react";
import GameCard from "./GameCard";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data: games, error } = useGames();

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap={5}
    >
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Grid>
  );
}

export default GameGrid;
