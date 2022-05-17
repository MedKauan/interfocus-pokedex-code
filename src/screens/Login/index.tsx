import React from "react";
import PokebolaLogin from "./../../assets/PokebolaLogin.svg";
import { Container, Label, LoginButton } from "./styles";

function Login() {
  return (
    <Container
      colors={["#133ABC", "#5EBCFC"]}
      start={{ x: -1, y: 0.5 }}
      end={{ x: 1, y: -1 }}
    >
      <PokebolaLogin />
      <LoginButton>
        <Label>Autenticar com o IAS</Label>
      </LoginButton>
    </Container>
  );
}

export default Login;
