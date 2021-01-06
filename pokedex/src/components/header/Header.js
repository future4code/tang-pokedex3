import React from 'react';
import pokedex from '../../image/pokedex.png';
import {Container} from './styled'

export default function Header() {
    return (
        <Container>
            <div>
                <img src={pokedex} alt="" />
            </div>    
        </Container>
    )
}
