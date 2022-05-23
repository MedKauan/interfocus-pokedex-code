import {
  Poppins_400Regular,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./src/hooks/auth";
import { FavoriteProvider } from "./src/hooks/favorite";
import Routes from "./src/routes";
import Loading from "./src/screens/Loading";
import theme from "./src/styles/theme";

export default function App() {
  const [test, setTest] = useState(false);

  function alterState() {
    setTimeout(() => {
      setTest(true);
    }, 7000);
  }

  useEffect(() => {
    alterState();
  }, []);
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_400Regular,
  });
  0;

  if (!fontsLoaded || !test) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <FavoriteProvider>
          <Routes />
        </FavoriteProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
