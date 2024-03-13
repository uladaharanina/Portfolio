import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles/Home.css'
import { Header } from './Header';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contacts } from './Contacts';
import { Footer } from './Footer';
import { SocialMedia, Social_bar } from './SocialMedia';


export const Home = () => {

// Animation for connecting dots
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dots = 30;
const dotCord = [];

// Generate random coordinates and velocities for dots
for (let i = 0; i < dots; i++) {
    dotCord.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2
    });
}


// Drawing function
const draw = () => {
  // Clear the canvas
  c.clearRect(0, 0, canvas.width, canvas.height);

  // Draw lines between dots if distance is less than a threshold
  const threshold = 500; // Adjust this value to change the maximum distance for drawing lines
  for (let i = 0; i < dotCord.length; i++) {
      let dot1 = dotCord[i];
      for (let j = i + 1; j < dotCord.length; j++) {
          let dot2 = dotCord[j];
          const dist = distance(dot1, dot2);
          if (dist < threshold) {
              c.beginPath();
              c.moveTo(dot1.x, dot1.y);
              c.lineTo(dot2.x, dot2.y);
              c.strokeStyle = "#303030";
              c.stroke();
              c.closePath();
          }
      }
  }

  // Draw dots
  for (let i = 0; i < dotCord.length; i++) {
      let dot = dotCord[i];
      c.beginPath();
      c.arc(dot.x, dot.y, 5, 0, Math.PI * 2, false);
      c.fillStyle = "#303030"; // Set fill color
      c.fill(); // Fill the circle
      c.closePath();
  }
};

const distance = (p1, p2) => {
    let dx = p2.x - p1.x;
    dx *= dx;
    let dy = p2.y - p1.y;
    dy *= dy;
    return Math.sqrt(dx + dy);
}

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

const animate = () => {
    requestAnimationFrame(animate);
    update();
    draw();
}

animate();



    return(
        <div>
          <main className='HomeSectionContainer' id="home">
          <section className='headerContainer'>
            <Header></Header>
          </section>
          <canvas></canvas>
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