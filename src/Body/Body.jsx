import React from 'react';
import './Body.css';

function Body() {
  return (
    <div>
      <div className='Body'>
        <h2>Course Categories</h2>
        <div className="category-container">
          <div className="category">
            <div className="category-icon">
              <i className="fa fa-book"></i>
            </div>
            <div className="category-title">Category 1</div>
            <p>Description of Category 1</p>
          </div>
          <div className="category">
            <div className="category-icon">
              <i className="fa fa-video-camera"></i>
            </div>
            <div className="category-title">Category 2</div>
            <p>Description of Category 2</p>
          </div>
          <div className="category">
            <div className="category-icon">
              <i className="fa fa-code"></i>
            </div>
            <div className="category-title">Category 3</div>
            <p>Description of Category 3</p>
          </div>
          <div className="category">
            <div className="category-icon">
              <i className="fa fa-music"></i>
            </div>
            <div className="category-title">Category 4</div>
            <p>Description of Category 4</p>
          </div>
          <div className="category">
            <div className="category-icon">
              <i className="fa fa-paint-brush"></i>
            </div>
            <div className="category-title">Category 5</div>
            <p>Description of Category 5</p>
          </div>
          <div className="category">
            <div className="category-icon">
              <i className="fa fa-globe"></i>
            </div>
            <div className="category-title">Category 6</div>
            <p>Description of Category 6</p>
          </div>
          <div className="category">
            <div className="category-icon">
              <i className="fa fa-film"></i>
            </div>
            <div className="category-title">Category 7</div>
            <p>Description of Category 7</p>
          </div>
          <div className="category">
            <div className="category-icon">
              <i className="fa fa-gamepad"></i>
            </div>
            <div className="category-title">Category 8</div>
            <p>Description of Category 8</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="left-section">
          <img src="your-image-url.jpg" alt="Coding" />
        </div>
        <div className="right-section">
          <h3>Start Coding Today</h3>
          <p>Get access to our wide range of coding courses and kickstart your coding journey today!</p>
          <button>Enroll Now</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
