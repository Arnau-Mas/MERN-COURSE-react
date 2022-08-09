import React, {useState, useContext, useEffect} from "react";
import {Navigate, Link, useParams} from "react-router-dom";
import Controller from './ContactesController';

import TraductorContext from "./TraductorContext.js";



export default (props) => {

  const [volver, setVolver] = useState(false);
  const [contacto, setContacto] = useState({});

  const Traductor = useContext(TraductorContext);

  const parametros = useParams();

  useEffect(()=>{
    const id = parametros.id;
    setContacto(Controller.getById(id));
  }, [])

  const borrar = () => {
    Controller.deleteById(contacto.id);
    setVolver(true);
  }

  if (volver){
    return <Navigate to="/contactos" />
  }

  console.log(contacto);
  return (
    <>
      <h3>{Traductor.traduce('detalle')}</h3>
      <hr />
      <h1>{Traductor.traduce('nombre')}: {contacto.nom}</h1>
      <h3>{Traductor.traduce('email')}: {contacto.email}</h3>
      <h3>{Traductor.traduce('tel')}: {contacto.tel}</h3>
      <h3>{Traductor.traduce('date')}: {contacto.date}</h3>
      <div><h3>{Traductor.traduce('color')}:</h3><p style={{width:"40px", height:"40px", backgroundColor:contacto.color}}></p></div>
      <hr />
      <Link className='btn btn-primary' to='/contactos' >{Traductor.traduce('volver')}</Link>
      {' '}
      <button className='btn btn-danger' onClick={borrar} >{Traductor.traduce('eliminar')}</button>
    </>
  );
};
