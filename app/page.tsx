import React from 'react';
import styles from './page.module.css';  // Import CSS module

const Home: React.FC = () => {
  return (
    <div className={styles['home-container']}>
      <div className={styles['hero-section']}>
        <h1 className={styles['hero-title']}>Welcome to My Portfolio</h1>
        <p className={styles['hero-subtitle']}>Hi, I&apos;m Abdullah. A passionate web developer.</p> {/* Escaped apostrophe */}
        <button className={styles['cta-button']}>Get In Touch</button>
      </div>

      <section className={styles['about-summary']}>
        <h2>About Me</h2>
        <p>
          I am a Frontend Stack Developer with a passion for creating clean, efficient, and user-friendly websites. I specialize in
          React, TypeScript, Node.js, and more.
        </p>
      </section>
    </div>
  );
};

export default Home;

