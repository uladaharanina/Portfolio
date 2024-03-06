import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/Skills.css'

export const Skills = () => {
    return(
        <div>
           <main className='SkillsSectionContainer'>     
           <h1>Skills</h1>
           <section className='SkillsMainContainer'>
                <div className='SkillsSecondaryContainers'>
                    <h4>Programming & Databases</h4>
                    <div className='toolsIconsContainer'>
                        <div className='singleIcon'>
                            <img className='iconImage' alt='html' src='./icons/html.png'></img>
                            <p  className='iconDescription'>HTML</p>
                        </div>
                        <div className='singleIcon'>
                            <img className='iconImage' alt='css' src='./icons/css.png'></img>
                            <p  className='iconDescription'>CSS</p>
                        </div>
                        <div className='singleIcon'>
                            <img className='iconImage'  alt='css' src='./icons/js.png'></img>
                            <p  className='iconDescription'>JavaScript</p>
                        </div>
                    </div>
                    <div className='toolsIconsContainer'>
                        <div className='singleIcon'>
                            <img className='iconImage' alt='java' src='./icons/java.png'></img>
                            <p  className='iconDescription'>Java</p>
                        </div>
                        <div className='singleIcon'>
                            <img className='iconImage' alt='python' src='./icons/python.png'></img>
                            <p  className='iconDescription'>Python</p>
                        </div>
                        <div className='singleIcon'>
                            <img className='iconImage'  alt='node' src='./icons/node.png'></img>
                            <p  className='iconDescription'>NodeJS</p>
                        </div>
                    </div>
                </div>
                <div  className='SkillsSecondaryContainers'>
                    <h4>Frameworks & Tools</h4>
                    <div className='toolsIconsContainer'>
                        <div className='singleIcon'>
                            <img className='iconImage' alt='React' src='./icons/react.png'></img>
                            <p  className='iconDescription'>ReactJS</p>
                        </div>
                        <div className='singleIcon'>
                            <img className='iconImage' alt='css' src='./icons/angular.png'></img>
                            <p  className='iconDescription'>Angular</p>
                        </div>
                    </div>
                    <div className='toolsIconsContainer'>
                        <div className='singleIcon'>
                            <img className='iconImage' alt='Spring Boot' src='./icons/springboot.png'></img>
                            <p  className='iconDescription'>Spring Boot</p>
                        </div>
                        <div className='singleIcon'>
                            <img className='iconImage' alt='Git' src='./icons/git.png'></img>
                            <p  className='iconDescription'>Git</p>
                        </div>
                    </div>
                </div>
           </section>
        </main>
        </div>
    
    )
}