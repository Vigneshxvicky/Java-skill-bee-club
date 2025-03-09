// import React from 'react';
// import ProjectCard from '../components/ProjectCard';
// import Footer from '../Footer';
// const projects = [
//   { id: '1', title: 'Resume Builder', description: 'Click To View More' },
//   { id: '2', title: 'Snake Game', description: 'Click To View More' },
//   { id: '3', title: 'Chatting', description: 'Click To View More' },
//   { id: '4', title: 'Tic Tac Toe Game', description: 'Click To View More' },
//   { id: '5', title: 'Hotel Management System', description: 'Click To View More' },
//   { id: '6', title: 'ATM Simulation System ', description: 'Click To View More' },
//   { id: '7', title: ' Travel Management System ', description: 'Click To View More' },
//   { id: '8', title: 'Electricity Billing System ', description: 'Click To View More' },
//   { id: '9', title: 'Employee Management System', description: 'Click To View More' },
//   { id: '10', title: 'Quiz Application', description: 'Click To View More' },
//   { id: '11', title: 'University Management System', description: 'Click To View More' },
//   { id: '12', title: 'Airline Management System', description: 'Click To View More' },
//   { id: '13', title: 'Flappy Bird ', description: 'Click To View More' },
//   { id: '14', title: 'Space-Invaders', description: 'Click To View More' },
//   { id: '15', title: 'Farming Assistant System', description: 'Click To View More' },
//   { id: '16', title: 'Stock Management System', description: 'Click To View More' },
//   { id: '17', title: 'Chrome Dinosaur', description: 'Click To View More' },
//   { id: '18', title: 'Memory Cards', description: 'Click To View More' },
//   { id: '19', title: 'Supermarket Billing', description: 'Click To View More' },
//   { id: '20', title: 'Tic Tac Toe', description: 'Click To View More' },
// ];

// const Projects = () => {
//   return (
//     <div className="projects-page ">
//       <h1 className='ms-2'>All Projects</h1>
//       <hr />  
//       <div className="projects-container container">
//         {projects.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default Projects;

import React from 'react';
import styled, { keyframes } from 'styled-components';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
// importing project data
const projects = [
  { id: '1', title: 'Resume Builder', description: 'Click To View More' },
  { id: '2', title: 'Snake Game', description: 'Click To View More' },
  { id: '3', title: 'Chatting', description: 'Click To View More' },
  { id: '4', title: 'Tic Tac Toe Game', description: 'Click To View More' },
  { id: '5', title: 'Hotel Management System', description: 'Click To View More' },
  { id: '6', title: 'ATM Simulation System ', description: 'Click To View More' },
  { id: '7', title: 'Travel Management System ', description: 'Click To View More' },
  { id: '8', title: 'Electricity Billing System ', description: 'Click To View More' },
  { id: '9', title: 'Employee Management System', description: 'Click To View More' },
  { id: '10', title: 'Quiz Application', description: 'Click To View More' },
  { id: '11', title: 'University Management System', description: 'Click To View More' },
  { id: '12', title: 'Airline Management System', description: 'Click To View More' },
  { id: '13', title: 'Flappy Bird ', description: 'Click To View More' },
  { id: '14', title: 'Space-Invaders', description: 'Click To View More' },
  { id: '15', title: 'Farming Assistant System', description: 'Click To View More' },
  { id: '16', title: 'Stock Management System', description: 'Click To View More' },
  { id: '17', title: 'Chrome Dinosaur', description: 'Click To View More' },
  { id: '18', title: 'Memory Cards', description: 'Click To View More' },
  { id: '19', title: 'Supermarket Billing', description: 'Click To View More' },
  { id: '20', title: 'Tic Tac Toe', description: 'Click To View More' },
];

// Define keyframes for card hover animation



const hoverAnimation = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }
  50% {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 0 15px rgba(243, 156, 18, 0.5);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(243,156,18,0.5) 70%);
  }
  100% {
    transform: scale(1.1) rotate(-2deg);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3), 0 0 30px rgba(142, 68, 173, 0.5);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(142,68,173,0.5) 70%);
  }
`;

// Define keyframes for card border glow animation
const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px #ff9a9e, 0 0 10px #ff9a9e, 0 0 20px #ff9a9e, 0 0 40px #ff9a9e;
  }
  50% {
    box-shadow: 0 0 10px #ff9a9e, 0 0 20px #ff9a9e, 0 0 40px #ff9a9e, 0 0 80px #ff9a9e;
  }
  100% {
    box-shadow: 0 0 5px #ff9a9e, 0 0 10px #ff9a9e, 0 0 20px #ff9a9e, 0 0 40px #ff9a9e;
  }
`;
const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color:rgb(255, 255, 255); /* Gradient color */
  margin-top: 20px;
  margin-bottom: 10px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProjectCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const ProjectCard = styled.div`
  width: 300px;
  height:300px;
  border: 3px solid transparent;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%); /* Gradient background */
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s, background 0.3s;
  &:hover {
    animation: ${hoverAnimation} 0.6s forwards, ${glowAnimation} 1.5s infinite alternate;
  }
`;

const ProjectTitle = styled.h3`
  text-align: center;
  padding: 30px;
  margin: 0;
  font-size: 20px; /* Increase font size */
  color:rgb(0, 0, 0); /* Change text color to white */
`;

