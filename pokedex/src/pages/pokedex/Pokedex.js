import React from 'react';
// import { ContainerPokedex } from './styled';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
// import { ButtonHome } from '../home/styled';
import { ContainerHome, ButtonHome, Container } from '../home/styled';
import styled from 'styled-components';

export const Title = styled.h1`
text-align: center;
`


export default function Pokedex() {
    return (
        <Container>
            <Title>MEUS POKEMONS</Title>
        <ButtonHome>
            <Link to={'/'}>
                <Button variant="outlined" color="primary" >Lista de Pokemons</Button>
            </Link>
        </ButtonHome>
        <ContainerHome>
            <PokemonCard 
                text="Remover"
                textDetails="Detalhes"/>
            <PokemonCard 
                text="Remover"
                textDetails="Detalhes"/>
            <PokemonCard 
                text="Remover"
                textDetails="Detalhes"/>
            <PokemonCard 
                text="Remover"
                textDetails="Detalhes"/>
            <PokemonCard 
                text="Remover"
                textDetails="Detalhes"/>
            <PokemonCard 
                text="Remover"
                textDetails="Detalhes"/>
            <PokemonCard 
                text="Remover"
                textDetails="Detalhes"/>
            <PokemonCard 
                text="Remover"
                textDetails="Detalhes"/>
            <PokemonCard 
                text="Remover"
                textDetails="Detalhes"/>
            <PokemonCard 
                text="Remover"
                textDetails="Detalhes"/>
            <PokemonCard 
                text="Remover"
                textDetails="Detalhes"/>
        </ContainerHome>
    </Container>
        // <ContainerPokedex>
        //     <h1>MEUS POKEMONS</h1>
        //     <ButtonHome>
        //         <Link to={'/'}>
        //             <Button variant="outlined" color="primary" >Lista de Pokemons</Button>
        //         </Link>
        //     </ButtonHome>
        //     <div>
        //         <PokemonCard
        //         text="Remover"
        //         textDetails="Detalhes"/>
        //         <PokemonCard 
        //         text="Remover"
        //         textDetails="Detalhes"/>
        //     </div>
        // </ContainerPokedex>
    )
}
