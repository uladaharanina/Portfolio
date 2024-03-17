import '../styles/Home.css'
import { Header } from './Header';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Contacts } from './Contacts';
import { Footer } from './Footer';
import { SocialMedia } from './SocialMedia';
import { Canvas } from './Canvas';

export const Home = () => {
 
  
  // Run effect only once
    return(
        <div>
          <main className='HomeSectionContainer' id="home">
          <section className='headerContainer'>
            <Header></Header>
          </section>
          <Canvas></Canvas>
          <section className='introductionBlock'>
            <h1 id="HomeHeader">
              <span id = "title_lower_case">Hello, I am</span><br></br> 
                <span id ="title_capital_case">Ulada Haranina</span><br></br> 
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
            <Canvas></Canvas>

            <section id="contacts">
              <Contacts></Contacts>
            </section>
            <Footer></Footer>
        </div>
    
    )
}