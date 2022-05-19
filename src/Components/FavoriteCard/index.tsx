import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Alert } from "react-native";
import { useTheme } from "styled-components";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";
import TypeCard from "../TypeCard";
import {
  Button,
  Container,
  Description,
  LabelBold,
  Option,
  SvgContent,
  TextContent,
  Types,
} from "./styles";

interface FavoriteCardProps {
  pokemon: PokemonDTO;
  removeFunction: (id: number) => void;
}

function FavoriteCard({ pokemon, removeFunction }: FavoriteCardProps) {
  const theme = useTheme();

  function removerPokemonFavoritos(pokemon: PokemonDTO) {
    Alert.alert(
      "Confirme",
      `Deseja realmente remover o ${pokemon.name} do seus favoritos?`,
      [
        {
          text: "Não 😊",
          style: "cancel",
          onPress: () => {},
        },
        {
          text: "Sim 😢",
          onPress: () => removeFunction(pokemon.id),
        },
      ]
    );
  }

  return (
    <Container>
      <SvgContent>{retornaSvg(pokemon.name, 95, 97)}</SvgContent>

      <TextContent>
        <Description>
          <LabelBold type={pokemon.types[0].name}> {pokemon.name} </LabelBold>

          <LabelBold type={pokemon.types[0].name} style={{ marginLeft: 30 }}>
            {pokemon.code}
          </LabelBold>
        </Description>

        <Types>
          {pokemon.types.map((t) => (
            <TypeCard pokemonType={t} key={t.id} />
          ))}
        </Types>
      </TextContent>

      <Option>
        <Button onPress={() => removerPokemonFavoritos(pokemon)}>
          <MaterialCommunityIcons
            name="heart-broken"
            size={20}
            color={theme.primary}
          />
        </Button>
      </Option>
    </Container>
  );
}

export default FavoriteCard;
