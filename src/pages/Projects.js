import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  { id: '1', title: 'Resume Builder', description: 'Click To View More' },
  { id: '2', title: 'Snake Game', description: 'Click To View More' },
  { id: '3', title: 'Chatting', description: 'Click To View More' },
  { id: '4', title: 'Tic Tac Toe Game', description: 'Click To View More' },
  { id: '5', title: 'Hotel Management System', description: 'Click To View More' },
  { id: '6', title: 'ATM Simulation System ', description: 'Click To View More' },
  { id: '7', title: ' Travel Management System ', description: 'Click To View More' },
  { id: '8', title: 'Electricity Billing System ', description: 'Click To View More' },
  { id: '9', title: 'Employee Management System', description: 'Click To View More' },
  { id: '10', title: 'Quiz Application', description: 'Click To View More' },
  { id: '11', title: 'University Management System', description: 'Click To View More' },
  { id: '12', title: 'Airline Management System', description: 'Click To View More' },
  { id: '13', title: 'Flappy Bird ', description: 'Click To View More' },
  { id: '14', title: 'Space-Invaders', description: 'Click To View More' },
  { id: '15', title: 'Stock Management System', description: 'Click To View More' },
  { id: '16', title: 'Farming Assistant System', description: 'Click To View More' },
  { id: '17', title: 'Stock Management System', description: 'Click To View More' },
  { id: '18', title: 'Chrome Dinosaur', description: 'Click To View More' },
  { id: '19', title: 'Memory Cards', description: 'Click To View More' },
  { id: '20', title: 'Supermarket Billing', description: 'Click To View More' },
  { id: '21', title: 'Tic Tac Toe', description: 'Click To View More' },
];

const Projects = () => {
  return (
    <div className="projects-page ">
      <h1 className='ms-2'>All Projects</h1>
      <hr />  
      <div className="projects-container container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
