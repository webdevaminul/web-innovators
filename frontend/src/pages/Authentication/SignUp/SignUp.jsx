import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { MdError, MdCheckCircle, MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import axiosInstance from "../../../api/axiosInstance";
import Heading from "../../../utils/Heading";
import GoogleLogIn from "../../../components/GoogleLogIn/GoogleLogIn";

// TODO: Turn off auto complete

export default function SignUp() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [passValue, setPassValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define the mutation for the signup process
  const signUpMutation = useMutation({
    mutationFn: async (formData) => {
      const res = await axiosInstance.post("/auth/signup", formData);
      console.log(res.data);
      return res.data;
    },
    onSuccess: (data) => {
      setError(null); // Clear any previous error message
      setSuccess(null); // Clear any previous success message
      if (!data.success) {
        setError(data.message);
      } else {
        setSuccess(data.message);
      }
    },
    onError: (error) => {
      setError(error.response?.data?.message || "Something went wrong. Please try again.");
      setSuccess(null);
    },
  });

  // Handle form submission
  const onSubmit = async (formData) => {
    signUpMutation.mutate(formData);
    console.log(formData);
  };

  return (
    <main className="min-h-[calc(100vh-3.8rem)] max-w-xs mx-auto flex items-center justify-center">
      <Heading heading={"Sign Up"} />
      <section className="flex flex-col gap-3 justify-center p-4 w-full ">
        {/* Switch between signup and signin */}
        <div>
          <p className="text-2xl sm:text-3xl my-1">Sign up</p>
          <p className="text-sm">Fill in the form to create your account</p>
        </div>

        {/* Sign up form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          {/* User name input */}
          <div
            className={`flex items-center border rounded ${
              errors.userName ? "border-red-500" : "border-border"
            } mt-4 `}
          >
            <span className="p-2 text-xl text-text/75">
              <FiUser />
            </span>
            <input
              type="text"
              placeholder="User name*"
              className={`bg-transparent outline-none placeholder:text-text/75 p-2 w-full`}
              {...register("userName", {
                required: "User name is required",
                maxLength: {
                  value: 24,
                  message: "User Name can't be more than 24 characters long",
                },
                onChange: () => {
                  setError(null);
                  setSuccess(null);
                },
              })}
              aria-invalid={errors.userName ? "true" : "false"}
            />
          </div>
          {errors.userName && (
            <p role="alert" className="text-red-500">
              {errors.userName.message}
            </p>
          )}

          {/* Email address input */}
          <div
            className={`flex items-center border rounded ${
              errors.userEmail ? "border-red-500" : "border-border"
            } mt-4 `}
          >
            <span className="p-2 text-xl text-text/75">
              <MdOutlineEmail />
            </span>
            <input
              type="email"
              placeholder="Email address*"
              className={`bg-transparent outline-none placeholder:text-text/75 p-2 w-full`}
              {...register("userEmail", {
                required: "Email address is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
                onChange: () => {
                  setError(null);
                  setSuccess(null);
                },
              })}
              aria-invalid={errors.userEmail ? "true" : "false"}
            />
          </div>
          {errors.userEmail && (
            <p role="alert" className="text-red-500">
              {errors.userEmail.message}
            </p>
          )}

          {/* Create password input */}
          <div
            className={`flex items-center border rounded ${
              errors.userPassword ? "border-red-500" : "border-border"
            } mt-4 `}
          >
            <span className="p-2 text-xl text-text/75">
              <MdOutlineLock />
            </span>
            <input
              type={`${showPassword ? "tex" : "password"}`}
              placeholder="Create password*"
              className={`bg-transparent outline-none placeholder:text-text/75 p-2 w-full`}
              {...register("userPassword", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                maxLength: {
                  value: 24,
                  message: "Password can't be more than 24 characters long",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                  message: "Password must contain at least one letter and one number",
                },
                onChange: () => {
                  setError(null);
                  setSuccess(null);
                  setPassValue(event.target.value);
                },
              })}
              aria-invalid={errors.userPassword ? "true" : "false"}
            />
            {passValue.length > 0 && (
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="p-2 text-xl text-text/75"
              >
                {showPassword ? (
                  <FaRegEyeSlash className="cursor-pointer" />
                ) : (
                  <FaRegEye className="cursor-pointer" />
                )}
              </span>
            )}
          </div>
          {errors.userPassword && (
            <p role="alert" className="text-red-500">
              {errors.userPassword.message}
            </p>
          )}

          {/* Error message */}
          {error && (
            <p className="text-textWhite bg-red-600 rounded p-2 mt-4 flex gap-2">
              <span className="text-xl">
                <MdError className="text-textWhite mt-1" />
              </span>
              <span>{error}</span>
            </p>
          )}

          {/* Success message */}
          {success && (
            <p className="text-textBlack bg-green-400 rounded p-2 mt-4 flex gap-2">
              <span className="text-xl">
                <MdCheckCircle className="text-textBlack mt-1" />
              </span>
              <span>{success}</span>
            </p>
          )}

          {/* Sign up button */}
          <button
            disabled={signUpMutation.isLoading}
            type="submit"
            className="p-2 mt-4 bg-backgroundBlue hover:bg-backgroundBlueHover border-none rounded text-textWhite disabled:bg-disabled disabled:cursor-not-allowed select-none"
          >
            {signUpMutation.isLoading ? "Loading..." : "Sign up"}
          </button>
        </form>

        {/* Google Button */}
        <GoogleLogIn />

        <p className="text-sm">
          <span>Already have an acoount?</span>
          <span>
            <Link to="/sign-in" className="text-textBlue hover:underline ml-1">
              sign in here
            </Link>
          </span>
        </p>
      </section>
    </main>
  );
}
