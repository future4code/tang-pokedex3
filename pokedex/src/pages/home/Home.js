import React, { useContext, useEffect } from 'react';
import {Link} from 'react-router-dom';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import { ContainerHome, ButtonHome, Container } from './styled';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import GlobalContext from '../../components/global/GlobalContext';

export const Title = styled.h1`
text-align: center;
`

export default function Home() {

    const {listPokemon, pokemonList, getPokemons} = useContext(GlobalContext)
    
    useEffect(() =>{
        getPokemons()
    
     }, [pokemonList.results]);
    
    const pokemonListRender =
    listPokemon.map((item) => {
        
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
            <Title>LISTA DE POKEMONS</Title>
            <ButtonHome>
                <Link to={'/pokedex'}>
                    <Button variant="outlined" color="primary" >Pokédex</Button>
                </Link>
            </ButtonHome>
            <ContainerHome>
                {pokemonListRender}
            </ContainerHome>
        </Container>
    )
}
