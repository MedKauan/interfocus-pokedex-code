import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { useTheme } from "styled-components";
import { PokemonDTO } from "../../dtos/Pokemon";
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
}

function FavoriteCard({ pokemon }: FavoriteCardProps) {
  const theme = useTheme();

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
        <Button>
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
