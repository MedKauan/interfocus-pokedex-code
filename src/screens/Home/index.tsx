import React, { useEffect, useState } from "react";
import { FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import Pokebola from "../../assets/icons/pokeball.svg";
import SortAsc from "../../assets/icons/sortasc.svg";
import SortDesc from "../../assets/icons/sortdesc.svg";
import SmallCard from "../../Components/SmallCard";
import { PokemonDTO } from "../../dtos/Pokemon";
import api from "../../services/api";

import {
  Container,
  FilterButton,
  Header,
  InputText,
  Title,
  TitleContent,
} from "./styles";

function Home() {
  const [decrescente, setDecrescente] = useState(false);
  const [filterName, setFilterName] = useState("");
  const [pokemons, setPokemons] = useState<PokemonDTO[]>([]);
  const [pokemonsFilter, setPokemonsFilter] = useState<PokemonDTO[]>([]);

  function alterFilterName(name: string) {
    console.log(name);
    setFilterName(name);

    const filtered = pokemons.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    setPokemonsFilter(filtered);
    console.log(filtered);
  }

  function alterFilterType() {
    setDecrescente((oldState) => !decrescente); //Ou setDecrescente(!decrescente);
  }

  async function getPokemons() {
    try {
      const filter = decrescente
        ? "?_sort=name&_order=desc"
        : "?_sort=name&_order=asc";
      const resposta = await api.get<PokemonDTO[]>(`/pokemons${filter}`);

      if (resposta.data) {
        setPokemons(resposta.data);
        setPokemonsFilter(resposta.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPokemons();
  }, [decrescente]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <Container>
        <Header>
          <TitleContent>
            <Pokebola width={24} height={24} />
            <Title>Pokedex</Title>
          </TitleContent>

          <FilterButton onPress={() => alterFilterType()}>
            {decrescente ? <SortAsc /> : <SortDesc />}
          </FilterButton>
        </Header>
        <InputText
          placeholder="Procurar"
          onChangeText={(inputValue) => alterFilterName(inputValue)}
          keyboardAppearance="dark"
        />
        {/* OU onChangeText={alterFilterName}*/}

        <FlatList
          data={pokemonsFilter}
          keyExtractor={(pokemon) => pokemon.id.toString()}
          numColumns={3}
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
          }}
          style={{
            width: "100%",
          }}
          renderItem={({ item }) => <SmallCard pokemon={item} />}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default Home;
