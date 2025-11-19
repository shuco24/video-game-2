import type { Game } from "@/model";
import getCroppedImageUrl from "@/utils/image-utils";
import { Card, HStack, VStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import formatDate from "@/utils/date-utils";
import "@/styles/game-details.css";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root
      className="game-card"
      alignSelf="flex-start"
      bg={{ _light: "white", _dark: "gray.800" }}
      borderRadius={8}
      borderWidth="1px"
      cursor="pointer"
      data-card
      overflow="hidden"
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        transform: "scale(1.06)",
        boxShadow: "lg",
      }}
    >
      <Image
        src={getCroppedImageUrl(game.image)}
        alt={game.slug}
        contain="cover"
      />

      <Card.Body pb={4}>
        <HStack justify="space-between">
          <PlatformIconList parentPlatforms={game.parentPlatforms} />
          <CriticScore score={game.score} />
        </HStack>

        <Text
          fontSize="3xl"
          fontWeight="medium"
          color="fg"
          lineHeight={1.2}
          mt={3}
          mb={2}
        >
          {game.name}
        </Text>

        <VStack className="game-card-details" gap={0}>
          <HStack justify="space-between">
            <Text>Release Date:</Text>
            <Text>{formatDate(game.released)}</Text>
          </HStack>

          <HStack justify="space-between">
            <Text>Genres:</Text>
            <Text>{game.genres?.map((g) => g.name).join(", ")}</Text>
          </HStack>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
