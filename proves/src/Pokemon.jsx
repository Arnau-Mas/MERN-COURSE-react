import { useEffect, useState } from "react"

export function Pokemon({pokemonList}){
    const [pokemon, setPokemon] = useState(pokemonList[0]);
    const [selectedPokemon, setSelectedPokemon] = useState({});

    useEffect(() => {
        fetch(selectedPokemon.url)
        then(res => res.json())
        .then(data => setPokemon(data))
    }, [selectedPokemon])
    
    console.log("a", pokemonList[0])
    return (
        <div style={{height:"20rem", width:"20rem", backgroundColor:"green"}}>
            <select value={pokemon.name} onChange={() => setSelectedPokemon(pokemon)} name="select">
            {pokemonList.map(pokemon => <option value={pokemon.name}>{pokemon.name}</option>)}
            </select>
        </div>
    )
}