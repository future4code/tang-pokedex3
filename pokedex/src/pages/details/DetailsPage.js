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
    const {listPokemon, pokemonList, getPokemons} = useContext(GlobalContext)
   
    useEffect(() => {
        const choosedPokemon = listPokemon.find((item) => {
            console.log(item.id)
            return item.id === pathParams.name
        })
       setPokemon(choosedPokemon)
       
    }, [])
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
                        <img src={"https://picsum.photos/200"} alt="" />
                    </div>
                    <div>
                        <img src={"https://picsum.photos/200"} alt="" />
                    </div>
                </div>
                <div>
                    <h2>Estatísticas</h2>
                    <p>Hp:</p>
                    <p>Ataque:</p>
                    <p>Defesa:</p>
                    <p>Ataque Especial:</p>
                    <p>Defesa Especial</p>
                    <p>Velocidade:</p>
                </div>
                <div>
                    <h3>Tipo | Tipo:</h3>
                    <h2>Principais Ataques:</h2>
                    <p>Ataque1</p>
                    <p>Ataque2</p>
                    <p>Ataque3</p>
                </div>
            </ContainerDetails>
        </div> 
    )
}
