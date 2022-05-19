import { useNavigation } from "@react-navigation/native";
import React from "react";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import retornaSvg from "../../utils/retornaSvg";

import {
  Code,
  Container,
  Name,
  NameContent,
  PokemonCode,
  SvgContent,
} from "./styles";

interface SmallCardProps {
  pokemon: PokemonDTO;
}

function SmallCard({ pokemon, ...rest }: SmallCardProps) {
  const navigation = useNavigation();

  function navigateToDetails(pokemon: PokemonDTO) {
    navigation.navigate(
      "Detalhes" as never,
      {
        pokemon,
      } as never
    );
  }

  return (
    <Container
      type={pokemon.types[0].name}
      {...rest}
      onPress={() => navigateToDetails(pokemon)}
    >
      <PokemonCode>
        <Code type={pokemon.types[0].name}>{pokemon.code}</Code>
      </PokemonCode>

      <SvgContent>{retornaSvg(pokemon.name, 72, 72)}</SvgContent>

      <NameContent type={pokemon.types[0].name}>
        <Name>{pokemon.name}</Name>
      </NameContent>
    </Container>
  );
}

export default SmallCard;
