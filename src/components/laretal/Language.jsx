import React from 'react'

function Language(props) {

  const language = props.language;
  //console.log(language)

  return (
    <>
      <div className='seccionSubTitulo'>
          <h2>Idiomas</h2>
      </div>

      <div className='seccionContenido'>
          <ul>
              {language.map((item, index) => {
                  return <li key={index}><p>{item}</p></li>})}
          </ul>
      </div>
    </>
  )
}

export default Language