import { Box, Icon, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Box
      flex="1"
      mx={4}
      position="relative"
      role="group"
      css={{
        "&:hover .search-icon": {
          color: "var(--chakra-colors-gray-400)",
          opacity: 1,
        },
        "&:focus-within .search-icon": {
          color: "var(--chakra-colors-gray-400)",
          opacity: 1,
        },
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();

          console.log("hola");
          console.log(ref.current);
          if (ref.current) onSearch(ref.current.value);
        }}
      >
        <Input
          borderRadius={20}
          bg={{
            _light: "gray.100",
            _dark: "gray.900",
          }}
          borderColor={{ _light: "gray.300", _dark: "gray.600" }}
          borderWidth={1}
          pl="32px"
          placeholder="Search games..."
          ref={ref}
          w="100%"
          transition="background-color 0.25s ease, border-color 0.25s ease"
          _focus={{
            bg: { _light: "black", _dark: "white" },
            color: { _light: "white", _dark: "black" },
            borderColor: { _light: "gray.900", _dark: "gray.200" },
          }}
          _hover={{
            bg: { _light: "gray.800", _dark: "white" },
            borderColor: { _light: "gray.600", _dark: "gray.200" },
          }}
          _placeholder={{
            color: { _light: "gray.200", _dark: "gray.500" },
          }}
        />
      </form>

      <Icon
        as={BsSearch}
        className="search-icon"
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        opacity={0.6}
        pointerEvents="none"
        transition="color 0.25s ease, opacity 0.25s ease"
        color={{ _light: "gray.600", _dark: "gray.200" }}
      />
    </Box>
  );
}

export default SearchInput;
