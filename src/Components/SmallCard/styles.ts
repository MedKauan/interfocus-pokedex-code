import styled from "styled-components/native";

export const Container = styled.View`
  width: 104px;
  height: 112px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.fire};
`;

export const PokemonCode = styled.View`
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  padding: 4px 8px 0 8px
`;

export const Code = styled.Text`
  font-size: 8px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.fire}
`;

export const SvgContent = styled.View`
  align-items: center;
  justify-content: center;
`;

export const NameContent = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.fire};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 4px 8px;
`;

export const Name = styled.Text`
  font-size: 10px;
  font-family: ${({theme}) => theme.fonts.REGULAR};
  color: ${({theme}) => theme.white}
`;