import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard"; // Import your CourseCard component

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // Change to store only one selected category
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

  // Handle category checkbox selection (allowing only one selection at a time)
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category === selectedCategory ? null : category); // Unselect if clicked twice
  };

  // Filter and sort courses based on the selected category
  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
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
    return (
      <div className="text-center text-red-500 my-10">
        Error: {error.message}
      </div>
    );
  }

  // Unique categories for checkbox
  const categories = Array.from(
    new Set(courses.map((course) => course.category))
  );

  return (
    <div className="container mx-auto px-4 font-bai">
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row gap-3 lg:gap-8">
        {/* Category Filter Section - Left Side */}
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl font-semibold mb-3">Filter by Category</h3>
          {/* checkbox of categories */}
          <div className="pt-3 rounded-lg">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategory === category} // Only this checkbox will be checked
                  onChange={handleCategoryChange}
                  className="text-blue-500 focus:ring-blue-400 h-4 w-4"
                />
                <span className="text-lg text-text">{category}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Course Cards Section - Right Side */}
        <div className="w-full md:w-3/4">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-3">
            {/* Category Title */}
            <h3 className="text-3xl font-semibold ">
              {selectedCategory ? selectedCategory : "All Courses"}
            </h3>
            {/* Sorting Section */}
            <div className="text-center mb-2">
              <label className="mr-2 font-bold text-text">Sort by Price:</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="border outline-none border-border bg-accentOne text-text font-bold rounded-md p-2"
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
              </select>
            </div>
          </div>

          {selectedCategory ? (
            <div className="mb-10">
              {/* Course Cards for this Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {sortedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          ) : (
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
