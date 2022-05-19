import React from "react";
import { PokemonType } from "../../dtos/PokemonDTO";
import { Container, Type } from "./styles";

interface TypeCardProps {
  pokemonType: PokemonType;
}

function TypeCard({ pokemonType, ...rest }: TypeCardProps) {
  return (
    <Container type={pokemonType.name} {...rest}>
      <Type>{pokemonType.name}</Type>
    </Container>
  );
}

export default TypeCard;
