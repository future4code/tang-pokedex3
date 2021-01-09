import React from 'react'
import ButtonDefault from '../button/ButtonDefault'
import { ContainerCard, ContainerButtons } from './styled';
import Button from '@material-ui/core/Button';


export default function PokemonCard(props) {
    return (
        <ContainerCard>
            <p> Nome: </p>
            <div>
                <img src={props.image} alt="" />
            </div>
            <ContainerButtons>
                <Button
                    variant="contained"
                    color="primary">
                    {props.text}
                </Button>
                
                <Button
                    variant="contained"
                    color="primary">
                    {props.textDetails}
                </Button>
            </ContainerButtons>
        </ContainerCard>
    )
}
