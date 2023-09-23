import React from 'react';
import './Footer.css'; // Replace with the correct path to your CSS file


function Footer() {
  return (
    <div>
      <div className='Footer_box'>
        <div className='Footer_col1'>
          <ul>
            <li>Stuff</li>
            {/* Add more list items as needed */}
          </ul>
        </div>
        <div className='Footer_col2'>
          {/* Add content for the second column */}
        </div>
        <div className='Footer_col3'>
          {/* Add content for the third column */}
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
