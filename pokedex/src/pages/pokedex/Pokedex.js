import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import { ContainerHome, ButtonHome, Container } from '../home/styled';
import styled from 'styled-components';
import GlobalContext from '../../components/global/GlobalContext';

export const Title = styled.h1`
text-align: center;
font-size: 1.5em;
`

export default function Pokedex() {
    const { pokedex } = useContext(GlobalContext)
console.log(pokedex);
    const pokedexListRender =
   pokedex.map((item) => {
        
        return(
             <PokemonCard
                key={item.name}
                identif={item.id}
                name= {item.name}
                image= {item.sprites.front_default}
                text="Adicionar"
                textDetails="Detalhes"
            />
        )
    })

    return (
        <Container>
            <Title>MEUS POKEMONS</Title>
        <ButtonHome>
            <Link to={'/'}>
                <Button variant="outlined" color="primary" >Lista de Pokemons</Button>
            </Link>
        </ButtonHome>
        <ContainerHome>
            {pokedexListRender}
        </ContainerHome>
    </Container>
    )
}
