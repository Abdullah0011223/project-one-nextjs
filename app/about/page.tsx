import React from 'react';
import styles from './about.module.css';


const About: React.FC = () => {
  return (
    <div className={styles['about-container']}>
    <h1 className={styles['about-title']}>About Me</h1>
    <p className={styles['about-text']}>
      I am a self-taught developer with a passion for creating beautiful and functional websites...
    </p>
  
    <section className={styles.skills}>
      <h2>Skills</h2>
      <ul className={styles['skills-list']}>
        <li>HTML/CSS</li>
        <li>JavaScript</li>
        <li>React & TypeScript</li>
        <li>Node.js & Express</li>
        <li>MongoDB</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  </div>
  

  );
};

export default About;
