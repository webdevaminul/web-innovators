import React from "react";
import { Link } from "react-router-dom";
import { RiFacebookCircleLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";
import { MdPhoneIphone, MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-accentOne py-4">
      <div className="container mx-auto font-bai gap-5 md:py-10 grid grid-cols-2 md:grid-cols-4">
        {/* Innovators Name */}
        <div className="md:mt-10 col-span-2 md:col-span-1 text-center md:text-left">
          <div className="mb-2">
            <Link to="/">
              <h1 className="font-bold text-2xl md:text-3xl font-ubuntu">
                Learn<span className="text-secondary">UP</span>
              </h1>
            </Link>
          </div>
          <p>Simplifies course management by connecting teachers and students.</p>
        </div>

        {/* service div */}
        <div className="md:mt-10 flex flex-col col-span-1 md:col-span-1 text-center md:text-left">
          <h6 className="font-medium mb-2">Services</h6>
          <Link className="link link-hover">All Courses</Link>
          <Link className="link link-hover">Enrollment</Link>
          <Link className="link link-hover">Latest Courses</Link>
        </div>

        {/* company div */}
        <div className="md:mt-10 flex flex-col col-span-1 md:col-span-1 text-center md:text-left">
          <h6 className="font-medium mb-2">Company</h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Educators</Link>
        </div>

        {/* contact div */}
        <div className="md:mt-10 col-span-2 md:col-span-1 text-center md:text-left">
          <h6 className="font-medium mb-2">Our Contact Information</h6>

          <div className="flex flex-col justify-between items-center md:items-start gap-3 text-center md:text-left">
            <div className="flex md:flex-col justify-evenly flex-wrap">
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
              <Link className="link link-hover text-2xl">
                <RiFacebookCircleLine />
              </Link>
              <Link className="link link-hover text-xl">
                <SlSocialLinkedin />
              </Link>
              <Link className="link link-hover text-xl pt-[2px]">
                <BsGithub />
              </Link>
            </div>
          </div>
        </div>
        <p className="mt-3 col-span-2 md:col-span-4 text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by LearnUp.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
