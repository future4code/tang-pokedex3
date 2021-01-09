import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import ButtonDefault from '../../components/button/ButtonDefault';
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

    const pokemonList = useRequestData([], BASE_URL)
    const [listPokemon, setListPokemon] = useState([])
    console.log(pokemonList.results)
    
    useEffect(() =>{
        pokemonList.results && pokemonList.results.map((e)=>{
            axios.get(e.url).then((response) => {
                //   setListPokemon(array => [...array, response])
                  console.log(response)
            }).catch(error => {alert(error)})
            
        })
    }, [pokemonList.data]);
    
    
        
    // console.log(listPokemon)
    // console.log(pokemonList.results)
    // let newPokemonList = []
    //     if(pokemonList.results){
    //         newPokemonList = pokemonList.results.map((indice) => {
    //                 axios.get(indice.url)
    //                 .then((response) => {
    //                 console.log(response.data.sprites.front_default)
                     
    //                 return <PokemonCard
    //                 image={response.data.sprites.front_default}
    //                 text="Adicionar"
    //                 textDetails="Detalhes"/>
    //                 })
    //                 .catch((error) => {
    //                 console.log(error)
    //                 })
    //             })
    //             console.log(newPokemonList)
    //     }

    // const newListMap = newList.map((item)=> {
        
    // })

    
    return (
        
        <Container>
            <Title>LISTA DE POKEMONS</Title>
            <ButtonHome>
                <Link to={'/pokedex'}>
                    <Button variant="outlined" color="primary" >Pokédex</Button>
                </Link>
            </ButtonHome>
            <ContainerHome>
                {}
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
