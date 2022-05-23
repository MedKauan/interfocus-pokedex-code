import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import {
  About,
  ButtonHeader,
  Code,
  Container,
  Content,
  FeatureLabel,
  Header,
  Name,
  SvgContent,
  TitleContent,
  Types,
} from "./styles";
import TypeCard from "../../Components/TypeCard";
import AboutData from "../../Components/AboutData";
import BaseStats from "../../Components/BaseStats";
import { useFavorite } from "../../hooks/favorite";
import Loading from "../Loading";

interface ParametrosRota {
  pokemon: PokemonDTO;
}

function Details() {
  const [pokemon, setPokemon] = useState<PokemonDTO>();
  const [isFavorite, setIsFavorite] = useState(Boolean);
  const { existPokemonInFavorites, addFavorites, favoritesList } =
    useFavorite();

  const theme = useTheme();
  const route = useRoute();

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  function functionCombine(pokemon: PokemonDTO) {
    addFavorites(pokemon);
    setIsFavorite((oldState) => !oldState);
  }

  async function verifyIsFavorite(id: number) {
    const favorite = await existPokemonInFavorites(id);
    setIsFavorite(favorite);
  }

  useEffect(() => {
    const parametros = route.params as ParametrosRota;
    setPokemon(parametros.pokemon);
    verifyIsFavorite(parametros.pokemon.id);
  }, []);

  if (!pokemon) return <Loading />;

  return (
    <Container type={pokemon.types[0].name}>
      <Header>
        <TitleContent>
          <ButtonHeader onPress={() => goBack()}>
            <Feather name="arrow-left" size={18} color={theme.white} />
          </ButtonHeader>

          <Name>{pokemon.name}</Name>

          <Code>{pokemon.code}</Code>
        </TitleContent>

        <ButtonHeader onPress={() => functionCombine(pokemon)}>
          {isFavorite ? (
            <MaterialCommunityIcons
              name="heart"
              size={22}
              color={theme.white}
            />
          ) : (
            <Feather name="heart" size={22} color={theme.background} />
          )}
        </ButtonHeader>
      </Header>

      <Content>
        <SvgContent>{retornaSvg(pokemon.name, 200, 200)}</SvgContent>

        <Types>
          {pokemon.types.map((p) => (
            <TypeCard pokemonType={p} key={p.id} />
          ))}
        </Types>

        <FeatureLabel type={pokemon.types[0].name}>About</FeatureLabel>
        <AboutData
          weight={pokemon.about.weight}
          height={pokemon.about.height}
          moves={pokemon.moves}
        />

        <About>{pokemon.about.description}</About>

        <FeatureLabel type={pokemon.types[0].name}>Base Stats</FeatureLabel>
        <BaseStats
          stats={pokemon.base_stats}
          pokemonType={pokemon.types[0].name}
        />
      </Content>
    </Container>
  );
}

export default Details;
