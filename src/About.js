import React from 'react';
import './about.css'; 
import logo from './logo.svg';
const AboutMe = () => {
    return (
      <div className="about-me">
        <div className="text-content">
          <h1>About Me</h1>
          <p>Hello! I am John Lloyd Veneracion, a 3rd year college student studying at De La Salle Lipa. I am taking BS Computer Science as my course.</p>
          <p>I enjoy coding and am always excited to learn new things and improve my skills.</p>
          <p>Feel free to explore my website and learn more about my work and projects. If you have any questions or just want to connect, don't hesitate to reach out!</p>
        </div>
        <img className="App-logo" src={logo} alt="Logo" />
      </div>
    );
  };
  
  export default AboutMe;