import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" 
               "main"`,
        md: `"header header" 
             "nav main"`,
      }}
      gridTemplateRows="auto 1fr"
      gridTemplateColumns={{ base: "1fr", md: "auto 1fr" }}
      minHeight="100vh"
    >
      <GridItem area="header" backgroundColor="blue">
        header
      </GridItem>
      <GridItem
        area="nav"
        backgroundColor="green"
        display={{ base: "none", md: "block" }}
      >
        nav
      </GridItem>
      <GridItem area="main" backgroundColor="red">
        main
      </GridItem>
    </Grid>
  );
}

export default App;
