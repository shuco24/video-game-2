import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ColorModeProvider } from "./components/ui/color-mode.tsx";

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
      <ColorModeProvider>
        <App />
        <ReactQueryDevtools />
      </ColorModeProvider>
    </ChakraProvider>
  </QueryClientProvider>
);
