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
            <h1 id="HomeHeader">
              <span id = "title_lower_case">Hello, I am</span><br></br> 
                <span id ="title_capital_case">Vlada Haranina</span><br></br> 
                <span id = "title_description">A Professional Software And Web Developer</span
            ></h1>
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