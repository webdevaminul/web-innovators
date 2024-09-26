// User Dashbaord 

import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './UserDashboard.css';

// Fake Data for the Dashboard
const fakeProfile = {
  name: "John Doe",
  image: "./card01.jpg",
};

const fakeCourses = {
  popular: [
    { id: 1, name: "React for Beginners", price: 1000, image: "./card01.jpg" },
    { id: 2, name: "Advanced JavaScript", price: 1500, image: "./card02.jpg" },
    { id: 3, name: "CSS Flexbox and Grid", price: 800, image: "./card03.jpg" },
  ],
  enrolled: [
    { id: 1, name: "Fullstack Development", price: 2000, image: "./card04.jpg" },
    { id: 2, name: "Node.js Essentials", price: 1200, image: "./card05.jpg" },
    { id: 3, name: "React Native Basics", price: 1800, image: "./card01.jpg" },
    { id: 4, name: "JavaScript for Beginners", price: 900, image: "./card04.jpg" },
  ],
};

// Fake Data for Student Progress
const studentProgressData = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
  datasets: [
    {
      label: 'Courses Completed',
      data: [1, 2, 2, 3, 4, 5],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1,
    },
  ],
};

// Fake Data for Enrollment Courses Graph
const enrollmentCoursesData = {
  labels: fakeCourses.enrolled.map(course => course.name),
  datasets: [
    {
      label: 'Course Prices (৳)',
      data: fakeCourses.enrolled.map(course => course.price),
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const UserDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div className="dashboard-container">
      {/* First Column: Profile and Menu */}
      <aside className={`profile-section ${menuOpen ? 'active' : ''}`}>
        <div className="profile-info">
          <img src={fakeProfile.image} alt="Profile" className="profile-image" />
          <h2 className='text-center font-bold'>{fakeProfile.name}</h2>
        </div>
        {/* Toggle Button for Small Devices */}
        <button className="toggle-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        <nav className={`menu ${menuOpen ? 'show' : ''}`}>
          <ul className='text-xl font-bold'>
            <li>
              <FontAwesomeIcon /> Dashboard
            </li>
            <li>
              <FontAwesomeIcon /> Settings
            </li>
            <li>
              <FontAwesomeIcon /> Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Second Column: Main Content */}

      <main className="main-content">
        {/* Row 1: Banner */}
        <section className="banner">
          <div className="banner-text mt-10">
            <h1 className='text-2xl font-bold text-black'>Welcome to Your Dashboard</h1>
            <p className='text-black'>Enhance your learning experience with the best courses.</p>
          </div>
          <div className="banner-image">
            <img src="./course_banner01.png" alt="Banner" />
          </div>
        </section>

        {/* Row 2: Popular and Enrolled Courses */}
        <section className="course-section">
          <div className="course-columns">
            {/* Popular Courses */}
            <div className="popular-courses">
              <h3 className='text-black font-bold'>Popular Courses</h3>
              <div className="course-cards">
                {fakeCourses.popular.map((course) => (
                  <div key={course.id} className="course-card">
                    <img src={course.image} alt={course.name} />
                    <h4>{course.name}</h4>
                    <p>৳ {course.price}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enrolled Courses */}
            <div className="enrolled-courses">
              <h3 className='text-black font-bold'>Enrolled Courses</h3>
              <div className="course-cards">
                {fakeCourses.enrolled.map((course) => (
                  <div key={course.id} className="course-card">
                    <img src={course.image} alt={course.name} />
                    <h4>{course.name}</h4>
                    <p>৳ {course.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Row 3: Student Progress Chart */}
        <section className="progress-chart">
          <h3 className='text-black font-bold'>Student Progress</h3>
          <Line data={studentProgressData} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Courses Completed Over Time',
              },
            },
          }} />
        </section>

        {/* Row 4: Enrollment Course Prices Graph */}
        <section className="enrollment-chart">
          <h3 className='text-black font-bold'>Enrollment Course Prices</h3>
          <Bar data={enrollmentCoursesData} options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Course Prices',
              },
            },
          }} />
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;
