import React from "react";
import { RiFacebookCircleLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsGithub } from "react-icons/bs";
import { MdPhoneIphone, MdOutlineMail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-black mt-6 text-white gap-5 p-8 md:p-10 grid grid-cols-2 md:grid-cols-4">
        {/* aside and Innovators Name */}
        <div className="col-span-2 md:col-span-1 text-center md:text-left">
          <p className="text-3xl font-medium mb-5">Innovators</p>
          <p>
            Simplifies course management by connecting teachers and students on
            one platform.
          </p>
        </div>

        {/* service div */}
        <div className="flex flex-col col-span-1 md:col-span-1 text-center md:text-left">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Courses</a>
          <a className="link link-hover">Enrollment</a>
          <a className="link link-hover">Latest Courses</a>
        </div>

        {/* company div */}
        <div className="flex flex-col col-span-1 md:col-span-1 text-center md:text-left">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Educators</a>
        </div>

        {/* contact div */}
        <div className="col-span-2 md:col-span-1 text-center md:text-left">
          <h6 className="footer-title">Our Contact Information</h6>

          <div className="flex flex-col justify-between items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex md:flex-col justify-evenly gap-3 flex-wrap">
              <p className="flex justify-start items-center gap-1 flex-nowrap text-nowrap">
                <MdPhoneIphone></MdPhoneIphone> +880 1836908974
              </p>
              <p className="flex justify-start items-center gap-1 flex-nowrap text-nowrap">
                <FaWhatsapp></FaWhatsapp> +880 1836908974
              </p>
              <p className="flex justify-start items-center gap-1 flex-nowrap text-nowrap">
                <MdOutlineMail></MdOutlineMail>{" "}
                <a className="link link-hover" href="">
                  learnup@gmail.com
                </a>
              </p>
            </div>
            <div className="flex justify-between items-center gap-5">
              <a className="link link-hover text-xl">
                <RiFacebookCircleLine></RiFacebookCircleLine>
              </a>
              <a className="link link-hover text-xl">
                <SlSocialLinkedin></SlSocialLinkedin>
              </a>
              <a className="link link-hover text-xl">
                <BsGithub></BsGithub>
              </a>
            </div>
          </div>
        </div>
        <p className="mt-5 col-span-2 md:col-span-4 text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by
          LearnUp.
        </p>
      </footer>
    </>
  );
};

export default Footer;
