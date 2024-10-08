import { useState, useEffect } from "react";
import CourseCard from "./CourseCard"; // Import your CourseCard component
import Heading from "../../utils/Heading";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null); // Initially null to show all data
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 6; // Number of items to display per page

  // Load all courses when the component mounts
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

  // Handle category change and filter data
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category === "All" ? null : category);
    setCurrentPage(1); // Reset to the first page when changing category
  };

  // Filter courses based on the selected category
  const filteredCourses = selectedCategory
    ? courses.filter((course) => course.category === selectedCategory)
    : courses;

  // Sort the filtered courses
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

  // previous page function
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Function to render pagination
  const renderPagination = () => {
    const paginationItems = [];
    const visiblePages = 5; // Number of visible pages
    let startPage = currentPage - Math.floor(visiblePages / 2);
    let endPage = currentPage + Math.floor(visiblePages / 2);

    // Adjust startPage and endPage if they are out of bounds
    if (startPage < 1) {
      endPage += 1 - startPage;
      startPage = 1;
    }
    if (endPage > totalPages) {
      startPage -= endPage - totalPages;
      endPage = totalPages;
    }

    if (startPage < 1) startPage = 1;

    // Add "Previous" button
    if (currentPage > 1) {
      paginationItems.push(
        <button
          key="prev"
          className="join-item btn btn-md"
          onClick={handlePreviousPage}
        >
          «
        </button>
      );
    }

    // Add "First" page with ellipsis if necessary
    if (startPage > 1) {
      paginationItems.push(
        <button
          key={1}
          className="join-item btn btn-md"
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
      );
      if (startPage > 2) {
        paginationItems.push(
          <span key="dots-prev" className="join-item">
            ...
          </span>
        );
      }
    }

    // Add visible page numbers
    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <button
          key={i}
          className={`join-item btn btn-md ${
            currentPage === i ? "bg-secondary text-black" : ""
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    // Add "Last" page with ellipsis if necessary
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationItems.push(
          <span key="dots-next" className="join-item">
            ...
          </span>
        );
      }
      paginationItems.push(
        <button
          key={totalPages}
          className="join-item btn btn-md"
          onClick={() => setCurrentPage(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    // Add "Next" button
    if (currentPage < totalPages) {
      paginationItems.push(
        <button
          key="next"
          className="join-item btn btn-md"
          onClick={handleNextPage}
        >
          »
        </button>
      );
    }

    return paginationItems;
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

  // Get all categories including an "All" option
  const categories = [
    "All",
    ...new Set(courses.map((course) => course.category)),
  ];

  return (
    <div className="container mx-auto px-4 font-bai">
      <Heading heading={"All Courses"} />
    <div className="container mx-auto px-4 font-bai py-8">
      <div className="flex flex-col md:flex-row gap-3 lg:gap-8">
        <div className="w-full md:w-1/4">
          <h3 className="text-2xl font-semibold mb-3">Filter by Category</h3>
          <div className="pt-3 rounded-lg">
            <select
              value={selectedCategory || "All"}
              onChange={handleCategoryChange}
              className="w-full p-2 border rounded-md"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="w-full md:w-3/4">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center mb-3">
            <h3 className="text-3xl font-semibold">
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
            <div className="join border mx-auto">{renderPagination()}</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AllCourses;
