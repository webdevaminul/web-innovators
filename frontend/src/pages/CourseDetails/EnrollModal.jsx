import React from "react";

const EnrollModal = ({ showModal, modalHandler }) => {
  return (
    <div>
      {showModal && (
        <div
          id="modal"
          className={`fixed inset-0 z-10 bg-gray-700 bg-opacity-50 flex justify-center items-center transition-opacity duration-200 ease-in-out ${
            showModal ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <div className="w-full flex justify-start text-gray-600 mb-3">
                {/* SVG Icon */}
              </div>
              <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                Enter Billing Details
              </h1>

              {/* Owner Name Input */}
              <label className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
                Owner Name
              </label>
              <input
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="James"
              />

              {/* Other input fields */}
              <div className="flex items-center justify-start w-full">
                <button className="bg-indigo-700 text-white rounded px-8 py-2 text-sm">
                  Submit
                </button>
                <button
                  className="ml-3 bg-gray-100 text-gray-600 rounded px-8 py-2 text-sm"
                  onClick={() => modalHandler(false)}
                >
                  Cancel
                </button>
              </div>

              <button
                className="absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600"
                onClick={() => modalHandler(false)}
              >
                {/* Close Icon */}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnrollModal;
