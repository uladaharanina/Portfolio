import React , {useState} from 'react';
import '../styles/Skills.css'

export const Skills = () => {

  const[hoveredSkillIndex, setIndex] = useState(-1);
  const skills = ['html', 'css', 'javascript', 'Git', 'java', 'python', 'node', 'Springboot', 'React', 'angular', 'rest', 'saas', 'postgresql', 'mongodb','wordpress'];

  const displaytext = (key) => {

      setIndex(key);
  }


  const displayImage = () => {

      setTimeout(() => { setIndex(-1);
      }, 1600)
  }

    return(
        <main id='About'>
        
        <div id="skill_set_container">
            <img src="./images/portrait.png" id="portrait_img" alt="portrait"></img>
            <h3>Here is my skill set:</h3>
        <section className='toolsIconsContainer'>
          {skills.map((skill, index) => (
              <div key={index} onMouseLeave={() => displayImage()} onMouseOver={() => displaytext(index)} >
                <span className={hoveredSkillIndex === index ? "skillText": "hideSkillText"}>{skill.toLocaleUpperCase()}</span>
                <img className={hoveredSkillIndex !== index ? "iconImage": "noImage"} alt={skill} src={`./icons/${skill.toLowerCase()}.png`} ></img>
              </div>

          ))}
         
        </section>
       
        </div>
  

        <section id="storyline">
          <h2>The Storyline</h2>
          <div className='storyLine_paragraph_data' id="storyLine_paragraph_data_first_block">
<p>I started my journey as a graphic designer in 2019. I worked at a small publishing house and got acquainted with web design.
</p>
          </div>
          <div className='storyLine_paragraph_data'>
            <p>
After moving to the US, I found myself in love with software development. In 2020, I started to utilize tools such as Node.js, MongoDB, and React.js. Back then was the time when I realized I wanted to dive into the field and went to pursue further education. My focus moved to full-stack development.</p>
          </div>
          <div className='storyLine_paragraph_data'>
            <p>I graduated with a Bachelor of Science in Computer Science in June 2023. I have multiple complex projects, including the creation of my video game for mobile platforms. Currently, I work on a start-up as a software developer, and additionally, I mentor students in languages such as Python, Java, and JavaScript.</p>
          </div>
          <a href='/resume.pdf' download id="resume_icon"> Download Resume</a>
        </section>
    </main>
    )
}