import React from 'react';
import '../styles/Projects.css'

export const Projects = () => { 
    return( 
        <div className='ProjectMainContainer'>
            <main className='ProjectSectionContainer'>     
                <h1>Projects</h1>
                <section className='ProjectContainer'>
                    <div>
                        <img src=''></img>
                        <p>Horror Interactive</p>
                        <p>2023 - present</p>
                    </div>
                    <div>
                        <img src=''></img>
                        <p>Stock Price Analyser</p>
                        <p>2023</p>
                    </div>
                    <div>
                        <img src=''></img>
                        <p>Scheduling App</p>
                        <p>2023</p>
                    </div>
                    <div>
                        <img src='' alt="Mood Tracker"></img>
                        <p>Mood Tracker</p>
                        <p>2023</p>
                    </div>
                </section>
            </main>
        </div>

    
    )

}