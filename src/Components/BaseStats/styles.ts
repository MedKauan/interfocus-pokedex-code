import styled from "styled-components/native";
import { PokemonName } from "../../dtos/PokemonDTO";

interface BackgroundBarProps {
  type: PokemonName;
}

interface BarProps extends BackgroundBarProps{
  percentual: string;
}


export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const Attributes = styled.View`
  align-items: flex-end;
  justify-content: center;
  padding: 5px 12px 5px 0;
  border-right-width: 1px;
  border-right-color: ${({theme}) => theme.ligth_gray};
`;

export const Attribute = styled.Text<BackgroundBarProps>`
  font-family: ${({theme}) => theme.fonts.BOLD};
  color: ${({theme, type}) => theme[type]};
  font-size: 12px;
`;

export const Values = styled.View`
  align-items: flex-end;
  justify-content: center;
  padding: 5px 8px 5px 12px;
`;

export const Value = styled.Text`
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.dark_gray};
  font-size: 12px;
`;

export const Bars = styled.View`
  flex: 1;
`;

export const BackgroundBar = styled.View<BackgroundBarProps>`
  width: 100%;
  background-color: ${({theme, type}) => theme[type]}28;
  height: 4px;
  margin-bottom: 5px;
  margin-top: 8px;
  border-radius: 4px;
`;


export const ValueBar = styled.View<BarProps>`
  width: ${({percentual}) => percentual}%;
  background-color: ${({theme, type}) => theme[type]};
  height: 4px;
  border-radius: 4px;
`;