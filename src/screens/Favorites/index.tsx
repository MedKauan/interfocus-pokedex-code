import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import FavoriteCard from "../../Components/FavoriteCard";
import { FavoritoDTO } from "../../dtos/FavoritoDTO";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import { Container, Header, Title } from "./styles";

const FAVORITOS_KEY = "@pokedex:favoritos";

function Favorites() {
  const [favorites, setFavorites] = useState<FavoritoDTO[]>();

  const isFocused = useIsFocused();

  async function getFavorites() {
    const favoritesStorage = await AsyncStorage.getItem(FAVORITOS_KEY);

    console.log("Favoritos storage", favoritesStorage);

    const favoritesParse = favoritesStorage
      ? (JSON.parse(favoritesStorage) as FavoritoDTO[])
      : [];
    setFavorites(favoritesParse);
  }

  async function removeStorage(id: number) {
    const favoritesStorage = await AsyncStorage.getItem(FAVORITOS_KEY);

    const favoritesParse = favoritesStorage
      ? (JSON.parse(favoritesStorage) as FavoritoDTO[])
      : [];

    const filtered = favoritesParse.filter((f) => f.pokemon.id !== id);
    await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(filtered));
    getFavorites();
  }

  useEffect(() => {
    console.log("bateu efeito");
    getFavorites();
  }, [isFocused]);

  return (
    <Container>
      <Header>
        <></>
        <Title>Favoritos</Title>
      </Header>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <FavoriteCard
            pokemon={item.pokemon}
            removeFunction={() => removeStorage(item.pokemon.id)}
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
      {/* // {favorites?.map((f) => {
      //   <FavoriteCard pokemon={f.pokemon} />;
      // })} */}
    </Container>
  );
}

export default Favorites;
