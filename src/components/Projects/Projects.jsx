import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import bookheap from '../images/bookheap.png';
import chess from '../images/chess.png';
import shopping from '../images/shopping-app.png';
import travel from '../images/travel-log.png';
import definition from '../images/definition.png';
import memes from '../images/memes.png';
import superhero from '../images/superhero.png';
import monorepo from '../images/monorepo.png';
import askBunny from '../images/AskBunny.png';
import courseApp from '../images/courseApp.png';
import chatGPT from '../images/chatGPT.png';
import challenges from '../images/frontend-challenges.png';
import github from '../images/github.png';
import frontenddev from '../images/frontenddev.jpg';
import jumpstart from '../images/jumpstart.png';

// Web projects
const webItem = [
  {
    link: 'https://dev.askbunny.ai/',
    title: 'AskBunny - Dream Work',
    techStack: 'Tech Stack: Next JS, Tailwind, Typescript, Prisma, AWS S3',
    desc: 'AskBunny is an open source profile link bio page builder',
    image: askBunny,
    color: '#0FFFFF'
  },
  {
    link: 'https://react-machine-coding.netlify/',
    title: 'Frontend challenges',
    techStack: 'Useful repo for most common frontend challenges',
    desc: 'Technology used: React Js, Mantine UI, Context API',
    image: frontenddev,
    color: '#E5E483'
  },
  {
    link: 'https://www.saasjumpstart.live/',
    title: 'Sass Boilerplate',
    techStack:
      'Technology used: Typescript, Nextjs, Prisma, Tailwind CSS, AWS S3, React Drag and Drop, Zod',
    desc: 'Next.js boilerplate setup for the repetitive work. It comes with authentication with email verification, stripe payment integration, customizable components, email preview, and much more.',
    image: jumpstart,
    color: '#D2E0FB'
  },
  {
    link: 'https://www.youtube.com/watch?v=Dlxz9RnltMA&ab',
    title: 'E-Commerce app',
    techStack: 'Tech Stack: Monorepo, Typescript, MERN',
    desc: 'It is a e-commerce app built in a MERN stack using Monorepo. This is 100% typescript.',
    image: monorepo,
    color: '#FEA1A1'
  },
  {
    link: 'https://courses-portal.netlify.app/',
    title: 'Course Selling App',
    techStack: 'Tech Stack: React JS, Tailwind CSS, Node JS, MongoDB, Razorpay for payments',
    desc: 'Separate User and Admin panels, User can purchase courses',
    image: courseApp,
    color: '#C1A4AA'
  },
  {
    link: 'https://chit-chat-gpt-app.vercel.app/',
    title: 'ChatGPT clone',
    techStack:
      'Tech Stack: Next.js 13, Tailwind CSS, Prisma, ZOD for validation, Recoil for state managements, TypeScript, OpenAI',
    desc: 'Chat GPT clone with signup and signin, previous chat save functionality',
    image: chatGPT,
    color: '#FFA6C9'
  },
  {
    link: 'https://chess-web-online.netlify.app/',
    title: 'Realtime Online Chess',
    techStack: 'Tech Stack- ReactJs, NodeJS, Express, Socket.io.',
    desc: 'Play real time chess with your friends online by sharing a link.',
    image: chess,
    color: '#d5ebda'
  },
  {
    link: 'https://bookheap-app.netlify.app/',
    title: 'Online Book Store',
    techStack: 'Tech Stack: MERN Stack',
    desc: 'It is a book selling web app built in a MERN stack . You can sell books by uploading images and can also see what others are selling.',
    image: bookheap,
    color: '#f3e4f1'
  },
  {
    link: 'https://travel-log-frontend-two.vercel.app/',
    title: 'Travel Log',
    techStack: 'Tech Stack- MERN Stack, Mapbox',
    desc: 'A full stack application to store / list places you have visited. You can log every visit on map.',
    image: travel,
    color: '#EEA47F'
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <span className={classes.head}>MY WORK</span>
      <hr></hr>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
    </div>
  );
}
