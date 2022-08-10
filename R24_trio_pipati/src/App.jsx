import { useEffect, useState } from "react"

function App() {
  const [eleccioJugador, setEleccioJugador] = useState("");
  const [eleccioOrdinador, setEleccioOrdinador] = useState("")

  let result;
  let resultJugador;
  let resultPc;

  if(eleccioJugador===eleccioOrdinador){
    result = "Empate"
  }else{
    if(eleccioJugador===1 && eleccioJugador===2 || eleccioJugador===2 && eleccioOrdinador===3 || eleccioJugador===3 && eleccioOrdinador ===1){
      result="Guanya Ordinador"
    }else{
      result="Guanya Jugador"
    }
  }

  switch(eleccioJugador){
    case 1: resultJugador = "Pedra";
    break;
    case 2: resultJugador = "Paper";
    break;
    case 3: resultJugador = "Tisores";
    break;
  }

  switch(eleccioOrdinador){
    case 1: resultPc = "Pedra";
    break;
    case 2: resultPc = "Paper";
    break;
    case 3: resultPc = "Tisores";
    break;
  }

  function handleClick(number){
    setEleccioJugador(number);
    setEleccioOrdinador(Math.floor(Math.random() * (3 - 1 + 1) + 1));
  }
  return (
    <div>
        <button onClick={() => handleClick(1)}>Pedra</button>
        <button onClick={() => handleClick(2)}>Paper</button>
        <button onClick={() => handleClick(3)}>Tisores</button>
        <p>Elecció jugador:{resultJugador}</p>
        <p>Elecció ordinador:{resultPc}</p>
        <p>{result}</p>
    </div>
  )
}

export default App
