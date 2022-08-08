import './App.css'
import { NavBar } from './components/NavBar'
import { Outlet, Link } from "react-router-dom";
import ComponentTraductor from './components/ComponentTraductor';
import diccionari from "./components/diccionari.js"
import { useState } from 'react';

function App() {
  const [idioma, setIdioma] = useState(0);
  
  function traduce(etiqueta){
    let frases = diccionari[etiqueta]
    return frases[idioma]
  }

  return (
    <ComponentTraductor.Provider >
    <div className="App">
      <div className='title'>
        <Link to="/"><h1>Salir.com</h1></Link>
        <div style={{display:"flex", gap:"0.5rem"}}>
          <button>CAT</button>
          <button>ES</button>
        </div>
      </div>
        <div style={{display:"flex", gap:"4rem"}}>
          <NavBar/>
          <div style={{marginTop:"2rem"}}>
            <Outlet/>
          </div>
        </div>
      </div>
      </ComponentTraductor.Provider>
  )
}

export default App
