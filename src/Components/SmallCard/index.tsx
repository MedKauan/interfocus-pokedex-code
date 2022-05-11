import React from "react";
import Charmander from "../../assets/pokemons/Charmander.svg";

import {
  Code,
  Container,
  Name,
  NameContent,
  PokemonCode,
  SvgContent,
} from "./styles";

function SmallCard() {
  return (
    <Container>
      <PokemonCode>
        <Code>#001</Code>
      </PokemonCode>

      <SvgContent>
        <Charmander width={72} height={72} />
      </SvgContent>
      <NameContent>
        <Name>Charmander</Name>
      </NameContent>
    </Container>
  );
}
export default SmallCard;
