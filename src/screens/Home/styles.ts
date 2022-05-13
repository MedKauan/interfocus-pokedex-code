import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  padding: 0 16px;
`;

export const Header = styled.View`
  margin-top: 44px;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TitleContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.BOLD};
  font-size: 24px;
  margin-left: 16px;
  color: ${({theme}) => theme.dark_gray};
`;

export const FilterOrderButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export const InputText = styled.TextInput`
  background-color: ${({theme}) => theme.white};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({theme}) => theme.ligth_gray};
  padding: 4px 10px
`;
