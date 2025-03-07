import React from 'react'
import './Footer.css'
import logo from './images/java-skillbee-logo copy.png'

const Footer = () => {
  return (
    <div>
        <footer class="footer "  >
        <div class="footer-content">
            <div class="footer-about">
                <img src={logo} alt="Logo" class="footer-logo" width={100}/>
                <p>Empowering Java learners since 2025.</p>
            </div>
            <div class="social-icons">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-discord"></i></a>
            </div>
        </div>
        <p class="copyright">&copy; 2025 Javaskillj Bee. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Footer