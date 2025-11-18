import type { Game } from "@/model";
import getCroppedImageUrl from "@/utils/image-utils";
import { Badge, Box, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { HiStar } from "react-icons/hi";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Box
      borderRadius={8}
      borderWidth="1px"
      cursor="pointer"
      overflow="hidden"
      transition="transform 0.2s ease, box-shadow 0.2s ease"
      _hover={{
        transform: "scale(1.03)",
        boxShadow: "lg",
      }}
    >
      <Image
        overflow="hidden"
        src={getCroppedImageUrl(game.image)}
        alt={game.slug}
      />

      <Box p="4" spaceY="2">
        <HStack>
          <Badge colorPalette="teal" variant="solid">
            Superhost
          </Badge>
          <HStack gap="1" fontWeight="medium">
            <Icon color="orange.400">
              <HiStar />
            </Icon>
            <Text>{game.score}</Text>
          </HStack>
        </HStack>
        <Text fontWeight="medium" color="fg">
          {game.name}
        </Text>
        <HStack color="fg.muted">otro • 8 beds</HStack>
      </Box>
    </Box>
  );
}

export default GameCard;
