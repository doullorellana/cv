import React from 'react'

function Perfil(props) {

    const nombre = props.perfil.nombre;
    const direccion = props.perfil.direccion;
    const email = props.perfil.email;
    const contenidoEmail = "Buen dia Sr. Doull Orellana.%0D%0AEs un gusto poder saludarle por este medio.%0D%0A%0D%0AEl motivo del presente es para solicitar su apoyo con lo siguiente...%0D%0A%0D%0A%0D%0AQuedamos de usted muy atentamente.%0D%0AA sus ordenes.";
    const telefono = props.perfil.telefono;
    const telefonowa = props.perfil.telefonowa;
    const contenidowa = "Buen%20dia%20Sr.%20Doull%20Orellana.%20Es%20un%20gusto%20saludarle%20por%20este%20medio.%20Le%20escribo%20muy%20cordialmente%20para...";
    const fechaNacimiento = props.perfil.fechaNacimiento;
    //console.log(direccion)

  return (
    <>
        <div className='imgPerfil'>
            <img src="./imgPerfil.png" />
        </div>

        <div className='seccionSubTitulo'>
            <h2>Perfil</h2>
        </div>

        <div className='seccionContenido'>
            <h3>Dirección</h3>
            <p>{direccion}</p>

            <h3>Email</h3>
            <p><a href={`mailto:${email}?subject=Email to ${nombre}&body=${contenidoEmail}`}>{email}</a></p>

            <h3>Teléfono</h3>
            <p><a href={`https://wa.me/${telefonowa}?text=${contenidowa}`} target="_blank">{telefono}</a></p>

            <h3>Fecha de nacimiento</h3>
            <p>{fechaNacimiento}</p>
        </div>
    </>
    
  )
}

export default Perfil