import GlobalStyle from "./styles/global";
import Routes from "./routes/routes";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box height="100vh" width="100vw">
      <GlobalStyle />
      <Routes />
    </Box>
  );
}

export default App;
