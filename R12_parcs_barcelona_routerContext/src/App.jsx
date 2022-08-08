import './App.css'
import { NavBar } from './components/NavBar'
import { Outlet, Link } from "react-router-dom";
import ComponentTraductor from './components/ComponentTraductor';
import diccionari from "./components/diccionari.js"

function App() {

  return (
    <div className="App">
      <div className='title'>
        <Link to="/"><h1>Salir.com</h1></Link>
        <div style={{display:"flex", gap:"0.5rem"}}>
          <button>CAT</button>
          <button>ES</button>
        </div>
      </div>
      <ComponentTraductor.Provider >
        <div style={{display:"flex", gap:"4rem"}}>
          <NavBar/>
          <div style={{marginTop:"2rem"}}>
            <Outlet/>
          </div>
        </div>
      </ComponentTraductor.Provider>
    </div>
  )
}

export default App
