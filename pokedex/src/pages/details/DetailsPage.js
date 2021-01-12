import React, { useContext, useEffect, useState} from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ContainerDetails, ButtonHome, ContainerButton } from "./styled";
import styled from 'styled-components';
import GlobalContext from '../../components/global/GlobalContext';
import { useParams } from 'react-router-dom';

export const Title = styled.h1`
text-align: center;
`
export default function DetailsPage() {
    const [pokemon, setPokemon] = useState({})
    const pathParams = useParams();
    const {listPokemon} = useContext(GlobalContext)
   
    useEffect(() => {
        const choosedPokemon = listPokemon.find((item) => {
            return item.id.toString() === pathParams.name.toString()
        })
        console.log(choosedPokemon)
       setPokemon(choosedPokemon)
       
    }, [listPokemon, pathParams.name])
    console.log(pathParams.name)
    

    return (
        <div>
            <Title>Detalhes</Title>
            <ContainerButton>
                <ButtonHome>
                    <Link to={'/pokedex'}>
                        <Button variant="outlined" color="primary" >Pokédex</Button>
                    </Link>
                </ButtonHome>
                <ButtonHome>
                    <Link to={'/'}>
                        <Button variant="outlined" color="primary" >Lista de Pokemons</Button>
                    </Link>
                </ButtonHome>
            </ContainerButton>
            
            <ContainerDetails>
                <div>
                    <div>
                        <img src={pokemon.sprites && pokemon.sprites.front_default} alt="" />
                    </div>
                    <div>
                        <img src={pokemon.sprites && pokemon.sprites.back_default} alt="" />
                    </div>
                </div>
                <div>
                    <h2>Estatísticas</h2>
                    {pokemon && pokemon.stats && pokemon.stats.map((item) => {
                        return (
                            <p key={item.stat.name}>
                                {item.stat.name}: {item.base_stat}
                            </p>
                        )
                    })}
                </div>
                <div>
                    {pokemon && pokemon.types && pokemon.types.map((item) => {
                        return (
                            <span key={item.type.name}>
                                <strong>{item.type.name} </strong>
                            </span>
                        )
                    })}

                    <h2>Principais Ataques:</h2>
                    {pokemon && pokemon.types&& pokemon.moves.map((item, index) =>{
                        return(
                            index < 5 && 
                            <p key={item.move.name}><strong>{item.move.name} </strong></p> 
                        )
                    })} 
                </div>
            </ContainerDetails>
        </div> 
    )
}
