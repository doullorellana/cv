import React from 'react'
import './Resume.css'

function Resume(props) {

    const apellido = props.perfil.apellido;
    const nombre = props.perfil.nombre;
    const perfilActual = props.perfil.perfilActual;
    const acercade = props.perfil.acercade;
    //console.log(apellido, ", ", nombre)

  return (
    <>
        <h1>{apellido} <span>{nombre}</span></h1>     
        <h3>{perfilActual.toUpperCase()}</h3>
        <p>{acercade}</p>
        
    </>
  )
}

export default Resume