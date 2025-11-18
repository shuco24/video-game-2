import { HStack, Image } from "@chakra-ui/react";
import logo from "@/assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {}

function NavBar() {
  return (
    <HStack justify="space-between">
      <Image src={logo} boxSize={{ base: "50px", md: "60px" }} />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
