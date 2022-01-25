import React from 'react'
import "./About.css";
import aboutImg from "../../media/yo1.jpg"

const About = () => {
    return (
        <div class = "about-container">
            <div class = "about-desc">
                <h3>Déjame contarte algo sobre mi:</h3>
                <p> Soy estudiante de la carrera de Ingeniería en Sistema de Información (4to año),mi objetivo es la formación y crecimiento tanto personal como profesional.
                    Soy una persona que se capacita de manera permanente, para poder crecer enla profesión.
                    Tengo conocimientos y formación en lenguajes de desarrollo web y enmetodologías agil SCRUM.
                    Actualmente me estoy desarrollando y especializando en el desarrollo Front-End
                    con React.</p>
            </div>
            <div class = "about-img">
                <img src={aboutImg} alt='about'></img>
            </div>
        </div>
    )
}

export default About
