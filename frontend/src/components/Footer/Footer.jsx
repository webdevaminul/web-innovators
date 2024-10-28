import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookCircleLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";
import { MdPhoneIphone, MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="p-2 md:p-4 lg:p-5 bg-backgroundShadeOne text-center md:text-left">
      <div className="grid gap-5 grid-cols-12 my-6 sm:my-8 md:my-10">
        {/* Logo */}
        <div className="col-span-12 md:col-span-3 flex gap-2 flex-col items-center md:items-start">
          <Link to="/" className="w-fit flex items-center gap-1">
            <img src={logo} alt="LearnUP" className="w-7" />
            <h1 className="font-bold text-3xl md:text-3xl font-ubuntu text-textBlue">
              Learn<span className="text-textOrange">UP</span>
            </h1>
          </Link>
          <p>Simplifies course management by connecting teachers and students.</p>
        </div>

        {/* service div */}
        <div className="flex flex-col col-span-6 md:col-span-3 gap-1">
          <h6 className="font-medium mb-2">Services</h6>
          <Link className="link link-hover text-textPrimary">All Courses</Link>
          <Link className="link link-hover text-textPrimary">Enrollment</Link>
          <Link className="link link-hover text-textPrimary">Latest Courses</Link>
        </div>

        {/* company div */}
        <div className="flex flex-col col-span-6 md:col-span-3 gap-1">
          <h6 className="font-medium mb-2">Company</h6>
          <Link className="link link-hover text-textPrimary">About us</Link>
          <Link className="link link-hover text-textPrimary">Contact</Link>
          <Link className="link link-hover text-textPrimary">Educators</Link>
        </div>

        {/* contact div */}
        <div className="col-span-12 md:col-span-3">
          <h6 className="font-medium mb-2">Our Contact Information</h6>

          <div className="flex flex-col justify-between items-center md:items-start gap-1">
            <div className="flex gap-3 md:gap-2 md:flex-col justify-evenly flex-wrap">
              <p className="flex justify-start items-center gap-1 md:gap-2 flex-nowrap text-nowrap">
                <MdPhoneIphone /> +880 1836908974
              </p>
              <p className="flex justify-start items-center gap-1 md:gap-2 flex-nowrap text-nowrap">
                <FaWhatsapp /> +880 1836908974
              </p>
              <p className="flex justify-start items-center gap-1 md:gap-2 flex-nowrap text-nowrap">
                <span>
                  <MdOutlineMail />
                </span>
                <span>learnup@gmail.com</span>
              </p>
            </div>

            <div className="flex justify-between items-center gap-5">
              <Link className="link link-hover text-textPrimary text-2xl">
                <RiFacebookCircleLine />
              </Link>
              <Link className="link link-hover text-textPrimary text-xl">
                <SlSocialLinkedin />
              </Link>
              <Link className="link link-hover text-textPrimary text-xl pt-[2px]">
                <BsGithub />
              </Link>
            </div>
          </div>
        </div>
        <p className="mb-3 col-span-12 text-center text-sm text-textPrimary/50">
          Copyright © {new Date().getFullYear()} - All right reserved by LearnUp.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
