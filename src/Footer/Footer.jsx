import React from 'react';
import './Footer.css'; // Replace with the correct path to your CSS file
import logo from '../assets/img/icon.png'
import facebook from '../assets/img/facebook.png'
import insta from '../assets/img/instagram.png'
import twitter from '../assets/img/twitter.png'
import youtube from '../assets/img/youtube.png'

function Footer() {
  return (
    <div>
      <div className='Footer_box'>
        <div className='Footer_col1'>
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className='logo-name'>COURSE.<span className='ai'>AI</span></p>
          <ul>
            <h4>Contact Us</h4>
            <li>Email: example@example.com</li>
            <li>Phone: +1 (123) 456-7890</li>
          </ul>
        </div>
        <div className='Footer_col2'>
          <h4>About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in justo eu enim suscipit auctor. Fusce id luctus risus.
          </p>
        </div>
        <div className='Footer_col3'>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className='Footer_row'>
        <div className="wrapper">
          <a href="https://www.facebook.com/" className="icon facebook" target="_blank" rel="noopener noreferrer">
            <div className="tooltip">Facebook</div>
            <span><img className="contact-icons" src={facebook} alt="Facebook" /></span>
          </a>
          <a href="https://twitter.com/" className="icon twitter" target="_blank" rel="noopener noreferrer">
            <span><img className="contact-icons" src={twitter} alt="Twitter" /></span>
            <div className="tooltip">Twitter</div>
          </a>
          <a href="https://www.instagram.com/" className="icon instagram" target="_blank" rel="noopener noreferrer">
            <div className="tooltip">Instagram</div>
            <span><img className="contact-icons" src={insta} alt="Instagram" /></span>
          </a>
          <a href="https://www.youtube.com/" className="icon youtube" target="_blank" rel="noopener noreferrer">
            <div className="tooltip">Youtube</div>
            <span><img className="contact-icons" src={youtube} alt="YouTube" /></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
