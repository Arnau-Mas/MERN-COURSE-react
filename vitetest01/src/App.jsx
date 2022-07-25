import Bola from "./components/Bola";
import CuadradoB from "./components/CuadradoB";
import Titulo from "./components/Titulo";
import Mosca from"./components/Mosca";
import Capital from "./components/Capital";
import Gato from "./components/Gato";
import FotoBola from "./components/FotoBola";
import BolaBingo from "./components/BolaBingo";
import Marco from "./components/Marco";


function App() {
  /* Dues maneres d'encapsular components o crear a partir d'un array, després es posen dins del codi amb {bolas} (linia 21 i 22) */
  let bolas = [<Bola numero="1"/>, <Bola numero="2"/>, <Bola numero="33git"/>];
  let numbers = [4,5,6];
  let newArrayBoles = numbers.map((number) => <Bola numero={number}/>)

  return (
    <>
      <Titulo texto="Hola React!" />
      <h1>Hola</h1>
      {bolas}
      {newArrayBoles}
      <CuadradoB talla="70px" grosor="5px" margen="8px" color="rgb(255, 79, 79)"/>
      <Mosca talla="40px" color="rgb(255, 79, 79)" margen="10px"/>
      <Capital nom="Barcelona" />
      <Gato ancho="200px" alto="200px" nombre="Garfield" />
      <FotoBola src="https://placekitten.com/200/130" radio="200px"/>
      <BolaBingo talla="40px" margen="10px" fondo="rgb(255, 79, 79)" num="22" color="white" />
      <Marco src="https://placekitten.com/200/286" fondo="beige" borde="10px" color="red" />
    </>
  )
}

export default App
