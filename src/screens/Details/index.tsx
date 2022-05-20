import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
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
import { useAuth } from "../../hooks/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FavoritoDTO } from "../../dtos/FavoritoDTO";
import { UsuarioDTO } from "../../dtos/UsuarioDTO";

interface ParametrosRota {
  pokemon: PokemonDTO;
}

const FAVORITOS_KEY = "@pokedex:favoritos";

function Details() {
  const [pokemon, setPokemon] = useState<PokemonDTO>();
  const [isFavorite, setIsFavorite] = useState(Boolean);
  const { usuario } = useAuth();

  const theme = useTheme();
  const route = useRoute();

  const navigation = useNavigation();

  function goBack() {
    navigation.goBack();
  }

  async function verifyIsFavorite(id: number) {
    const favorites = await AsyncStorage.getItem(FAVORITOS_KEY);

    const favoritesParse = favorites
      ? (JSON.parse(favorites) as FavoritoDTO[])
      : [];

    if (favoritesParse.some((f) => f.pokemon.id === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }

  async function addFavorites(pokemon: PokemonDTO) {
    //const pokemonString = JSON.stringify(pokemon)
    const favoritesStorage = await AsyncStorage.getItem(FAVORITOS_KEY);
    const favoritesParse = favoritesStorage
      ? (JSON.parse(favoritesStorage) as FavoritoDTO[])
      : [];

    if (isFavorite) {
      const filtered = favoritesParse.filter(
        (f) => f.pokemon.id !== pokemon.id
      );
      await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(filtered));
    } else {
      favoritesParse.push({
        id: Math.random(),
        pokemon,
        usuario: usuario!,
      });

      await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritesParse));
    }
    setIsFavorite((oldState) => !oldState);
  }

  useEffect(() => {
    const parametros = route.params as ParametrosRota;
    setPokemon(parametros.pokemon);
    verifyIsFavorite(parametros.pokemon.id);
  }, []);

  if (!pokemon) return <View />;

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

        <ButtonHeader onPress={() => addFavorites(pokemon)}>
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
