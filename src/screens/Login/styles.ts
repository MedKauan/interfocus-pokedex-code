import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled.TouchableOpacity`
  padding: 10px;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.primary};
  font-family: ${({theme}) => theme.fonts.BOLD} 
`;