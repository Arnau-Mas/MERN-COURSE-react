import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemon, setPokemon] = useState();
  let missatge ="no hi ha dades";
  console.log("render en marxa") //això no pararia de mostrar-se x consola si el fetch estigués fora del useEffect.
  if(pokemonList.length){
    missatge = `el primer pokemon és: ${pokemonList[0].name}`
  }
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
  .then(response => response.json())
  .then(data => setPokemonList(data.results))
  .catch(e => console.log(e))
  }, []) //aquest efecte s'executarà cada vegada que canvii de valor la variable que fiquis dins l'array (segon paràmetre). Si no poses cap variable dins l'array, s'executa una única vegada.

  return (
    <div className="App">
      <h1>Fetch...</h1>
      <ul>
        <p>{missatge}</p>
        {pokemonList.map(pokemon => <li key={pokemon.name}>{pokemon.name}</li>)}
        {pokemonList.map(pokemon => <button onClick={() => setPokemon(pokemon.name)}>{pokemon.name}</button>)}
        <p>el nom escollit: {pokemon}</p>
        <h1>MIRAR EXEMPLE PROFE</h1> {/* https://bitbucket.org/fundesplai/pokemons/src/master/ */}
      </ul>
    </div>
  )
}

export default App
