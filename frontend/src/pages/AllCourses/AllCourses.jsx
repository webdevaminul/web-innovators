import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CourseCard from "./CourseCard";
import Heading from "../../utils/Heading";
import Loader from "../../utils/Loader";
import useAvailableCourse from "../../api/useAvailableCourse";

const AllCourses = () => {
  const { categoryName } = useParams(); // Home page category finder
  const [selectedCategory, setSelectedCategory] = useState(categoryName || null); // Initially null to show all data
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1); // Track the current page
  const itemsPerPage = 6; // Number of items to display per page

  const status = "approved"
  // Fetch courses from API including totalPages
  const { courses, isLoading, totalPages } = useAvailableCourse(
    sortOrder,
    currentPage,
    itemsPerPage,
    selectedCategory,
    status
  ); // All course data from the hook
  const homePageShownCourse = courses?.filter(course => course.status === status) ;
  console.log('homePageShownCourse',homePageShownCourse)

  useEffect(() => {
    setSelectedCategory(categoryName || null);
  }, [categoryName]);

  // Get all categories including an "All" option
  const allCategory = [
    "All",
    "Language",
    "Marketing",
    "Photography",
    "Videography",
    "Development",
    "Design",
    "Business",
    "Fitness",
  ];

  // Handle category change and filter data
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category === "All" ? null : category);
    setCurrentPage(1); // Reset to the first page when changing category
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const renderPagination = () => {
    const paginationItems = [];
    const visiblePages = 5;
    let startPage = currentPage - Math.floor(visiblePages / 2);
    let endPage = currentPage + Math.floor(visiblePages / 2);

    if (startPage < 1) {
      endPage += 1 - startPage;
      startPage = 1;
    }
    if (endPage > totalPages) {
      startPage -= endPage - totalPages;
      endPage = totalPages;
    }
    if (startPage < 1) startPage = 1;

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
          <span key="dots-prev" className="join-item">...</span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <button
          key={i}
          className={`join-item btn btn-md ${currentPage === i ? "bg-secondary text-black" : ""}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationItems.push(
          <span key="dots-next" className="join-item">...</span>
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

  if (isLoading) {
    return <Loader />;
  }

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
                {allCategory?.map((category) => (
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
                {homePageShownCourse?.length === 0 ? (
                  <div className="text-2xl font-bold text-gray-500 mt-10">
                    No courses available for this category
                  </div>
                ) : (
                  <div className="mb-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      {homePageShownCourse?.map((course) => (
                        <CourseCard key={course._id} course={course} />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Pagination Controls */}
              {currentPage > 1 || courses?.length >= itemsPerPage ? (
                <div className="join border mx-auto">{renderPagination()}</div>
              ) : (
                <div className="join border mx-auto">
                  <button className="join-item btn btn-md" onClick={() => setCurrentPage(1)}>
                    1
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
