"use client"

import React, { useState } from 'react';
import styles from './Contact.module.css'; // Importing the CSS module

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className={styles['contact-container']}>
      <h1 className={styles['contact-title']}>Contact Me</h1>
      <form onSubmit={handleSubmit} className={styles['contact-form']}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles['input-field']}
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles['input-field']}
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className={styles['input-field']}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
