import { PokemonDTO } from "./Pokemon";
import { UsuarioDTO } from "./UsuarioDTO";

export interface FavoritoDTO {
  id: number;
  pokemon: PokemonDTO;
  usuario: UsuarioDTO;
} 