import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import { ContainerHome, ButtonHome, Container } from './styled';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { BASE_URL } from "../../constants/constants"
import useRequestData from "../../Hooks/useRequestData"
import axios from "axios"

export const Title = styled.h1`
text-align: center;
`

export default function Home() {

    const pokemonList = useRequestData({}, BASE_URL)
    const [listPokemon, setListPokemon] = useState([])
    
    useEffect(() => {
        const newListPokemon = []
        pokemonList.results && pokemonList.results.map((item)=>{
            axios.get(item.url).then((response) => {
                newListPokemon.push(response.data)
                if(newListPokemon.length === 20){
                    setListPokemon(newListPokemon)
                }
            }).catch(error => {alert(error)}) 
        })
    }, [pokemonList.results]);
    console.log(listPokemon);
    const pokemonListRender =
    listPokemon.map((item) => {

        return(
             <PokemonCard
                key={item.id}
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
