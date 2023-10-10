import React from 'react'

function Experience(props) {

    const experiences = props.experiences;
    //console.log(experience)

  return (
    <>
        <div className='seccionSubTituloPrincipal'>
            <h3>Experiencia Profesional</h3>
        </div>
        
        <div className='seccionContenidoPrincipal'>
            <ul>
                {experiences.map((items, index) => {
                            return <li key={index}>{items[0]}:<br/><strong>{items[1]}</strong><br/><br/></li>})}
                
            </ul>
        </div>
    </>
  )
}

export default Experience