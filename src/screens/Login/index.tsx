import React from "react";
import { useAuth } from "../../hooks/auth";
import PokebolaLogin from "./../../assets/PokebolaLogin.svg";
import { Container, Label, LoginButton } from "./styles";

function Login() {
  const { autenticarComIAS } = useAuth();

  return (
    <Container>
      <PokebolaLogin />
      <LoginButton onPress={autenticarComIAS}>
        <Label>Autenticar com o IAS</Label>
      </LoginButton>
    </Container>
  );
}

export default Login;
