// import React from 'react';
// import '../pages/Message.css'
// const Message = () => {
//     return(
//         <div>
//             <div className='card-container'>
//                 <h1>Principal</h1>
//                 <h2>Sasikumar</h2>
//             </div>
//         </div>
//     )
// }

// export default Message;


import React from 'react';
import '../pages/Message.css'
import Pri from '../images/prncipal-R-sasikumar.jpg'
import HOD from '../images/hod cse (1).jpg'
import Co from '../images/Loganathan.jpg'
import Footer from '../Footer';



const messages = [
  {
    role: 'Principal',
    name:'Dr.R.SASI KUMAR',
    message: 'The Java Club is a great platform for students to enhance their programming skills. I encourage everyone to participate actively and make the most of this opportunity. Wishing the club great success!',
    img:Pri,
    clg:'VMKVEC Salem',
  },
  {
    role: 'Vice Principal',
    name:'Dr.M.Nithya',
    message: 'The Java Club will help students explore Java and its vast opportunities. Stay curious, keep learning, and make the best use of this platform. Best wishes!',
    img:HOD,
    clg:'VMKVEC Salem',
  },
  {
    role: 'Co-ordinator',
    name:'Mr.S.Loganathan',
    message: 'The Java Club is all about coding, collaboration, and creativity. Let’s learn, innovate, and grow together. Wishing everyone a great learning experience!',
    img:Co,
    clg:'VMKVEC Salem',
  },
];


const MessageCard = ({name,img,clg,role, message }) => (
  <div className="message-card">
    <div className="text">
    <div className="icon">
      <img src={img} alt={`${role} icon`} />
    </div>
     
      <h2>{name}</h2>
      <h6 className='text-secondary'>{role}</h6>
       <p className='text-secondary clg'>{clg}</p>
      <hr/>
      <p className='text-secondary msg'>{message}</p>
    </div>
  </div>
);

const MessagePage = () => (
  <div>
  <div className="message-page">
    <h1 className='text-white'><b>Messages</b></h1>

    {messages.map((msg, index) => (
      <MessageCard key={index} role={msg.role} name={msg.name} clg={msg.clg} img={msg.img} message={msg.message} />
    ))}
  </div>
      <Footer/>
  </div>
);

export default MessagePage;
