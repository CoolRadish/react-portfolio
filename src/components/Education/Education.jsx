import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <span className={classes.head}>MY JOURNEY</span>
        <hr></hr>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Experience <span>April (2020)-Present</span>
                      </h2>
                      <p>
                        I worked as <b>Senior Full-Stack Engineer</b> at{' '}
                        <a target='_blank' href='https://www.msmiami.com/'>
                          <b>MS MIAMI International Software</b>
                        </a>{' '}
                        <i>(September 2023 - April 2024)</i> Remote
                      </p>
                      <p>
                        I worked as <b>Full-Stack Developer</b> at{' '}
                        <a target='_blank' href='https://unidatec.com/'>
                          <b>Unidatec</b>
                        </a>{' '}
                        <i>(May 2021 - August 2023)</i> Remote
                      </p>
                      <p>
                        I worked as <b>Junior Engineer</b> at{' '}
                        <a target='_blank' href='https://itbs.com.ph/#/'>
                          <b>ITBS</b>
                        </a>{' '}
                        <i>(April 2020 - April 2021)</i>
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Graduation from De La Salle University <span>2016-2020</span>
                      </h2>
                      <p>
                        I completed my undergraduation in CSE (Computer Science and Engineering)
                        from <a href='https://www.dlsu.edu.ph/'>DLSU</a> with overall 84.71%.
                      </p>
                    </div>
                  </article>
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Higher Education <span>2013-2015</span>
                      </h2>
                      <p>
                        I have completed my higher education from PHS with major subjects as
                        Physics,Chemistry & Maths with 85%.{' '}
                      </p>
                    </div>
                  </article>
                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Internship</h2>
                      <p>Completed one month Internship in React Js with Internity Foundation</p>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;
