import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import { Collserola } from './components/Collserola'
import { DeltaLlobregat } from './components/DeltaLlobregat'
import { Montserrat } from './components/Montserrat'
import { PantaVallvidrera } from './components/PantaVallvidrera'
import { ParcGarraf } from './components/ParcGarraf'
import { ParcMontseny } from './components/ParcMontseny'
import { Pedraforca } from './components/Pedraforca'
import { SantLlorencLaMola } from './components/SantLlorencLaMola'
import { Home } from './components/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Element per a que es puguin captar les rutes i redireccionar com correspongui */}
      <Routes>
        <Route path="/" element={<App/>}> {/* ruta pare de subgrup */}
          <Route index element={<Home/>}/>
          <Route path='/collserola' element={<Collserola/>}/>
          <Route path='/deltallobregat' element={<DeltaLlobregat/>}/>
          <Route path='/montserrat' element={<Montserrat/>}/>
          <Route path='/pantavallvidrera' element={<PantaVallvidrera/>}/>
          <Route path='/parcgarraf' element={<ParcGarraf/>}/>
          <Route path='/parcmontseny' element={<ParcMontseny/>}/>
          <Route path='/pedraforca' element={<Pedraforca/>}/>
          <Route path='/santllorenclamola' element={<SantLlorencLaMola/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
