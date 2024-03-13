import React, { useEffect, useRef } from 'react';
import '../styles/Home.css'
import { Header } from './Header';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contacts } from './Contacts';
import { Footer } from './Footer';
import { SocialMedia } from './SocialMedia';


export const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      let dots = 40;
      const dotCord = [];

      // Generate random coordinates and velocities for dots
      for (let i = 0; i < dots; i++) {
          dotCord.push({
              x: Math.random() * canvas.width,
              y: Math.random() * canvas.height,
              dx: (Math.random() - 0.5) * 3,
              dy: (Math.random() - 0.5) * 5
          });
      }

      // Function to calculate distance between two points
      const distance = (p1, p2) => {
          let dx = p2.x - p1.x;
          dx *= dx;
          let dy = p2.y - p1.y;
          dy *= dy;
          return Math.sqrt(dx + dy);
      }

      // Function to draw lines between dots
      const drawLines = () => {
          // Clear the canvas
          context.clearRect(0, 0, canvas.width, canvas.height);

          // Draw lines between dots
          for (let i = 0; i < dotCord.length; i++) {
              let dot1 = dotCord[i];
              for (let j = i + 1; j < dotCord.length; j++) {
                  let dot2 = dotCord[j];
                  const dist = distance(dot1, dot2);
                  if (dist < 500) { // Adjust this value to change the maximum distance for drawing lines
                      context.beginPath();
                      context.moveTo(dot1.x, dot1.y);
                      context.lineTo(dot2.x, dot2.y);
                      context.strokeStyle = "#303030";
                      context.stroke();
                      context.closePath();
                  }
              }
          }
      };

      // Function to update dot positions
      const update = () => {
          for (let i = 0; i < dotCord.length; i++) {
              let s = dotCord[i];
              s.x += s.dx;
              s.y += s.dy;

              // Reverse velocity when dot hits canvas boundaries
              if (s.x < 0 || s.x > canvas.width) {
                  s.dx *= -1;
              }
              if (s.y < 0 || s.y > canvas.height) {
                  s.dy *= -1;
              }
          }
      }

      // Animation loop
      const animate = () => {
          requestAnimationFrame(animate);

          // Draw lines
          drawLines();

          // Update dot positions
          update();
      };

      // Start animation
      animate();

  }, []); // Run effect only once

  
  


    return(
        <div>
          <main className='HomeSectionContainer' id="home">
          <section className='headerContainer'>
            <Header></Header>
          </section>
          <canvas ref={canvasRef} width={window.innerWidth} height={window.innerHeight}></canvas>
          <section className='introductionBlock'>
            <h1 id="HomeHeader">
              <span id = "title_lower_case">Hello, I am</span><br></br> 
                <span id ="title_capital_case">Vlada Haranina</span><br></br> 
                <span id = "title_description">A Professional Software And Web Developer</span
            ></h1>
          </section>
          <SocialMedia></SocialMedia>
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
            <Footer></Footer>
        </div>
    
    )
}