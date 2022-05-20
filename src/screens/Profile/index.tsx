import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/auth";
import {
  BackgroundImage,
  ButtonHeader,
  Container,
  Content,
  Exit,
  ExitButton,
  Header,
  Title,
} from "./styles";

function Profile() {
  const { usuario, logOff } = useAuth();

  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <ButtonHeader onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={18} color={theme.primary} />
        </ButtonHeader>
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
        <Title>{usuario?.usuarioNome}</Title>

        <ExitButton onPress={logOff}>
          <Exit>Sair</Exit>
        </ExitButton>
      </Content>
    </Container>
  );
}

export default Profile;
