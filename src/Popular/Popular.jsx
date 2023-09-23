import React from 'react';
import './Popular.css'

function Popular() {
  const popularCourses = [
    {
      title: 'Course 1',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
    },
    {
      title: 'Course 2',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
    },
    {
      title: 'Course 3',
      videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
    },
    // Add more courses as needed
  ];

  return (
    <div className="popular-courses">
      <h2>Popular Courses</h2>
      <div className="course-cards">
        {popularCourses.map((course, index) => (
          <div key={index} className="course-card">
            <iframe
              title={course.title}
              width="300"
              height="200"
              src={course.videoUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <h3>{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Popular;