const ProjectDescription = styled.p`
  text-align: center;
  padding: 15px;
  margin: 0;
  font-size: 18px; /* Increase font size */
  color:rgb(0, 0, 0); /* Change text color to white */
`;
const Button = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #004494;
  }
`;

const Projects = () => {
  return (
    <div className="projects-page">
      <Title>All Projects</Title>
      <hr />
      <ProjectCardContainer>
        
        {projects.map((project) => (
          <ProjectCard key={project.id} >
            <i class="fa-brands fa-java fa-3x me-auto"></i>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <Link to={`/projects/${project.id}`}>
              <Button >View Project</Button>
            </Link>
            
          </ProjectCard>
        ))}
      </ProjectCardContainer>
      <Footer />
    </div>
  );
};

export default Projects;



// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import Footer from '../Footer';

// // importing project data
// const projects = [
//   { id: '1', title: 'Resume Builder', description: 'Click To View More' },
//   { id: '2', title: 'Snake Game', description: 'Click To View More' },
//   { id: '3', title: 'Chatting', description: 'Click To View More' },
//   { id: '4', title: 'Tic Tac Toe Game', description: 'Click To View More' },
//   { id: '5', title: 'Hotel Management System', description: 'Click To View More' },
//   { id: '6', title: 'ATM Simulation System ', description: 'Click To View More' },
//   { id: '7', title: 'Travel Management System ', description: 'Click To View More' },
//   { id: '8', title: 'Electricity Billing System ', description: 'Click To View More' },
//   { id: '9', title: 'Employee Management System', description: 'Click To View More' },
//   { id: '10', title: 'Quiz Application', description: 'Click To View More' },
//   { id: '11', title: 'University Management System', description: 'Click To View More' },
//   { id: '12', title: 'Airline Management System', description: 'Click To View More' },
//   { id: '13', title: 'Flappy Bird ', description: 'Click To View More' },
//   { id: '14', title: 'Space-Invaders', description: 'Click To View More' },
//   { id: '15', title: 'Farming Assistant System', description: 'Click To View More' },
//   { id: '16', title: 'Stock Management System', description: 'Click To View More' },
//   { id: '17', title: 'Chrome Dinosaur', description: 'Click To View More' },
//   { id: '18', title: 'Memory Cards', description: 'Click To View More' },
//   { id: '19', title: 'Supermarket Billing', description: 'Click To View More' },
//   { id: '20', title: 'Tic Tac Toe', description: 'Click To View More' },
// ];

// // Define keyframes for card hover animation
// const hoverAnimation = keyframes`
//   0% {
//     transform: scale(1) rotate(0deg);
//     box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//     background-color: #fff;
//   }
//   50% {
//     transform: scale(1.05) rotate(1deg);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 255, 255, 0.3);
//     background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0, 255, 255, 0.1) 70%);
//   }
//   100% {
//     transform: scale(1.1) rotate(-1deg);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 128, 255, 0.5);
//     background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0, 128, 255, 0.1) 70%);
//   }
// `;

// // Define keyframes for card border glow animation
// const glowAnimation = keyframes`
//   0% {
//     box-shadow: 0 0 5px #ff9a9e, 0 0 10px #ff9a9e, 0 0 20px #ff9a9e, 0 0 40px #ff9a9e;
//   }
//   50% {
//     box-shadow: 0 0 10px #ff9a9e, 0 0 20px #ff9a9e, 0 0 40px #ff9a9e, 0 0 80px #ff9a9e;
//   }
//   100% {
//     box-shadow: 0 0 5px #ff9a9e, 0 0 10px #ff9a9e, 0 0 20px #ff9a9e, 0 0 40px #ff9a9e;
//   }
// `;

// // Define styling for the title
// const Title = styled.h1`
//   text-align: center;
//   font-size: 3rem;
//   color: #af4261; /* Gradient color */
//   margin-top: 20px;
//   margin-bottom: 10px;
//   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
// `;

// const ProjectCardContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
//   padding: 20px;
// `;

// const ProjectCard = styled.div`
//   width: 300px;
//   border: 3px solid transparent;
//   border-radius: 8px; /* Keep the initial border-radius */
//   overflow: hidden;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   background-color: #e3f2fd; /* Change background color */
//   transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s, background 0.3s;
//   &:hover {
//     animation: ${hoverAnimation} 0.6s forwards, ${glowAnimation} 1.5s infinite alternate;
//   }
// `;

// const ProjectTitle = styled.h3`
//   text-align: center;
//   padding: 15px;
//   margin: 0;
//   font-size: 18px; /* Keep the initial font size */
//   color: #1e88e5; /* Change text color */
// `;

// const ProjectDescription = styled.p`
//   text-align: center;
//   padding: 15px;
//   margin: 0;
//   font-size: 16px; /* Keep the initial font size */
//   color: #42a5f5; /* Change text color */
// `;

// const Projects = () => {
//   return (
//     <div className="projects-page">
//       <Title>All Projects</Title>
//       <hr />
//       <ProjectCardContainer>
//         {projects.map((project) => (
//           <ProjectCard key={project.id}>
//             <ProjectTitle>{project.title}</ProjectTitle>
//             <ProjectDescription>{project.description}</ProjectDescription>
//           </ProjectCard>
//         ))}
//       </ProjectCardContainer>
//       <Footer />
//     </div>
//   );
// };

// export default Projects;
