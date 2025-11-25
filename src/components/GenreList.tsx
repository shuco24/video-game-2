import useGenres from "@/hooks/useGenres";
import type { Genre } from "@/model";
import getCroppedImageUrl from "@/utils/image-utils";
import { Box, Heading, HStack, Image, Link } from "@chakra-ui/react";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

function GenresList({ selectedGenre, onSelectGenre }: Props) {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;

  return (
    <>
      <Heading as="h2" mb={2}>
        Genres
      </Heading>
      <Box as="ul">
        {genres?.map((genre) => (
          <Box as="li" key={genre.id}>
            <HStack mb={3}>
              <Image
                src={getCroppedImageUrl(genre.image)}
                boxSize="50px"
                borderRadius={5}
              ></Image>
              <Link
                fontSize="md"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                whiteSpace="normal"
              >
                {genre.name}
              </Link>
            </HStack>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default GenresList;
