import React, { Component } from 'react';
import classes from './About.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import me1 from '../images/Nico/1.jpg';
import me2 from '../images/Nico/2.jpg';
import me3 from '../images/Nico/3.jpg';
import me4 from '../images/Nico/4.jpg';
import me5 from '../images/Nico/5.jpg';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <span className={classes.head}>ABOUT ME</span>
        <hr></hr>
        <Carousel
          dynamicHeight
          infiniteLoop={true}
          interval={6000}
          useKeyboardArrows={true}
          transitionTime={1700}
          emulateTouch
          showArrows={false}
          autoPlay
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <img className={classes.image} src={me1} alt='myImage' />
          </div>
          <div>
            <img className={classes.image} src={me2} alt='myImage' />
          </div>
          <div>
            <img className={classes.image} src={me3} alt='myImage' />
          </div>
          <div>
            <img className={classes.image} src={me4} alt='myImage' />
          </div>
          <div>
            <img className={classes.image} src={me5} alt='myImage' />
          </div>
        </Carousel>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            Hi! My name is <b>NICO BALUYUT</b>. a Software Engineer. I have a strong passion for{' '}
            <b>Frontend</b> & <b>Backend </b> development, focusing on backend expertise. I have
            good experience in web application development and have powerful portfolios. I thrive on
            the excitement of creating new things and constantly seek opportunities to do so.
          </p>
          <p className={classes.br}>
            I love exploring new technologies and being a practitioner, I like to stay on top of
            latest trends. I try to leave every line of code I write more readable, accessible, and
            modular. My problem-solving mindset and active GitHub profile showcase my commitment to
            innovative and collaborative coding.
          </p>
        </div>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default About;
