import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardWrapper = ({ children }: Props) => {
  return (
    <Box className="game-card-wrapper" data-card-wrapper>
      {children}
    </Box>
  );
};

export default GameCardWrapper;
