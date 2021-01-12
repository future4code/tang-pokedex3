import React, { useState } from 'react';
import GlobalContext from '../global/GlobalContext';
import axios from 'axios';
import { BASE_URL } from '../../constants/constants';
import useRequestData from '../../Hooks/useRequestData';

 function GlobalState(props) {
    
    const pokemonList = useRequestData({}, BASE_URL)
    const [listPokemon, setListPokemon] = useState([])
    
    const getPokemons = () =>{
        const newListPokemon = []
        pokemonList.results && pokemonList.results.map((item)=>{
            axios.get(item.url).then((response) => {
                newListPokemon.push(response.data)
                if(newListPokemon.length === 20){
                    setListPokemon(newListPokemon)
                }
            }).catch(error => {alert(error)}) 
        })
    } 

    const data = { listPokemon, setListPokemon, pokemonList, getPokemons }
    return (
        <GlobalContext.Provider value = { data }>
            { props.children }
        </GlobalContext.Provider>
    )
}

export default GlobalState;
