import React,  { useState } from 'react';
import '../styles/Header.css'

export const Header = () => {

    const [isScrolling, setIsScrolling] = useState(false);

    const handleScrollToSection = (sectionId) => {
        setIsScrolling(true);
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
  };
    return(
            <header>
                <section>
                    <div id ="logo_container">
                        <img src='./images/logo.png'></img>
                    <p>&lt;Dev/&gt; Ulada Haranina</p>

                    </div>
                    <ul>
                        <li onClick={() => handleScrollToSection('home')}><a>Home</a></li>
                        <li onClick={() => handleScrollToSection('skills')}><a>About</a></li>
                        <li onClick={() => handleScrollToSection('projects')}><a>Projects</a></li>
                        <li onClick={() => handleScrollToSection('contacts')}><a>Contact Me</a></li>
                    </ul>
                </section>
               
            </header>
    )
}