import { useState } from "react";
import Heading from "../../utils/Heading";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Main Heading */}
      <Heading heading={"Contact"} />
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-6 p-8 rounded-lg shadow-lg"
        style={{ backgroundColor: "rgba(var(--accent-one-color))" }} // Dynamic color
      >
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/contact01.jpg"
            alt="Contact Us"
            className="hidden md:block w-full h-auto object-cover shadow-xl"
            style={{
              clipPath: "ellipse(75% 100% at 0% 50%)", // Creates a wider ellipse-like effect on the left
              maxHeight: "500px",
            }}
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2">
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "rgb(var(--text-color))" }} // Dynamic color
          >
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full p-3 rounded border"
              style={{
                backgroundColor: "rgba(var(--input-bg-color))", // Dynamic background color
                borderColor: "rgb(var(--border-color))", // Dynamic border color
                color: "rgb(var(--text-color))", // Dynamic text color
              }}
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter a valid email address"
              className="w-full p-3 rounded border"
              style={{
                backgroundColor: "rgba(var(--input-bg-color))", // Dynamic background color
                borderColor: "rgb(var(--border-color))", // Dynamic border color
                color: "rgb(var(--text-color))", // Dynamic text color
              }}
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full p-3 rounded border"
              style={{
                backgroundColor: "rgba(var(--input-bg-color))", // Dynamic background color
                borderColor: "rgb(var(--border-color))", // Dynamic border color
                color: "rgb(var(--text-color))", // Dynamic text color
              }}
              rows="4"
              required
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mr-2"
                required
              />
              <label
                className="text-sm"
                style={{ color: "rgb(var(--text-color))" }} // Dynamic text color
              >
                I accept the{" "}
                <a
                  href="#"
                  style={{ color: "rgb(var(--primary-color))" }} // Dynamic link color
                  className="underline"
                >
                  Terms of Service
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded"
              style={{
                backgroundColor: "rgb(var(--secondary-color))", // Dynamic button background color
                color: "rgb(var(--text-reversed-color))", // Dynamic text color
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Contact Info Section */}
      <h2
        className="text-3xl font-bold text-center my-6"
        style={{ color: "rgb(var(--text-color))" }}
      >
        Contact Information
      </h2>
      <div className="mt-10 flex flex-wrap gap-6 justify-between">
        <div
          className="p-6 rounded-lg shadow-md flex-1 text-center"
          style={{
            backgroundColor: "rgb(var(--secondary-color))", // Dynamic background color
            color: "rgb(var(--text-reversed-color))", // Dynamic text color
          }}
        >
          <h3 className="text-xl font-bold mb-2">Call Us</h3>
          <p>1 (234) 567-891, 1 (234) 987-654</p>
        </div>
        <div
          className="p-6 rounded-lg shadow-md flex-1 text-center"
          style={{
            backgroundColor: "rgb(var(--secondary-color))", // Dynamic background color
            color: "rgb(var(--text-reversed-color))", // Dynamic text color
          }}
        >
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <p>121 Rock Street, 21 Avenue, New York, NY 92103-9000</p>
        </div>
        <div
          className="p-6 rounded-lg shadow-md flex-1 text-center"
          style={{
            backgroundColor: "rgb(var(--secondary-color))", // Dynamic background color
            color: "rgb(var(--text-reversed-color))", // Dynamic text color
          }}
        >
          <h3 className="text-xl font-bold mb-2">Hours</h3>
          <p>Mon - Fri: 11 am - 8 pm, Sat, Sun: 6 am - 8 pm</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
