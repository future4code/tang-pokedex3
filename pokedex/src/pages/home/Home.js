import React from 'react';
import {Link} from 'react-router-dom'
import ButtonDefault from '../../components/button/ButtonDefault';
import PokemonCard from '../../components/pokemonCard/PokemonCard';
import { ContainerHome, ButtonHome, Container } from './styled';
import Button from '@material-ui/core/Button';

export default function Home() {
    return (
        <Container>
            <ButtonHome>
                <Link to={'/pokedex'}>
                    <Button variant="outlined" color="primary" >Pokédex</Button>
                </Link>
            </ButtonHome>
            <ContainerHome>
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
                <PokemonCard />
            </ContainerHome>
        </Container>
    )
}
