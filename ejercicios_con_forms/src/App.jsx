
import './App.css'
import Autocompletar from './Autocompletar'
import FormularioLogin from './FormularioLogin'
import ValidarEmail from './ValidarEmail'
import ValidarPassword from './ValidarPassword'

function App() {
  return (
    <div className="App">
      <h1 className='mb-5'>React input exercises</h1>
      <Autocompletar/>
      <FormularioLogin/>
      <ValidarPassword/>
      <ValidarEmail/>
    </div>
  )
}

export default App
