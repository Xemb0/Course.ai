import React from 'react';
import './Footer.css'; // Replace with the correct path to your CSS file
import logo from '../assets/img/icon.png'

function Footer() {
  return (
    <div>
      <div className='Footer_box'>
        <div className='Footer_col1'>
          <img src={logo} alt="Logo" className="footer-logo" />
          <h4>Contact Us</h4>
          <ul>
            <li>Email: example@example.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Main Street, City, Country</li>
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
          <a href="#" className="icon facebook">
            <div className="tooltip">Facebook</div>
            <span><i className="fab fa-facebook-f"></i></span>
          </a>
          <a href="#" className="icon twitter">
            <div className="tooltip">Twitter</div>
            <span><i className="fab fa-twitter"></i></span>
          </a>
          <a href="#" className="icon instagram">
            <div className="tooltip">Instagram</div>
            <span><i className="fab fa-instagram"></i></span>
          </a>
          <a href="#" className="icon youtube">
            <div className="tooltip">Youtube</div>
            <span><i className="fab fa-youtube"></i></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
