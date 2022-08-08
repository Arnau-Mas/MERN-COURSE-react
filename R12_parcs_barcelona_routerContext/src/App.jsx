import './App.css'
import { NavBar } from './components/NavBar'
import { Outlet, Link } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <div className='title'>
        <h1>Salir.com</h1>
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
  )
}

export default App
