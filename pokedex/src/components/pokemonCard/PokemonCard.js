import React from 'react'
import ButtonDefault from '../button/ButtonDefault'
import { ContainerCard, ContainerButtons } from './styled'


export default function PokemonCard() {
    return (
        <ContainerCard>
            <div>
                <img src={'https://picsum.photos/200'} alt="" />
                <p> Nome: </p>
            </div>
            <ContainerButtons>
                <ButtonDefault
                text='Adicionar' />
                <ButtonDefault
                text='Detalhes' />
            </ContainerButtons>
        </ContainerCard>
    )
}
