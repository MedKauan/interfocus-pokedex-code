import { useNavigation } from "@react-navigation/native";
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
  FilterOrderButton,
  Header,
  InputText,
  Title,
  TitleContent,
} from "./styles";

function Home() {
  const [decrescente, setDecrescente] = useState(false); //filtro de ordem
  const [filterName, setFilterName] = useState(""); //filtro por nome dos pokemons
  const [pokemons, setPokemons] = useState<PokemonDTO[]>([]); // todos pokemons
  const [pokemonsFilter, setPokemonsFilter] = useState<PokemonDTO[]>([]); // pokemons que foram filtrados pelo nome

  function alterFilterName(name: string) {
    setFilterName(name);

    const filtered = pokemons.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
    setPokemonsFilter(filtered);
  }

  //Alterna entre true e false, ou seja ascendente ou decrescente
  function alterFilterType() {
    setDecrescente((oldState) => !oldState); //Ou setDecrescente(!decrescente);
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

          <FilterOrderButton onPress={() => alterFilterType()}>
            {decrescente ? <SortAsc /> : <SortDesc />}
          </FilterOrderButton>
        </Header>
        <InputText
          placeholder="Procurar"
          onChangeText={(inputValue) => alterFilterName(inputValue)}
          keyboardAppearance="dark" //Apenas para IOS
          value={filterName}
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
