import PropTypes from 'prop-types';
import { RxCross1 } from "react-icons/rx";
import { categories } from '../../utils/category';
import { useState } from 'react';

const UpdateCourse = ({ courseData, isModalOpen, setIsModalOpen }) => {
    const [selectedOption, setSelectedOption] = useState()
    console.log('selected', selectedOption || courseData?.category)

    const allCategory = categories;
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // await axiosInstance.put(`/update/courses/${course._id}`, formData);
            // alert("Course updated successfully!");
            // onClose(); // Close modal and refresh

            const from = e.target;
            const title = from.title.value;
            const price = from.newPrice.value;
            console.log('hello world', title, price);

        } catch (error) {
            console.error("Failed to update course:", error);
        }
    };

    return (
        <div className="p-8 mb-4 flex items-center gap-5 justify-center">
            <div
                className={`${isModalOpen ? "visible" : "invisible"
                    } w-full h-full fixed top-0 left-0 z-50 bg-black bg-opacity-20 flex items-center justify-center transition-all duration-300`}
            >
                <div
                    className={`${isModalOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
                        } w-[90%] md:w-[80%] lg:w-[75%] bg-white rounded-lg transition-all duration-300 mx-auto mt-8 p-8 max-h-[90vh] overflow-y-auto`}
                >
                    <div className="w-full flex items-end p-4 justify-between border-b border-gray-300">
                        <h1 className="md:text-2xl text-base font-bold text-black">Update Your Course</h1>
                        <RxCross1
                            className="p-2 text-[2.5rem] hover:bg-gray-200 rounded-full transition-all duration-300 cursor-pointer"
                            onClick={() => setIsModalOpen(false)}
                        />
                    </div>

                    <form onSubmit={handleSubmit} className="w-full mt-4">

                        {/* Course Name and Category */}
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                            <div className="md:w-1/2">
                                <label className='md:text-xl text-base'>
                                    Course New name
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    placeholder={courseData?.title}
                                    className="peer border-gray-200 border rounded-md outline-none px-4 py-2 w-full focus:border-blue-500 transition-colors duration-300"
                                />
                            </div>

                            <div className="md:w-1/2">
                                <label className="md:text-xl text-base">
                                    Course New Category
                                </label>
                                <select
                                    value={selectedOption}
                                    onChange={(e) => setSelectedOption(e.target.value)}
                                    defaultValue={courseData?.category}
                                    className="peer border-gray-200 border rounded-md outline-none px-4 py-2 w-full focus:border-blue-500 transition-colors duration-300"
                                >
                                    <option value=""> {courseData?.category} </option>
                                    {allCategory.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Course Price */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 md:my-4">
                            <div className="md:w-1/2">
                                <label className='md:text-xl text-base'>
                                    Course New Price
                                </label>
                                <input
                                    type="number"
                                    name="newPrice"
                                    placeholder={courseData?.price}
                                    className="peer border-gray-200 border rounded-md outline-none px-4 py-2 w-full focus:border-blue-500 transition-colors duration-300"
                                />
                            </div>

                            <div className="md:w-1/2">
                                <label className='md:text-xl text-base'>
                                    Course Old Price
                                </label>
                                <input
                                    type="number"
                                    placeholder={courseData?.oldPrice}
                                    className="peer border-gray-200 border rounded-md outline-none px-4 py-2 w-full focus:border-blue-500 transition-colors duration-300"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 w-full mt-5">
                            <label className="md:text-xl text-base w-full">New Description
                            </label>
                            <textarea placeholder={courseData?.detailsCourse}
                                className="peer min-h-[200px] border-gray-200 border rounded-md outline-none px-4 py-3 w-full focus:border-blue-500 transition-colors duration-300"
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="py-3 px-4 border border-blue-500 rounded-md outline-none mt-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

UpdateCourse.propTypes = {
    courseData: PropTypes.object,
    isModalOpen: PropTypes.bool,
    setIsModalOpen: PropTypes.func,
}

export default UpdateCourse;