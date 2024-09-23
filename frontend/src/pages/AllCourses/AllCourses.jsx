import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard"; // Import your CourseCard component

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc"); // State to manage sorting order

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

  // Handle category checkbox selection
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    if (e.target.checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    }
  };

  // Filter and sort courses based on selected categories
  const filteredCourses = selectedCategories.length > 0 
    ? courses.filter((course) => selectedCategories.includes(course.category))
    : courses; // Show all courses if no category is selected

  // Sort the filtered courses by price
  const sortedCourses = filteredCourses.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA; // Ascending or descending
  });

  if (loading) {
    return <div className="text-center my-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 my-10">Error: {error.message}</div>;
  }

  // Unique categories for checkbox
  const categories = Array.from(new Set(courses.map((course) => course.category)));

  return (
    <div className="container mx-auto px-4 font-bai">
      {/* Heading Section */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mt-10">Skill Courses</h2>
      <p className="text-lg text-center text-gray-600 mt-2 mb-10">
        Explore a variety of courses to enhance your career.
      </p>

      {/* Sorting Section */}
      <div className="mb-6 text-center">
        <label className="mr-2 font-bold">Sort by Price:</label>
        <select 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)} 
          className="border font-bold rounded-md p-2"
        >
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row">
        {/* Category Filter Section - Left Side */}
        <div className="w-full md:w-1/4 mb-8">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Filter by Category</h3>
          <div className="bg-white p-4 shadow-lg rounded-lg">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={category}
                  onChange={handleCategoryChange}
                  className="text-blue-500 focus:ring-blue-400 h-4 w-4"
                />
                <span className="text-lg text-gray-700">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Course Cards Section - Right Side */}
        <div className="w-full md:w-3/4">
          {selectedCategories.length > 0 ? (
            selectedCategories.map((category) => (
              <div key={category} className="mb-10">
                {/* Category Title */}
                <h3 className="text-3xl font-semibold text-gray-700 mb-6">{category}</h3>

                {/* Course Cards for this Category */}
                <div className="course-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {sortedCourses
                    .filter((course) => course.category === category)
                    .map((course) => (
                      <CourseCard key={course.id} course={course} />
                    ))}
                </div>
              </div>
            ))
          ) : (
            <div className="mb-10">
              {/* Show All Courses */}
              <h3 className="text-3xl font-semibold text-gray-700 mb-6">All Courses</h3>
              <div className="course-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {sortedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
