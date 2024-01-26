import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";
import Emailcomp from "./components/Emailcomp";

export default function Home() {
  return (
    <main>
      <div
        className="Main-Container h-screen md:h-[100vh] lg:h-auto   border-green-700 w-full m-auto
        flex flex-col sm:flex-row"
      >
        <div
          className="Leftside hidden sm:block w-[100%] h-screen sm:w-1/2  
        border-red-600 bg-[url('/assets/Leftbackground.svg')]  bg-cover"
        >
          <div className=" py-4 w-[90%] border-red-600 m-auto ">
            <Image
              src={"/assets/MainIcon.svg"}
              width={300}
              height={100}
              alt="SignIcon"
            />
           
          </div>

          <h2 className="text-center font-bold relative sm:top-[30%] lg:top-[15%] text-6xl text-[#FFFFFF] ">
            {" "}
            BASE{" "}
          </h2>

          <div className="footer-icons relative sm:top-[60%] lg:top-[40%]  py-2  flex gap-5 justify-center mt-8">
            <a
              href="https://github.com/"
              target="_blank"
              className="text-gray-500 mx-2"
            >
              <FaGithub className="text-4xl text-[#FFFFFF]" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="text-gray-500 mx-2"
            >
              <AiFillTwitterCircle className="text-4xl text-[#FFFFFF]" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="text-gray-500  mx-2"
            >
              <FaLinkedin className="text-4xl text-[#FFFFFF]" />
            </a>
            <a
              href="https://www.discord.com/"
              target="_blank"
              className="text-gray-500  mx-2"
            >
              <BiLogoDiscord className="text-4xl text-[#FFFFFF]" />
            </a>
          </div>
          

        </div>

        <div className="Leftside-mobile w-[100%] sm:hidden sm:w-1/2 py-2  border-red-600 bg-[#605BFF] bg-cover relative">
          <div className="py-4 w-[90%] border-red-600 m-auto text-start">
            <Image
              src={"/assets/mobilenavlogo.png"}
              width={100}
              height={100}
              alt="SignIcon"
              className=" inline-block"
            />
            
          </div>
         
        </div>

        <div className="Rightside  w-[100%]  md:w-[50%]  border-green-600 flex justify-center items-center">
          <div className="signin-box w-[95%] sm:w-[100%] lg:w-[80%] py-2 border-green-600 m-auto">
            <div className="w-[100%] md:w-[100%] lg:w-[90%] px-2 py-4 lg:py-4  border-red-600 m-auto">
              <h1 className="text-start p-2 md:px-4 text-xl sm:text-4xl font-semibold ">
                {" "}
                Sign In{" "}
              </h1>
              <p className="text-start px-2 py-2 md:px-4 text-sm sm:text-sm font-normal  ">
                {" "}
                Sign in to your account{" "}
              </p>

              <div
                className="Sign-box  py-2 px-2  border-black 
              lg:px-4  flex items-center justify-between"
              >
                <div className="flex items-center px-4 sm:px-2 lg:px-6 p-2 shadow-sm rounded-lg ">
                  <FcGoogle className="text-blue-600 text-xl mr-2" />
                  <span className="text-[#858585] text-[.5rem] sm:text-[.8rem] font-Montserrat">
                    {" "}
                    Sign in with Google
                  </span>
                </div>

                <div className="flex items-center px-4 sm:px-2 lg:px-6 shadow-sm rounded-lg p-2">
                  <GrApple className="text-black text-xl mr-2" />
                  <span className="text-[#858585] text-[.5rem] sm:text-[.8rem] font-Montserrat">
                    {" "}
                    Sign in with Apple{" "}
                  </span>
                </div>
              </div>

              <Emailcomp />

              <div className="py-5 px-2 flex items-center justify-center border-yellow-600 rounded-md">
                <div className="flex justify-between gap-2">
                  <h2 className="text-[#858585] text-sm sm:text-sm font-normal">
                    Don't have an account?{" "}
                  </h2>
                  <h2 className="text-[#605BFF] hover:cursor-pointer text-base font-normal sm:text-sm ">
                    {" "}
                    Register here
                  </h2>
                </div>
              </div>
            </div>

            <div className="footer-icons sm:hidden relative   py-2  flex gap-2 justify-center mt-8">
              <a
                href="https://github.com/"
                target="_blank"
                className="text-gray-500 mx-2"
              >
                <FaGithub className="text-4xl text-[#858585]" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                className="text-gray-500 mx-2"
              >
                <AiFillTwitterCircle className="text-4xl text-[#858585]" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                className="text-gray-500  mx-2"
              >
                <FaLinkedin className="text-4xl text-[#858585]" />
              </a>
              <a
                href="https://www.discord.com/"
                target="_blank"
                className="text-gray-500  mx-2"
              >
                <BiLogoDiscord className="text-4xl text-[#858585]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
