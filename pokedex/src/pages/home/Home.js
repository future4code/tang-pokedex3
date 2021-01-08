import React from 'react';
import {Link} from 'react-router-dom';
import ButtonDefault from '../../components/button/ButtonDefault';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import { ContainerHome, ButtonHome, Container } from './styled';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const Title = styled.h1`
text-align: center;
`

export default function Home() {
    return (
        <Container>
            <Title>LISTA DE POKEMONS</Title>
            <ButtonHome>
                <Link to={'/pokedex'}>
                    <Button variant="outlined" color="primary" >Pokédex</Button>
                </Link>
            </ButtonHome>
            <ContainerHome>
                <PokemonCard 
                    text="Adicionar"
                    textDetails="Detalhes"/>
                <PokemonCard 
                    text="Adicionar"
                    textDetails="Detalhes"/>
                <PokemonCard 
                    text="Adicionar"
                    textDetails="Detalhes"/>
                <PokemonCard 
                    text="Adicionar"
                    textDetails="Detalhes"/>
                <PokemonCard 
                    text="Adicionar"
                    textDetails="Detalhes"/>
                <PokemonCard 
                    text="Adicionar"
                    textDetails="Detalhes"/>
                
                <PokemonCard 
                    text="Adicionar"
                    textDetails="Detalhes"/>
                <PokemonCard 
                    text="Adicionar"
                    textDetails="Detalhes"/>
                <PokemonCard 
                    text="Adicionar"
                    textDetails="Detalhes"/>
                <PokemonCard 
                    text="Adicionar"
                    textDetails="Detalhes"/>
                <PokemonCard 
                    text="Adicionar"
                    textDetails="Detalhes"/>
            </ContainerHome>
        </Container>
    )
}
