import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AltreArnau } from './AltreArnau'
import App from './App'
import { Arnau } from './Arnau'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolcalla tota l'aplicació x poder organitzar, captar i redirigir rutes */}
      <Routes> {/* li indiquem on estan les rutes */}
        <Route path="/" element={<App/>}>
          <Route index element={<AltreArnau/>}/>
          <Route path="arnau" element={<Arnau/>}> {/* al ser subruta, no fa falta posar /, de fet posar / en una subruta pot donar errors CREC */}
            <Route path=":cognom" element={<Arnau/>}/> 
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
