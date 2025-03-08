// import React from 'react';
// import styled from 'styled-components';

// //importing images

// import team1 from './assets/team1.jpg';
// import team2 from './assets/team2.jpg';
// import team3 from './assets/team3.jpg';
// import team4 from './assets/team4.jpg';
// import team5 from './assets/team5.jpg';
// import team6 from './assets/team6_v.jpg';
// import team7 from './assets/team7.jpg';
// import team8 from './assets/team8.jpg';
// import team9 from './assets/team9.jpg';
// import team10 from './assets/team10.jpg';
// import team11 from './assets/team11.jpg';
// import team12 from './assets/team12.jpg';
// import team13 from './assets/team13.jpg';
// import team14 from './assets/team14.jpg';
// import team15 from './assets/team15.jpg';
// import team16 from './assets/team16.jpg';
// import team17 from './assets/team17.jpg';
// import team18 from './assets/team18.jpg';
// import team19 from './assets/team19.jpg';
// import team20 from './assets/team20.jpg';

// // footer
// import Footer from '../Footer';

// const TeamCardContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 20px;
//   padding: 20px;
// `;

// const TeamCard = styled.div`
//   width: 300px;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   background-color: #f9f9f9; /* Add background color */
// `;

// const TeamImage = styled.img`
//   width: 100%;
//   height: 150px;
//   object-fit: cover;
// `;

// const TeamName = styled.h3`
//   text-align: center;
//   padding: 10px;
//   margin: 0;
//   font-size: 16px;
// `;

// const teamsData = [
//   {
//     name: 'Team X',
//     imageUrl: team1,
//   },
//   {
//     name: 'Team Beta',
//     imageUrl: team2,
//   },
//   {
//     name: 'Team Gamma',
//     imageUrl: team3,
//   },
//   {
//     name:'team4',
//     imageUrl: team4,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team5,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team6,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team7,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team8,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team9,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team10,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team11,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team12,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team13,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team14,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team15,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team16,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team17
//     ,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team18,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team19,
//   },
//   {
//     name: 'Team Delta',
//     imageUrl: team20,
//   },
  
// ];

// const Teams = () => {
//   return (
//     <div>

    
//     <TeamCardContainer>
//       {teamsData.map((team, index) => (
//         <TeamCard key={index}>
//           <TeamImage src={team.imageUrl} alt={team.name} />
//           <TeamName>{team.name}</TeamName>
//         </TeamCard>
//       ))}
//     </TeamCardContainer>
//     <Footer/>
//     </div>
//   );
// };

// export default Teams;

import React from 'react';
import styled, { keyframes } from 'styled-components';

// importing images
import team1 from './assets/team1.jpg';
import team2 from './assets/team2.jpg';
import team3 from './assets/team3.jpg';
import team4 from './assets/team4.jpg';
import team5 from './assets/team5.jpg';
// import team6 from './assets/team6_v.jpg';//to be added in after the data has been fetched
import team7 from './assets/team7.jpg';
import team8 from './assets/team8.jpg';
import team9 from './assets/team9.jpg';
import team10 from './assets/team10.jpg';
import team11 from './assets/team11.jpg';
import team12 from './assets/team12.jpg';
import team13 from './assets/team13.jpg';
import team14 from './assets/team14.jpg';
import team15 from './assets/team15.jpg';
import team16 from './assets/team16.jpg';
import team17 from './assets/team17.jpg';
// import team18 from './assets/team18.jpg';//to be added in after the data has been fetched
import team19 from './assets/team19.jpg';
import team20 from './assets/team20.jpg';

// footer
import Footer from '../Footer';

// Define keyframes for card hover animation
const hoverAnimation = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-color: transparent;
    background-color: white;
  }
  50% {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 0 15px rgba(243, 156, 18, 0.5);
    border-color: #f39c12;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(243,156,18,0.5) 70%);
  }
  100% {
    transform: scale(1.1) rotate(-2deg);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.3), 0 0 30px rgba(142, 68, 173, 0.5);
    border-color: #8e44ad;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(142,68,173,0.5) 70%);
  }
`;

const TeamCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

const TeamCard = styled.div`
  width: 300px;
  border: 3px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff; /* Change background color to white */
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s, background 0.3s;
  &:hover {
    animation: ${hoverAnimation} 0.6s forwards;
  }
`;

const TeamImage = styled.img`
  width: 100%;
  height: 200px; /* Increase height for better visual */
  object-fit: cover;
`;

const TeamName = styled.h3`
  text-align: center;
  padding: 15px; /* Increase padding */
  margin: 0;
  font-size: 18px; /* Increase font size */
  color: #333; /* Change text color */
`;  

const teamsData = [
  {
    name: 'Team X',
    imageUrl: "https://th.bing.com/th/id/OIP._66wH2WuYOk-A-METtgMxAAAAA?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7 ",
  },
  {
    name: 'Code Architects',
    imageUrl: team2,
  },
  {
    name: 'Cyber Titans',
    imageUrl: team3,
  },
  {
    name:'Byte Brigade ',
    imageUrl: team4,
  },
  {
    name: 'Visionary Developers',
    imageUrl: team5,
  },
  {
    name: 'App Monsters',
    imageUrl: team1,
  },
  {
    name: 'Tech Masters',
    imageUrl: team7,
  },
  {
    name: 'Code Pioneers',
    imageUrl: team8,
  },
  {
    name: 'Future Coders',
    imageUrl: team9,
  },
  {
    name: 'Rapid Developers',
    imageUrl: team10,
  },
  {
    name: 'Code Warriors',
    imageUrl: team11,
  },
  {
    name: 'Data  Twisters ',
    imageUrl: team12,
  },
  {
    name: 'Pro Actives ',
    imageUrl: team13,
  },
  {
    name: 'Java Squad',
    imageUrl: team14,
  },
  {
    name: 'Inno Ventures',
    imageUrl: team15,
  },
  {
    name: 'Innovation Gurus',
    imageUrl: team16,
  },
  {
    name: 'Brave Soft',
    imageUrl: team17,
  },
  {
    name: 'Techno Horses',
    imageUrl: "https://th.bing.com/th/id/OIP._66wH2WuYOk-A-METtgMxAAAAA?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7 ",
  },
  {
    name: 'Talent Masters',
    imageUrl: team19,
  },
  {
    name: 'Merit Makers',
    imageUrl: team20,
  },
];

const Teams = () => {
  return (
    <div>
      <TeamCardContainer>
        {teamsData.map((team, index) => (
          <TeamCard key={index}>
            <TeamImage src={team.imageUrl} alt={team.name} />
            <TeamName>{team.name}</TeamName>
          </TeamCard>
        ))}
      </TeamCardContainer>
      <Footer />
    </div>
  );
};

export default Teams;
