import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//Extensão do Chakra UI para customizar o tema
const colors = {
  primary: "#FF577F",
  primaryFocus: "#FF427F",
  primaryNegative: "#59323F",
  success: "#3FE864",
  failure: "#E83F5B",
  gray: {
    4: "#121214",
    3: "#212529",
    2: "#343B41",
    1: "#868E96",
    0: "#F8F9FA",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
