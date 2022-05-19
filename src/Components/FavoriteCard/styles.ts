import styled from "styled-components/native";
import { PokemonName } from "../../dtos/PokemonDTO";

interface Props{
  type: PokemonName;
}

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${({theme}) => theme.background};
  border-radius: 8px;
  align-items: center;
  margin-bottom: 41px;
  justify-content: space-between;
  //elevation: 4; Android
  shadow-color:  ${({theme}) => theme.dark_gray};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
`;

export const SvgContent = styled.View`
  margin-left: -24px;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

export const TextContent = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin-left: 87px;
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const Description = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const LabelBold = styled.Text<Props>`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.BOLD};
  color:${({theme, type}) => theme[type]};
`;

export const Types = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 8px;
`;

export const Option = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: flex-start;
  align-items: flex-start;
`;
