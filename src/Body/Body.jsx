import React from 'react';
import './Body.css';
import android from '../assets/img/Courses_img/android.png'
import web from '../assets/img/Courses_img/app-development.png'
import ai from '../assets/img/Courses_img/artificial-intelligence.png'
import maths from '../assets/img/Courses_img/calculating.png'
import react from '../assets/img/Courses_img/react.png'
import robotic from '../assets/img/Courses_img/robotic-hand.png'
import digital from '../assets/img/Courses_img/social-media.png'
import startcoding from '../assets/img/card_img/Startcoding.gif'
import begginer from '../assets/img/card_img/begginer.gif'


function Body() {
  return (
    <div>
      <div className='Body'>
        <h2>Course Categories</h2>
        <div className="category-container">
          <div className="category">
            <div className="icon">
            <img className='category-icon' src={android} alt="android" />
            </div>
            <div className="category-title">Android development</div>
          </div>
          <div className="category">
          <img className='category-icon' src={web} alt="android" />
            <div className="category-title">Web development</div>
          </div>
          <div className="category">
          <img className='category-icon' src={react} alt="android" />
            <div className="category-title">React</div>
          </div>
          <div className="category">
          <img className='category-icon' src={ai} alt="android" />
            <div className="category-title">Artificial Intelligence</div>
          </div>
          <div className="category">
          <img className='category-icon' src={digital} alt="android" />
            <div className="category-title">Degital Marketing</div>
          </div>
          <div className="category">
          <img className='category-icon' src={web} alt="android" />
            <div className="category-title">social</div>
          </div>
          <div className="category">
          <img className='category-icon' src={robotic} alt="android" />
            <div className="category-title">Technology</div>
          </div>
          <div className="category">
          <img className='category-icon' src={maths} alt="android" />
            <div className="category-title">Mathmatics</div>
          </div>
        </div>
      </div>
      <div className='enrollnow'>

      <div className="container">
        <div className="img-section">
          <img src={startcoding} alt="Coding" />
        </div>
        <div className="text-section">
          <h3>Start Coding Today</h3>
          <p>Get access to our wide range of coding courses and kickstart your coding journey today!</p>
          <button>Enroll Now</button>
        </div>
      </div>
      <div className="container2">
        <div className="text-section">
          <h3>Course for Beginners</h3>
          <p>
            Get started with coding today! Our beginner-friendly courses are designed to help you learn coding from scratch.
          </p>
          <button>Enroll Now</button>
        </div>
        <div className="img-section">
          <img src={begginer} alt="Coding" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Body;
