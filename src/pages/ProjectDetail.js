import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.css'
import Footer from '../Footer';

const projectDetails = {  
  '1': {
    id: '1',
    team_name:'Talent Masters',
    title: 'Resume Builder',
    members: 'Iswarya, Prabhavathi, Kaviya, Anjali',
    description: 'A resume builder is an online tool that you can use to quickly create a resume. Resume builders allow you to pick a pre-formatted resume template, fill in your contact and background information, and select pre-written work history bullet points — saving you a lot of time',
  },
  '2': {
    id: '2',
    title: 'Snake Game',
    team_name:'Pro Actives',
    members: 'Pranavi Tiwary , G.Prasanna',
    description: 'Snake game is a classic arcade game where players control a snake that grows longer as it consumes food while avoiding colliding with walls or itself. Its a simple yet addictive game that has been enjoyed by generations.',
  },
  '3': {
    id: '3',
    title: 'Chatting',
    team_name:'Merit Makers',
    members: 'Monisha.B , Monika.M',
    description: 'Java chat. Java chat applications are developed using the java programming language. Chat applications allow users to communicate with each other that should be in real-time. Where the messages are getting exchanged in real-time. It can run multiple client-server chats easily.',
  },
  '4': {
    id: '4',
    title: 'Tic Tac Toe Game',
    team_name:'Brave Soft',
    members: 'Pratyusha , Indumathi , Magila g',
    description: 'The tic-tac-toe game is for two players. One player plays X and the other plays O. The players take turns placing their marks on a grid of three-by-three cells. If a given player gets three marks in a row horizontally, vertically, or diagonally, then that player wins the game.',
  },
  '5': {
    id: '5',
    title: 'Hotel Management System.(JDK)',
    team_name:'Techno Horses ',
    members: 'Naveen Kumar ,Natarajan ,Muhammed Salman',
    description: 'he hotel management system will help to improve business efficiency and provide user friendly environment for the customers. The hotel management system works as a bridge between staff and customers to fulfill the needs of the customers in an efficient manner.',
  },
  '6': {
    id: '6',
    title: 'ATM Simulation System ',
    team_name:'Rapid Developers',
    members: 'Abhinay , Arul dass , Himansu kumar',
    description: 'The "ATM Simulator System" project is a model Internet Banking St. This site enables the customers toper form the basic banking transactions. The system provides the access to the customer to create an account, deposit/withdraw the cash from his account, also to view reports of all accounts present.',
  },
  '7': {
    id: '7',
    title: 'Travel Management System ',
    team_name:'Tech Masters',
    members: 'Saiyad Mabhu Subhani,Santhosh Kumar,Vineet Kumar,Shivam Bharathwaj',
    description: 'Travel management systems (TMS) are one-stop software systems where all of a companys travel arrangements can be handled. The platform helps you manage travel budgeting, policy, and reporting, so you can be sure that everything is always running as it should.',
  },
  '8': {
    id: '8',
    title: 'Electricity Billing System (JDK-17).',
    team_name:'Code Warriors',
    members: 'Sanjana Sharma ,Sakam Aiswarya ',
    description: 'Electricity Billing System is a software-based application. i. This project aims at serving the department of electricity by computerizing the billing system. ii. It mainly focuses on the calculation of units consumed during the specified time and the money to be charged by the electricity offices.',
  },
  '9': {
    id: '9',
    title: 'Employee Management System',
    team_name:'Data  Twisters ',
    members: 'Kumaran,Mallela Naga babu,MD sarique ansari',
    description: 'Human resource management (HRM) is the practice of recruiting, hiring, deploying and managing an organizations employees. HRM is often referred to simply as human resources (HR)',
  },
  '10': {
    id: '10',
    title: 'Quiz Application',
    team_name:'App Monsters',
    members: 'Srisudha Parimala,Sanjana,Rehana',
    description: 'The project: “Quiz Application” is a collection of number of different types of quizzes like technical, games, sports, etc. A user can access/play all of the quiz and can attempt any of the one. There will be limited number of questions and for each correct answer user will get a credit score.',
  },
  '11': {
    id: '11',
    title: 'University Management System (JDK-17).',
    team_name:'Code Architects',
    members: 'Srivarshini,Sunmathi,Varnika,Nivedha',
    description: 'A University Information Management System centralizes all university data, including student records, course management, faculty information, and financial details, making it easily accessible and manageable.',
  },
  '12': {
    id: '12',
    title: 'Airline Management System (JDK-17).',
    team_name:'Java Squad ',
    members: 'Ashok,Kasinathan,MohanRaj',
    description: 'The Airline Management system covers everything from booking flights and managing customer data to tracking flight schedules and updates. By providing a comprehensive solution for the airline industry, these systems aim to streamline processes, improve efficiency, and enhance the customer experience',
  },
  '13': {
    id: '13',
    title: 'Flappy Bird ',
    team_name:'Code Champions',
    members: 'Soundareswaran,Vignesh,Sanjay Prakash',
    description: 'it is an endless runner game with a one-button gaming design to control a bird to fly through gaps between green pipes without hitting them for as long as you can. The gameplay was inspired by the challenge of bouncing a ping pong ball on a paddle as many times as you',
  },
  '14': {
    id: '14',
    title: 'Space-Invaders',
    team_name:'Inno Ventures ',
    members: 'Arun Kumar,Rajasekar,Rajesh,Pachaiyappan',
    description: 'Space Invaders is a fixed shooter in which the player moves a laser cannon horizontally across the bottom of the screen and fires at aliens overhead. The aliens begin as five rows of eleven that move left and right as a group, shifting downward (advancing on the shooter) each time they reach a screen edge.',
  },
  '15': {
    id: '15',
    title: 'Stock Management System',
    team_name:'Byte Brigade ',
    members: 'Yuvaraj , Aadharsh , Kathir , Midhunananthan , Chandranath',
    description: 'A stock management system is a software that helps businesses manage their inventory. It helps prevent stock shortages and overstocking. '
  },
  '16': {
    id: '16',
    title: 'F arming Assistant System',
    team_name:'Innovation Gurus ',
    members: 'Rustam Mansuri,Suman Kumar,Raushan Raj',
    description: 'The Farming Assistant system collects and analyzes data from the farm and offers a planning feature. This feature determines the type of crops, quantities of fertilizers required, the time of application, and appropriate pest control. The system further suggests how and when to conduct different farm activities.',
  },
  
  '17': {
    id: '17',
    title: 'Chrome Dinosaur',
    team_name:'Cyber Titans',
    members: 'Sankar ganesh , Monish kumar , Murugavel , Kamalesh , Senthammzh',
    description: 'There`s literally no end: get to the maximum possible score of 99,999 and the game simply resets itself. You can`t change direction and you have no control over your speed. All you can do is jump and duck. That`s plenty.'
  },
  '18': {
    id: '18',
    title: 'Memory Cards',
    team_name:'Visionary Developers',
    members: 'Saranya  , Dharshini , Sathiya priya  , Pooja sri , Monika, Megala , Dhanalakshmy',
    description: 'A memory card is a portable storage device that is commonly used in electronic devices such as digital cameras, smartphones, tablets, and gaming consoles. It is designed to store and transfer data, including photos, videos, music, and documents.'
  },
  '19': {
    id: '19',
    title: 'Supermarket Billing',
    team_name:'Code Pioneers',
    members: 'Shafiya Kullsum  , Thrisha , Srividhya  , Varsha  , Keerthana , Rafiya , Pooja , Reena ',
    description: 'Supermarket billing is a system that helps supermarkets calculate and display bills, and manage their sales, purchases, and inventory. It can also help with customer data, loyalty programs, and accounting. '
  },
  '20': {
    id: '20',
    title: 'Tic Tac Toe',
    team_name:'Future Coders',
    members: 'Janet Salomon , Vignesh , Deepak kumar  , Devanand  , Ragul ',
    description: 'The game is played on a grid that`s 3 squares by 3 squares. You are X , your friend (or the computer in this case) is O . Players take turns putting their marks in empty squares. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.'
  }
};  

const ProjectDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const project = projectDetails[id];

  if (!project) {
    return (
      <div >
        <h2>Project Not Found</h2>
        <button onClick={() => navigate(-1)} id='btn' className="btn-back">Back</button>
      </div>
    );
  }

  return (
    <div>
    <div className='project-details'>
      <div className="project-detail container">
       <button onClick={() => navigate(-1)} className="btn back-btn">Back</button>
        <div >
            <div >
              <h1 className='title-pro '> PROJECT TITLE : {project.title}</h1>
              
              <hr/>
              
              <p><b>project description : </b>{project.description}</p>

              <hr/>
              <h2>TEAM NAME : {project.team_name}</h2>
              <h2>Team Members : {project.members}</h2>

            </div>
        </div>
      </div>




        {/* card for members */}
            {/* <div className="container members d-flex ">
              <div className="row">

                
                <div className=" col-12 col-md-4 m-2 card">
                      <h4>{project.member1}</h4>
                </div>

                <div className=" col-12 col-md-4 m-2 card">
                <h4>{project.member2}</h4>
                </div>
                <div className=" col-12 col-md-4 m-2 card">
                <h4>{project.member3}</h4>
                </div> */}


             
     
    </div>
    <Footer/> 
    </div>
      
    // </div>
    // </div>
  );
};

export default ProjectDetail;
