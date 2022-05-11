import React, { useState } from "react";
import Pokebola from "../../assets/icons/pokeball.svg";
import SortAsc from "../../assets/icons/sortasc.svg";
import SortDesc from "../../assets/icons/sortdesc.svg";
import SmallCard from "../../Components/SmallCard";

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

  function alterFilterType() {
    setDecrescente((oldState) => !oldState);
  }

  return (
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
      <InputText placeholder="Procurar" />

      <SmallCard />
    </Container>
  );
}

export default Home;
