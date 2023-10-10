import React from 'react'
import './Contacts.css'

function Contacts(props) {

    const references = props.references;
    //console.log(references)

  return (
    <>
        <div className='seccionSubTituloPrincipal'>
            <h3>Referencias</h3>
        </div>
        
        <div className='seccionContenidoPrincipal'>
            <ul>
                {references.map((items, index) => {
                    return <li key={index}>
                                <div className='columnas'>
                                    <div className='columna'>
                                        {items[0]}
                                    </div>
                                    <div className='columna'>
                                        Tel.{items[1]}
                                    </div>
                                </div>
                            </li>
                    })}
            </ul>
        </div>
    
    </>
  )
}

export default Contacts