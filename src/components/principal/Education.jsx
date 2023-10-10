import React from 'react'

function Education(props) {

    const educations = props.educations;
    //console.log(educations)

  return (
    <>
        <div className='seccionSubTituloPrincipal'>
            <h3>Educación</h3>
        </div>

        <div className='seccionContenidoPrincipal'>
            <ul>
                {educations.map((items, index) => {
                    return <li key={index}><strong>{items[0]}:</strong>  {items[1]}<br/><br/></li>})}
            </ul>
        </div>
    </>
  )
}

export default Education