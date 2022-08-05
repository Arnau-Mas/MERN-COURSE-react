import { useEffect, useState } from "react"
import { Pokemon } from "./Pokemon";

export function PokemonSetup(){

    const [pokemonList, setPokemonList] = useState([]);
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/")
        .then(res => res.json())
        .then(data => setPokemonList(data.results))
    }, [])

    return (
        <div style={{height:"100vh"}}>
            <h1>Joc de Pokémon</h1>
            <div style={{display:"flex", justifyContent:"center", gap:"2rem"}}>
                <Pokemon pokemonList={pokemonList}/>
                <Pokemon pokemonList={pokemonList}/>
            </div>
        </div>
    )
}