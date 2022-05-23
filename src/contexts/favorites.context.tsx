import React, { createContext } from "react";
import { FavoritoDTO } from "../dtos/FavoritoDTO";
import { PokemonDTO } from "../dtos/PokemonDTO";

interface IFavoritesContext {
  favoritesList: FavoritoDTO[];
  listFavorites(): Promise<void>;
  addFavorites(pokemon: PokemonDTO): Promise<void>;
  removeFavorite(pokemonId: number): Promise<void>;
  existPokemonInFavorites(pokemonId: number): Promise<boolean>;
}

export const FavoritesContext = createContext({} as IFavoritesContext);
