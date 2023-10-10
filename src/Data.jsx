import React from "react";
import App from "./App"; // importando el componente hijo App

/* Padre: Main.jsx
   Pasa por Data.jsx para capturar los arreglos (DATA INFORMATION) y entregarlos a App.jsx
   Luego App.jsx lo traslada a sus respectivos componentes hijos
   */
function Data() {
  // Arreglo conteniendo informacion del usuario
  const perfil = {
    nombre: "Doull Stanley",
    apellido: "Orellana David",
    direccion: "Colonia Alemán, Tegucigalpa MDC, Honduras",
    email: "doullorellana@gmail.com",
    telefono: "(+504) 3226-3256",
    telefonowa: "+50432263256",
    fechaNacimiento: "05-Ene-1981",
    perfilActual: "Business Intelligence Analyst",
    acercade:
      "Mi visión como profesional es contribuir y aprender a cada instante, de esa forma mejorar lo que ya existe. Una de las metas más grandes que tengo en la vida es poder plasmar y brindar mis conocimientos y mis habilidades en grandes proyectos empresariales. Estoy a sus órdenes",
  };

  // Arreglo conteniendo idiomas del usuario
  const language = ["Español Nativo", "Inglés Técnico"];

  // Arreglo conteniendo habilidades del usuario
  const skills = [
    "Analista BI",
    "Excel Avanzado",
    "Help Desk Support",
    "Desarrollador Web Full Stack jr",
  ];

  // Arreglo conteniendo experiencias profesionales del usuario
  const experiences = [
    [
      "May 2021 - Actual",
      "CIT Business Intelligence Analyst / Distribuidora EDT Honduras",
    ],
    [
      "Oct 2019 – May 2020",
      "Analista de Proyectos y Desarrollo / D2i - Solutions",
    ],
    [
      "2018 – Sep 2019",
      "Coordinador Regional IT Centroamérica Norte / APPLUS Norcontrol ",
    ],
    [
      "2010 – Ago 2017",
      "Soporte Técnico Honduras / INGRUP, EDT, Alimentos Maravilla",
    ],
  ];

  // Arreglo conteniendo educacion del usuario
  const educations = [
    ["2023", "Cursando: Desarrollador Web Full Stack jr | FUNVAL"],
    ["2016", "Diseño y Programación Micro controladores Arduino y PIC | INFOP"],
    [
      "2015 – 2016",
      "Certificación Desarrollador Móvil Android con JAVA | Next University",
    ],
    [
      "2004",
      "Profesional Técnico en Operación, Programación y Mantenimiento de Computadoras y Redes | FUNDET-FUNVAL",
    ],
  ];

  // Arreglo conteniendo referencias del usuario
  const references = [
    ["Edwin Mendoza", "(+504)9452-0692"],
    ["Eduardo Gonzales", "(+504)3153-8533"],
    ["Víctor Reyes", "(+504)3293-6132, 2771-9704"],
    ["Bernabé Rosales", "(+504)3336-0893"],
  ];

  return (
    <>
      <App
        perfil={perfil}
        language={language}
        skills={skills}
        experiences={experiences}
        educations={educations}
        references={references}
      />
    </>
  );
}

export default Data;
