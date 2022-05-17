import React from "react";
import { Image } from "react-native";
import { useAuth } from "../../hooks/auth";
import {
  BackgroundImage,
  Container,
  Content,
  Exit,
  ExitButton,
  Header,
  Title,
} from "./styles";

function Profile() {
  const { usuario, logOff } = useAuth();

  return (
    <Container>
      <Header>
        <Title>Perfil</Title>
      </Header>

      <Content>
        <BackgroundImage>
          <Image
            source={{
              uri: "https://avatar.skype.com/v1/avatars/live:kauan_med?auth_key=-1186055440&size=m",
            }}
            style={{
              width: 130,
              height: 130,
              borderRadius: 65,
            }}
          />
        </BackgroundImage>
        <Title>{usuario}</Title>

        <ExitButton onPress={logOff}>
          <Exit>Sair</Exit>
        </ExitButton>
      </Content>
    </Container>
  );
}

export default Profile;
