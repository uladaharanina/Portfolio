import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/Skills.css'

export const Skills = () => {
    return(
        <main id='About'>
        
        <div id="skill_set_container">
            <img src="./images/portrait.png"></img>
            <h3>Here is my skill set:</h3>
        <section className='toolsIconsContainer'>
          <img className='iconImage' alt='html' src='./icons/html.png'></img>
          <img className='iconImage' alt='css' src='./icons/css.png'></img>
          <img className='iconImage' alt='javascript' src='./icons/js.png'></img>
          <img className='iconImage' alt='Git' src='./icons/wordpress_.png'></img>
          <img className='iconImage' alt='java' src='./icons/java.png'></img>
          <img className='iconImage' alt='python' src='./icons/python.png'></img>
          <img className='iconImage' alt='node' src='./icons/node.png'></img>
          <img className='iconImage' alt='Spring Boot' src='./icons/springboot.png'></img>
          <img className='iconImage' alt='React' src='./icons/react.png'></img>
          <img className='iconImage' alt='css' src='./icons/angular.png'></img>
          <img className='iconImage' alt='React' src='./icons/rest.png'></img>
          <img className='iconImage' alt='css' src='./icons/saas.png'></img>
          <img className='iconImage' alt='node' src='./icons/postgresql_.png'></img>
          <img className='iconImage' alt='Spring Boot' src='./icons/mongodb_.png'></img>
        </section>
        </div>
  

        <section id="storyline">
          <h2>The Storyline</h2>
          <div className='storyLine_paragraph_data' id="storyLine_paragraph_data_first_block">
            <p>Started my Journey as a Graphic Designer in 2019. I worked at small publishing house and just got familiar with web design.</p>
          </div>
          <div className='storyLine_paragraph_data'>
            <p>After moving to the US I found myself in love with software development. In 2020 started to utilize tools such as Node.js, MongoDB, and React.js. This was the time when I realized I wanted to dive into the field and went to pursue further education. My focus moved to full-stack development. </p>
          </div>
          <div className='storyLine_paragraph_data'>
            <p> I graduated with a Bachelor of Science in Computer Science in June 2023. I have multiple complex projects including creating my video game for mobile platforms. Currently, I work on a start-up as a software developer and additionally, I mentor students in languages such as Python, Java, and JavaScript. </p>
          </div>
        </section>
    </main>
    )
}