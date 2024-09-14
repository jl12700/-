import React, { useState } from 'react';
import './Projects.css';
import mhublogo from './mhublogo.png';
import metube from './metube.png';
import fakebook from './fakebook.jpg';

const projectsData = [
  {
    title: 'MHUB Reservation System',
    fullDescription:
      'MHUB Online Reservation System is our 2nd year software engineer project. It is a web-based platform that enables students and faculty to efficiently manage the reservation, borrowing, and return of equipment within MHUB.',
    imageUrl: mhublogo, 
  },
  {
    title: 'MeTube',
    fullDescription:
      'MeTube is a personalized video sharing platform that empowers users to create, share, and discover videos tailored to their interests and preferences. The platform integrates advanced recommendation algorithms to deliver a highly customized viewing experience.',
    imageUrl: metube, 
  },
  {
    title: 'FakeBook',
    fullDescription:
      'FakeBook is a social networking simulation platform designed to mimic the core functionalities of popular social media sites. It allows users to create profiles, connect with friends, and engage with content through likes, comments, and shares.',
    imageUrl: fakebook,
  },
];

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const handleReadMore = (project) => {
    setActiveProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setActiveProject(null);
  };

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-row">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>{project.shortDescription}</p>
            <button onClick={() => handleReadMore(project)}>Read More</button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>{activeProject.title}</h2>
            <p>{activeProject.fullDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
