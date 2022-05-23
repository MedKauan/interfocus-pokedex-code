import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../contexts/favorites.context";
import { FavoritoDTO } from "../dtos/FavoritoDTO";
import { PokemonDTO } from "../dtos/PokemonDTO";
import { useAuth } from "./auth";

interface FavoriteProviderProps {
  children: ReactNode;
}

const FAVORITOS_KEY = "@pokedex:favoritos";

function FavoriteProvider({ children }: FavoriteProviderProps) {
  const [favoritesList, setFavoriteList] = useState<FavoritoDTO[]>([]);
  const { usuario } = useAuth();

  async function listFavorites() {
    const favoritesStorage = await AsyncStorage.getItem(FAVORITOS_KEY);

    const favoritesParse = favoritesStorage
      ? (JSON.parse(favoritesStorage) as FavoritoDTO[])
      : [];
    setFavoriteList(favoritesParse);
  }

  async function addFavorites(pokemon: PokemonDTO) {
    const isFavorite = await existPokemonInFavorites(pokemon.id);

    if (isFavorite) {
      removeFavorite(pokemon.id);
    } else {
      favoritesList.push({
        id: Math.random(),
        pokemon,
        usuario: usuario!,
      });

      await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritesList));
    }
  }

  async function removeFavorite(pokemonId: number) {
    const filtered = favoritesList.filter((f) => f.pokemon.id !== pokemonId);
    await AsyncStorage.setItem(FAVORITOS_KEY, JSON.stringify(filtered));
  }

  async function existPokemonInFavorites(pokemonId: number) {
    return favoritesList.some((f) => f.pokemon.id === pokemonId);
  }

  useEffect(() => {
    listFavorites();
  }, [favoritesList]);

  return (
    <FavoritesContext.Provider
      value={{
        favoritesList,
        listFavorites,
        addFavorites,
        removeFavorite,
        existPokemonInFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

function useFavorite() {
  const context = useContext(FavoritesContext);
  return context;
}

export { FavoriteProvider, useFavorite };
