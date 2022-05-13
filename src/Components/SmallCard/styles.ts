import styled from "styled-components/native";
import { PokemonName } from "../../dtos/Pokemon";

interface Props{
  type: PokemonName;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 104px;
  height: 112px;
  border-radius: 8px;
  border-width: 1px;
  margin: 8px 8px 4px 0;
  border-color: ${({theme, type}) => theme[type]};
  background-color: ${({theme}) => theme.white}; // Adicionado background
`;

export const PokemonCode = styled.View`
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  padding: 4px 8px 0 8px
`;

export const Code = styled.Text<Props>`
  font-size: 8px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color:${({theme, type}) => theme[type]};
`;

export const SvgContent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const NameContent = styled.View<Props>`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({theme, type}) => theme[type]};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 5px 8px; //padding 5px para arrumar riquinho em branco na tela
`;

export const Name = styled.Text`
  font-size: 10px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.white}
`;
