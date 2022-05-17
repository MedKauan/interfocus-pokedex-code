import styled from "styled-components/native";
import { PokemonName } from "../../dtos/Pokemon";

interface Props {
  type: PokemonName;
}

export const Container = styled.View<Props>`
  padding: 4px 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, type}) => theme[type]};
  border-radius: 10px;
  margin: 0 8px;
`;

export const Type = styled.Text`
  font-size: 10px;
  color: ${({theme}) => theme.white};
  font-family: ${({theme}) => theme.fonts.BOLD}
`;