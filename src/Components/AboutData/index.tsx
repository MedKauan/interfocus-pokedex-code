import React from "react";
import { PokemonMove } from "../../dtos/PokemonDTO";
import Weight from "./../../assets/icons/weight.svg";
import Height from "./../../assets/icons/weight.svg";
import { Actions, Container, Data, Measures, Name, Value } from "./styles";

interface AboutDataProps {
  weight: string;
  height: string;
  moves: PokemonMove[];
}

function About({ weight, height, moves }: AboutDataProps) {
  return (
    <Container>
      <Data>
        <Measures>
          <Weight width={16} height={16} style={{ marginRight: 8 }} />
          <Value>{weight}</Value>
        </Measures>

        <Name>Weight</Name>
      </Data>

      <Data>
        <Measures>
          <Height width={16} height={16} style={{ marginRight: 8 }}></Height>
          <Value>{height}</Value>
        </Measures>

        <Name>Height</Name>
      </Data>

      <Data naoExibirBorda>
        <Measures>
          <Actions>
            {moves.map((m) => (
              <Value key={m.id}> {m.name} </Value>
            ))}
          </Actions>
        </Measures>

        <Name>Moves</Name>
      </Data>
    </Container>
  );
}

export default About;
