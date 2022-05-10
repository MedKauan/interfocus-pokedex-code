import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./src/styles/theme";
import { Container, Texto } from "./styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Texto>Olá Kauan!</Texto>
      </Container>
    </ThemeProvider>
  );
}
