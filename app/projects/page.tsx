import React from 'react';


const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      name: 'Project 1',
      imageUrl: '/images/project1.jpg', // Replace with actual image URL
      projectUrl: 'https://example1.com', // URL of the project
    },
    {
      id: 2,
      name: 'Project 2',
      imageUrl: '/images/project2.jpg', // Replace with actual image URL
      projectUrl: 'https://example2.com',
    },
    {
      id: 3,
      name: 'Project 3',
      imageUrl: '/images/project3.jpg', // Replace with actual image URL
      projectUrl: 'https://example3.com',
    },
    // Add more projects as needed
  ];

  return (
    <section className="portfolio-container">
      <h2 className="portfolio-title">My Projects</h2>
      
      <div className="portfolio-gallery">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={project.imageUrl}
                alt={project.name}
                className="portfolio-image"
              />
              <div className="portfolio-info">
                <h3>{project.name}</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
