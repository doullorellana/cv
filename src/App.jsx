// Importando los diferentes componentes hijos para unificar el CV
import Perfil from './components/laretal/Perfil';
import Skills from './components/laretal/Skills';
import Language from './components/laretal/Language';
import Resume from './components/principal/Resume';
import Experience from './components/principal/Experience';
import Education from './components/principal/Education';
import Contacts from './components/principal/Contacts';
import React from 'react';

import './App.css'

export default function App(props) {

  const perfil = props.perfil;          // Arreglo perfil heredado de su padre Data.jsx
  const skills = props.skills;          // Arreglo skills heredado de su padre Data.jsx
  const language = props.language;      // Arreglo language heredado de su padre Data.jsx
  const experiences = props.experiences;// Arreglo experiences heredado de su padre Data.jsx
  const educations = props.educations;  // Arreglo educations heredado de su padre Data.jsx
  const references = props.references;  // Arreglo references heredado de su padre Data.jsx

  //console.log(perfil)
  //console.log(skills)
  //console.log(language)
  
  /* Retornando informacion del usuario por medio de la inyeccion HTML en los componentes hijos
     desde los valores que contiene los arreglos que hereda de Data.jsx */
  
  return (
    <>
      <div className='contenedor'>

        <div className='lateralIzq'>
          
          <div className='lateralIzq'>
            <div className='tituloText'>
              <Perfil perfil={perfil}/>
              <Skills skills={skills}/>
              <Language language={language}/>
            </div>
          </div>
        </div>

        <div className='principal'>
          
          <Resume perfil={perfil}/>
          <Experience experiences={experiences}/>
          <Education educations={educations}/>
          <Contacts references={references}/>
        </div>
        
      </div>
    </>
    )
}