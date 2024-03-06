import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/Home.css'
import { Header } from './Header';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contacts } from './Contacts';

export const Home = () => {
    return(
        <div>
          <main className='HomeSectionContainer' id="home">
          <section className='headerContainer'>
            <Header></Header>
          </section>
          <section className='introductionBlock'>
            <h1 id="HomeHeader">Hello<br></br> 
                I’m <span>Ulada,</span><br></br> 
                Software Engineer</h1>
          </section>
          <section className='ResumeBlock'>
           <a href="./resume.pdf" download="resume.pdf" id='resumeBtn'>Load Resume</a>
          </section>
        </main>
            <section className = "skillsSection" id="skills">
                <Skills></Skills>
            </section>
            <section id="projects">
              <Projects></Projects>
            </section>
            <section id="contacts">
              <Contacts></Contacts>
            </section>
        </div>
    
    )
}