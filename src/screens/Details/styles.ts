import styled from "styled-components/native";
import { PokemonName } from "../../dtos/Pokemon";


interface Props{
  type: PokemonName
}

export const Container = styled.View<Props>`
  flex: 1;
  padding: 4px 4px;
  background-color: ${({theme, type}) => theme[type]};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonHeader = styled.View`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text<Props>`
  font-family: ${({theme}) => theme.fonts.BOLD};
  color: ${({theme}) => theme.white};
  font-size: 24px;
  margin-left: 19px;
  margin-right: 16px;
`;


export const Code = styled.Text<Props>`
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme, type}) => theme[type]};
  font-size: 12px;
`;