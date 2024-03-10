import React from 'react';
import '../styles/Projects.css';
import Carousel from 'react-bootstrap/Carousel';

export const Projects = () => { 
    return( 
        <div className='ProjectMainContainer'>
            <section className='carousel_container'>
            <Carousel>
      <section className='carousel_items'>
      <Carousel.Item>

        <img
          className="d-block w-100"
          src="./images/order_online.png"
          alt="First slide"
        />
      </Carousel.Item>
      </section>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/mood_tracker.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/horrors.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </section>
        </div>
    
    )

}