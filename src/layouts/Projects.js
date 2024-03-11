import React from 'react';
import '../styles/Projects.css';
import Carousel from 'react-bootstrap/Carousel';

export const Projects = () => { 
    return( 
      <div className='projectMainContainer'>
      <h2>Projects</h2>
      <section className='carousel_container'>
          <Carousel interval={1800} fade>
              <Carousel.Item>
                <div className="slide_container">
                 <img src="./images/order_online.png" alt="Food ordering app" />
                 <div>
                 <h3>Food Delivery web service</h3>
                 <p>Made with HTML, CSS and Vanilla JavaScript</p>
                  <a>See source Code</a>
                 </div>
                 <p className='project_year'>2021</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="slide_container">
                  <img src="./images/mood_tracker.png" alt="Mood tracker app" />
                  <div>
                    <h3>Feelu - personal mood tracker</h3>
                    <p>Made with HTML, CSS and Vanilla JavaScript</p>
                    <a>See source Code</a>
                 </div>
                 <p className='project_year'>2022</p>
              </div>
              </Carousel.Item>
              <Carousel.Item>
              <div className="slide_container">

                  <img src="./images/horrors.png" alt="Interactive Horro " />
                  <div>
                    <h3>Dread Maze Studio - Horror Novels</h3>
                    <p>
                      This one is my favorite project. 
                      I have utilized Unity Engine for the game and C#, and React Native for the interface. 
                      I plan to release it for both mobile platforms IOS and Android.<br></br><br></br>
                      The project is a commercial product and still in development mode, so I can't share it.
                      If you are a fellow developer interested in game development and want to contribute - please let me know! 
                    </p>
                    <a>See source Code</a>
                    </div>
                    <p className='project_year'>2023 - 2024</p>
              </div>
              </Carousel.Item>
          </Carousel>
      </section>
  </div>
  
      
    
    )

}