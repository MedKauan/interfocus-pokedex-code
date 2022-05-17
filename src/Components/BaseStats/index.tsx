import React from "react";
import { PokemonName, PokemonStats } from "../../dtos/Pokemon";
import {
  Attribute,
  Attributes,
  BackgroundBar,
  Bars,
  Container,
  Value,
  ValueBar,
  Values,
} from "./styles";

interface BaseStatsProps {
  stats: PokemonStats;
  pokemonType: PokemonName;
}

function BaseStats({ stats, pokemonType }: BaseStatsProps) {
  function calcStatValue(currentValue: string) {
    const totalPoints = 252;
    const newValue = Number(currentValue);
    let currentValuePercent = newValue * 100;
    let currentPercentual = currentValuePercent / totalPoints;

    return currentPercentual.toFixed(2);
  }

  return (
    <Container>
      <Attributes>
        <Attribute type={pokemonType}>HP</Attribute>
        <Attribute type={pokemonType}>ATK</Attribute>
        <Attribute type={pokemonType}>DEF</Attribute>
        <Attribute type={pokemonType}>SATK</Attribute>
        <Attribute type={pokemonType}>SDEF</Attribute>
        <Attribute type={pokemonType}>SPD</Attribute>
      </Attributes>

      <Values>
        <Value>{stats.hp}</Value>
        <Value>{stats.atk}</Value>
        <Value>{stats.def}</Value>
        <Value>{stats.satk}</Value>
        <Value>{stats.sdef}</Value>
        <Value>{stats.spd}</Value>
      </Values>

      <Bars>
        <BackgroundBar type={pokemonType}>
          <ValueBar type={pokemonType} percentual={calcStatValue(stats.hp)} />
        </BackgroundBar>
        <BackgroundBar type={pokemonType}>
          <ValueBar type={pokemonType} percentual={calcStatValue(stats.atk)} />
        </BackgroundBar>
        <BackgroundBar type={pokemonType}>
          <ValueBar type={pokemonType} percentual={calcStatValue(stats.def)} />
        </BackgroundBar>
        <BackgroundBar type={pokemonType}>
          <ValueBar type={pokemonType} percentual={calcStatValue(stats.satk)} />
        </BackgroundBar>
        <BackgroundBar type={pokemonType}>
          <ValueBar type={pokemonType} percentual={calcStatValue(stats.sdef)} />
        </BackgroundBar>
        <BackgroundBar type={pokemonType}>
          <ValueBar type={pokemonType} percentual={calcStatValue(stats.spd)} />
        </BackgroundBar>
      </Bars>
    </Container>
  );
}

export default BaseStats;
