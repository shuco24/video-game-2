import useGames from "@/hooks/useGames";
import type { GameQuery } from "@/store";
import { Grid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import { useEffect } from "react";
import GameCardWrapper from "./GameCardWrapper";
import GameCardSkeleton from "./gameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const updateHeights = () => {
      const wrappers = document.querySelectorAll("[data-card-wrapper]");

      wrappers.forEach((wrapper) => {
        const card = wrapper.querySelector("[data-card]") as HTMLElement | null;
        if (!card) return;

        if (card.matches(":hover")) return;

        wrapper.setAttribute(
          "style",
          `height: ${card.offsetHeight}px !important`
        );
      });
    };

    [50, 100, 200, 400, 1000, 2000].map((time) =>
      setTimeout(updateHeights, time)
    );
    window.addEventListener("resize", updateHeights);

    return () => window.removeEventListener("resize", updateHeights);
  }, [games]);

  if (error) return <Text>{error}</Text>;

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap={6}
      rowGap={10}
      w="100%"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardWrapper key={skeleton}>
            <GameCardSkeleton />
          </GameCardWrapper>
        ))}
      {games.map((game) => (
        <GameCardWrapper key={game.id}>
          <GameCard key={game.id} game={game} />
        </GameCardWrapper>
      ))}
    </Grid>
  );
}

export default GameGrid;
