import React, { useState } from 'react';
import '../styles/Header.css'

export const Header = () => {


    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
  };

    return(
            <header>
                <section>
                    <div id ="logo_container">
                        <img src='./images/logo.png' alt="logo"></img>
                    <p>&lt;Dev/&gt; Vlada Haranina</p>

                    </div>
                    <ul>
                        <li onClick={() => handleScrollToSection('home')} ><a href="#home">Home</a></li>
                        <li onClick={() => handleScrollToSection('skills')}><a href="#about">About</a></li>
                        <li onClick={() => handleScrollToSection('projects')}><a href="#project">Projects</a></li>
                        <li onClick={() => handleScrollToSection('contacts')}><a href="#contact">Contact Me</a></li>
                    </ul>
                </section>
               
            </header>
    )
}