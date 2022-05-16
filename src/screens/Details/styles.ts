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
  margin-top: 44px;
  padding-bottom: 140px;  
`;

export const TitleContent = styled.View`
  flex-direction: row;
  align-content: center;
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
  font-family: ${({theme}) => theme.fonts.BOLD};
  color: ${({theme}) => theme.white};
  font-size: 12px;
  margin-top: 12px
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.white};
  border-radius: 8px;
  padding: 0 20px;
  align-items: center;
`;

export const SvgContent = styled.View`
  margin-top: -130px;
  position: absolute;
`;