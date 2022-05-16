import { useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import { PokemonDTO } from "../../dtos/Pokemon";
import retornaSvg from "../../utils/retornaSvg";
import {
  ButtonHeader,
  Code,
  Container,
  Content,
  Header,
  Name,
  SvgContent,
  TitleContent,
} from "./styles";

interface ParametrosRota {
  pokemon: PokemonDTO;
}

function Details() {
  const [pokemon, setPokemon] = useState<PokemonDTO>();

  const route = useRoute();

  useEffect(() => {
    const parametros = route.params as ParametrosRota;
    console.log(parametros.pokemon);
    setPokemon(parametros.pokemon);
  }, []);

  if (!pokemon) return <View />;

  return (
    <Container type={pokemon.types[0].name}>
      <Header>
        <TitleContent>
          <ButtonHeader />

          <Name type={pokemon.types[0].name}>{pokemon.name}</Name>

          <Code type={pokemon.types[0].name}>{pokemon.code}</Code>
        </TitleContent>
        <ButtonHeader />
      </Header>

      <Content>
        <SvgContent>{retornaSvg(pokemon.name, 200, 200)}</SvgContent>
      </Content>
    </Container>
  );
}

export default Details;
