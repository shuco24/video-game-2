import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";

const config = defineConfig({
  theme: {
    tokens: {},
    semanticTokens: {},
  },
});

const system = createSystem(config, defaultConfig);

createRoot(document.getElementById("root")!).render(
  <ChakraProvider value={system}>
    <ColorModeProvider defaultTheme="dark">
      <App />
    </ColorModeProvider>
  </ChakraProvider>
);
