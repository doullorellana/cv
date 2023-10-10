import React from 'react'
import './Resume.css'

function Resume(props) {

    const apellido = props.perfil.apellido;
    const nombre = props.perfil.nombre;
    //console.log(apellido, ", ", nombre)

  return (
    <>
        <h1>{apellido} <span>{nombre}</span></h1>     
        <h3>EMPLEO</h3>
        <p>Mi visión como profesional es contribuir y aprender a cada instante, de esa forma mejorar lo que ya existe. Una de las metas más grandes que tengo en la vida es poder plasmar y brindar mis conocimientos y mis habilidades en grandes proyectos empresariales. Estoy a sus órdenes</p>
        
    </>
  )
}

export default Resume