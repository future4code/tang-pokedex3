import React from 'react';
import pokedex from '../../image/pokedex.png';
import {Container, ImageHeader, Image} from './styled'

export default function Header() {
    return (
        <Container>
            <ImageHeader>
                <Image src={pokedex} alt="" />
            </ImageHeader>    
        </Container>
    )
}
