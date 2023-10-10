import React from 'react'

function Skills(props) {

    const skills = props.skills;
    //console.log(skills)

  return (
    <>
        <div className='seccionSubTitulo'>
            <h2>Habilidades</h2>
        </div>

        <div className='seccionContenido'>
            <ul>
                {skills.map((item, index) => {
                      return <li key={index}><p>{item}</p></li>
                      })}
            </ul>
        </div>
    </>
  )
}

export default Skills