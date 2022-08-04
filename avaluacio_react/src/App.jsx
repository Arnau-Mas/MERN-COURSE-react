
import {Titulo} from './components/Titulo.jsx';
import {Clics} from './components/Clics';
import {Sorteo} from './components/Sorteo';
import "./App.css"
function App() {

  return (<>
    <Titulo texto="hola" color="red" />
    <Titulo texto="react" color="green" />
    <Clics />
    <Sorteo />
  </>
  )
}

export default App
