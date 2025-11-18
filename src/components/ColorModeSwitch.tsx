import { Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Switch.Root
      checked={colorMode === "dark"}
      onChange={toggleColorMode}
      size="md"
      colorPalette="green"
    >
      <Switch.HiddenInput />
      <Switch.Control />
      <Switch.Label>
        {colorMode === "dark" ? "Dark Mode" : "Light Mode"}
      </Switch.Label>
    </Switch.Root>
  );
}

export default ColorModeSwitch;
