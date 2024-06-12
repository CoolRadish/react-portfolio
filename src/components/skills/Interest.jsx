import React, { Component } from 'react';
import classes from './Interest.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      <span className={classes.head}>WHAT I DO?</span>
      <hr></hr>
      <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
      <div className={classes.Interest}>
        <div className={classes.web}>
          <h3>Frontend Development</h3>
          <p>
            Javascript/ Typescript, HTML/ CSS, ReactJs, Next.js, Prisma, tRPC, ZOD, Redux, Tailwind
            CSS, UI Libraries (React-Bootstrap, Mantine, MUI, Shadcn UI), Redux Toolkit, T3 Stack,
            JEST, Unit Testing.
          </p>
        </div>
        <div className={classes.app}>
          <h3>Backend Development</h3>
          <p>
            Javascript/ Typescript, NodeJs, Express, Nest.js, MongoDB, MySQL, PostgreSQL, Restful
            API, Twilio, Zapier, Shopify, Redo, ChatGPT, Intercom, Shipstation, CDN, Auth0,
            Passport.
          </p>
        </div>
        <div className={classes.other}>
          <h3>Expanded Expertise</h3>
          <p>
            AWS, Docker, GitHub, Frontend System Design, MERN Stack, SQL, NOSQL, Socket.io, jQuery,
            Open to Monorepo architecture, Open Source Contribution.
          </p>
        </div>
      </div>
    </div>
  );
}
