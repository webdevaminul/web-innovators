import React, { useState, useEffect } from "react";
import CourseCard from "./CourseCard"; // Import your CourseCard component

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 6; // Number of items to display per page

  useEffect(() => {
    fetch("./courses.json")
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

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category === selectedCategory ? null : category);
    setCurrentPage(1); // Reset to the first page when changing category
  };

  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses;

  const sortedCourses = filteredCourses.sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  // Calculate the number of pages
  const totalPages = Math.ceil(sortedCourses.length / itemsPerPage);

  // Slice the sortedCourses array to show only courses for the current page
  const paginatedCourses = sortedCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // next page function
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // previous function
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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

  const categories = Array.from(
    new Set(courses.map((course) => course.category))
  );

  return (
    <div className="container mx-auto px-4 font-bai">
      <div className="flex flex-col md:flex-row gap-3 lg:gap-8">
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl font-semibold mb-3">Filter by Category</h3>
          <div className="pt-3 rounded-lg">
            {categories.map((category) => (
              <label key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={category}
                  checked={selectedCategory === category}
                  onChange={handleCategoryChange}
                  className="text-blue-500 focus:ring-blue-400 h-4 w-4"
                />
                <span className="text-lg text-text">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-3">
            <h3 className="text-3xl font-semibold ">
              {selectedCategory ? selectedCategory : "All Courses"}
            </h3>
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

          <div className="flex flex-col items-center justify-center">
            <div className="mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {paginatedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="join border mx-auto">
              <button
                className="join-item btn btn-md"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                «
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  className={`join-item btn btn-md ${
                    currentPage === index + 1 ? "bg-secondary text-black" : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className="join-item btn btn-md"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
