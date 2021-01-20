import React from 'react';
import imageErro from '../../image/erro.jpg'
import { ContainerErro } from './styled';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


export default function Erro() {
    return (
        <ContainerErro>
            <Link to={ "/" }>
                <Button variant="outlined" color="primary">Lista de Pokemons</Button>
            </Link>
            <h2>Ooohh, não!!!! Algo deu errado, tente novamente.</h2>
            <img src={ imageErro } alt="" />
        </ContainerErro>
    )
}
