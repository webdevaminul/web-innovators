import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard"; // Import your CourseCard component

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCourses, setVisibleCourses] = useState({
    Language: false,
    Freelancing: false,
    Design: false,
    Programming: false,
  });
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch courses data from JSON
  useEffect(() => {
    fetch("./courses.json") // Ensure your data file is at the correct path
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  // Filter courses based on the search term in category only
  const filteredCourses = courses.filter((course) =>
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to render each category section
  const renderCategory = (category) => {
    const categoryCourses = filteredCourses.filter((course) => course.category === category);
    const isVisible = visibleCourses[category];

    return (
      <div className="category-section mt-15" key={category}>
        <h2 className="text-text">
          {category} ({categoryCourses.length} Courses)
        </h2>
        <div className="course-grid">
          {categoryCourses.slice(0, isVisible ? categoryCourses.length : 4).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {categoryCourses.length > 4 && (
          <button
            className="see-more-button"
            onClick={() => setVisibleCourses((prev) => ({ ...prev, [category]: !prev[category] }))}
          >
            {isVisible ? "See Less" : "See More"}
          </button>
        )}
      </div>
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto font-bai">
      {/* Banner Section with heading and search bar on the left, image on the right */}
      <div className="banner-section relative h-screen w-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
        {/* Semi-transparent overlay for readability */}
        <div className="banner-overlay absolute inset-0 bg-black opacity-50"></div>
        {/* Banner content */}
        <div className="banner-content relative z-10 mt-20 text-center md:text-left text-textWhite p-10 w-full md:w-1/2 ">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-textWhite">
            Master New Skills
          </h2>
          <p className="text-xl md:text-2xl mt-4 mb-4 font-light text-textWhite">
            Explore a variety of courses to enhance your career.
          </p>
          {/* Search Bar in the Banner */}
          <div className="search-bar mt-8 flex flex-col md:flex-row items-center w-full">
            <input
              type="text"
              className="p-3 w-full md:w-96 rounded-md border-none outline-none text-text"
              placeholder="Search by category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-secondary hover:bg-secondaryHover text-black px-6 py-3 mt-4 md:mt-0 md:ml-2 rounded-md w-full md:w-auto">
              Search
            </button>
          </div>
        </div>
        {/* Image on the right side (hidden on small screens) */}
        <div className="banner-image hidden md:flex justify-center items-center h-full relative z-10 w-1/2">
          <img src="./courseBanner.png" alt="Banner" className="h-96 object-contain" />
        </div>
      </div>

      {/* Courses Section */}
      <h2 className="page-header mt-10 text-3xl font-bold text-center md:text-left">
        Skill Courses
      </h2>

      {/* Render categories */}
      {renderCategory("Language")}
      {renderCategory("Freelancing")}
      {renderCategory("Design")}
      {renderCategory("Programming")}
    </div>
  );
};

export default AllCourses;
