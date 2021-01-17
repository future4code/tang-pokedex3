import React, { useContext, useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ContainerDetails, ButtonHome, ContainerButton, ContainerEstats, ContainerImages, ContainerImage, Image, ContainerType, ContainerAtacks, Container } from "./styled";
import styled from 'styled-components';
import GlobalContext from '../../components/global/GlobalContext';
import { useParams } from 'react-router-dom';

export const Title = styled.h1`
text-align: center;
text-transform:uppercase;
font-size: 1.5em;
`

export default function DetailsPage() {
    const [pokemon, setPokemon] = useState({})
    const pathParams = useParams();
    const { listTotalPokemon } = useContext(GlobalContext)

    useEffect(() => {
        const choosedPokemonPokedex = listTotalPokemon.find((item) => {
            return item.id.toString() === pathParams.name.toString()
        })
        setPokemon(choosedPokemonPokedex)
    }, [listTotalPokemon, pathParams.name])

    return (
        <Container>
            <Title>Detalhes</Title>
            <ContainerButton>
                <ButtonHome>
                    <Link to={'/pokedex'}>
                        <Button variant="outlined" color="primary" >Pokédex</Button>
                    </Link>
                </ButtonHome>
                <ButtonHome>
                    <Link to={ '/' }>
                        <Button variant="outlined" color="primary" >Lista de Pokemons</Button>
                    </Link>
                </ButtonHome>
            </ContainerButton>
            <main>
                <ContainerDetails>
                    <ContainerImages>
                        <Title>{ pokemon && pokemon.name }</Title>
                        <ContainerImage>
                            <Image src={ pokemon && pokemon.sprites && pokemon.sprites.front_default } alt={ pokemon && pokemon.name } />
                        </ContainerImage>
                        <ContainerImage>
                            <Image src={ pokemon && pokemon.sprites && pokemon.sprites.back_default } alt={ pokemon && pokemon.name } />
                        </ContainerImage>
                    </ContainerImages>
                    <div>
                        <Title>Estatísticas</Title>
                        <ContainerEstats>
                            <div>
                                <p>Força:</p>
                                <p>Ataque:</p>
                                <p>Defesa:</p>
                                <p>Ataque especial:</p>
                                <p>Defesa especial:</p>
                                <p>Velocidade:</p>
                            </div>
                            <div>
                                { pokemon && pokemon.stats && pokemon.stats.map((item) => {
                                    return (
                                        <p key={ item.stat.name }>
                                            { item.base_stat }
                                        </p>
                                    )
                                }) }
                            </div>
                        </ContainerEstats>
                    </div>
                    <div>
                        <Title>Tipo</Title>
                        <ContainerType>
                            { pokemon && pokemon.types && pokemon.types.map((item) => {
                                return (
                                    <span key={ item.type.name }>
                                        <p>{ item.type.name }</p>
                                    </span>
                                )
                            })}
                        </ContainerType>

                        <Title>Principais Ataques:</Title>
                        <ContainerAtacks>
                            { pokemon && pokemon.types && pokemon.moves.map((item, index) => {
                                return (
                                    index < 5 &&
                                    <p key={ item.move.name }>{ item.move.name } </p>
                                )
                            }) }
                        </ContainerAtacks>
                    </div>

                </ContainerDetails>
            </main>
        </Container>
    )
}
