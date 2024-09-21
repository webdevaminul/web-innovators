import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-image-container">
        <img 
          src={course.image} 
          alt={course.title} 
          className="course-image" 
        />
      </div>
      <div className="course-info">
        <span className="course-category font-bold">{course.category}</span>
        <h3>{course.title}</h3>
        <p className="instructor">Instructor: {course.instructor}</p>
        <button className="enroll-button">Enroll Now</button>
        <div className="course-pricing">
          <p className="course-price">৳ {course.price}</p>
          {course.old_price && (
            <p className="course-old-price">৳ {course.old_price}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;