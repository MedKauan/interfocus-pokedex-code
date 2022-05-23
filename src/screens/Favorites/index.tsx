import { Feather } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { FlatList } from "react-native";
import { useTheme } from "styled-components";
import FavoriteCard from "../../Components/FavoriteCard";
import { useFavorite } from "../../hooks/favorite";
import { ButtonHeader, Container, Header, Title } from "./styles";

function Favorites() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { favoritesList, listFavorites, removeFavorite } = useFavorite();

  const isFocused = useIsFocused();

  function goBack() {
    navigation.goBack();
  }

  useEffect(() => {
    listFavorites;
  }, [isFocused]);

  return (
    <Container>
      <Header>
        <ButtonHeader onPress={() => goBack()}>
          <Feather name="arrow-left" size={18} color={theme.primary} />
        </ButtonHeader>
        <Title>Favoritos</Title>
      </Header>
      <FlatList
        data={favoritesList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FavoriteCard
            pokemon={item.pokemon}
            removeFunction={() => removeFavorite(item.pokemon.id)}
          />
        )}
        style={{
          flex: 1,
          paddingTop: 33,
          paddingRight: 0,
          paddingBottom: 0,
          paddingLeft: 24,
        }}
      />
    </Container>
  );
}

export default Favorites;
