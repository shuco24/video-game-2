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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const config = defineConfig({
  theme: {
    tokens: {},
    semanticTokens: {},
  },
});

const system = createSystem(config, defaultConfig);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider value={system}>
      <ColorModeProvider defaultTheme="dark">
        <App />
        <ReactQueryDevtools />
      </ColorModeProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
