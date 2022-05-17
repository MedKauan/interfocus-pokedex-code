import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.background};
  padding: 0 16px;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 44px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.BOLD};
  font-size: 20px;
  color: ${({theme}) => theme.primary};
`;

export const Content = styled.View`
  background-color: ${({theme}) => theme.background};
  align-items: center;
  justify-content: center;
  margin-top: 41px;
`;

export const BackgroundImage = styled.View`
  background-color: ${({theme}) => theme.primary};
  width: 140px;
  height: 140px;
  align-items: center;
  justify-content: center;
  border-radius: 70px;
  margin-bottom: 30px;
`;

export const ExitButton = styled.TouchableOpacity`
  padding: 15px 30px;
  background-color: ${({theme}) => theme.primary};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 41px;
`;

export const Exit = styled.Text`
  font-size: 13px;
  color: ${({theme}) => theme.white};
  font-family: ${({theme}) => theme.fonts.REGULAR};
`;