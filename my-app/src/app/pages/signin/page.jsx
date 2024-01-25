import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import Emailcomp from "../../components/Emailcomp";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";

const page = () => {
  return (
    <>
      <div
        className="Main-Container min-h-screen border-2   border-green-700 w-[100%] m-auto
        flex flex-col sm:flex-row"
      >
        <div className="Leftside hidden sm:block w-[100%] sm:w-[50%] py-4 
        border-red-600 bg-[url('/assets/Leftbackground.svg')]  bg-cover">
          <div className=" py-2 w-[90%] border-red-600 m-auto ">
            <Image
              src={"/assets/SigninIcon.svg"}
              width={80}
              height={80}
              alt="SignIcon"
              className="overflow-hidden"
            />
            <Image
              src={"/assets/vector.png"}
              width={100}
              height={10}
              alt="ellipse"
              className=" border-black right-2 relative top-[-55px] 
                  "
            />
          </div>

          <h2 className="text-center relative top-[12%] text-6xl text-[#FFFFFF] ">
            {" "}
            BASE{" "}
          </h2>

          <div className="footer-icons relative top-[40%]  py-2  flex gap-5 justify-center mt-8">
            <a
              href="https://github.com/"
              target="_blank"
              className="text-gray-500 mx-2"
            >
                <FaGithub className="text-4xl text-[#FFFFFF]"/>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="text-gray-500 mx-2"
            >
               <AiFillTwitterCircle className="text-4xl text-[#FFFFFF]"/>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="text-gray-500  mx-2"
            >
                <FaLinkedin className="text-4xl text-[#FFFFFF]"/>
            </a>
            <a
              href="https://www.discord.com/"
              target="_blank"
              className="text-gray-500  mx-2"
            >
               <BiLogoDiscord className="text-4xl text-[#FFFFFF]"/>
            </a>
          </div>
        </div>

        {/* mobile-container */}

        <div className="Leftside-mobile w-[100%] sm:hidden sm:w-[50%] py-2  border-red-600 bg-[#605BFF] bg-cover relative">
          <div className="py-4 w-[90%] border-red-600 m-auto text-start">
            <Image
              src={"/assets/SigninIcon.svg"}
              width={30}
              height={30}
              alt="SignIcon"
              className="overflow-hidden inline-block"
            />
            <Image
              src={"/assets/vector.png"}
              width={40}
              height={10}
              alt="ellipse"
              className="border-black relative right-10 top-[-1px] inline-block"
            />
          </div>
          <div className="text-[#FFFFFF] absolute left-24 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2>BASE</h2>
          </div>
        </div>

        <div className="Rightside w-[100%] sm:w-[50%]  border-green-600 flex justify-center items-center">
          <div className="signin-box w-[95%] sm:w-[80%] h-[90vh]   border-green-600 m-auto">
            <div className="w-[100%] sm:w-[90%] px-2 py-4  border-red-600 m-auto">
              <h1 className="text-start p-2 text-xl sm:text-4xl font-semibold ">
                {" "}
                Sign In{" "}
              </h1>
              <p className="text-start px-2 py-2 text-sm sm:text-base font-normal  ">
                {" "}
                Sign in to your account{" "}
              </p>

              <div className="Sign-box py-2 border-black px-2 sm:px-6 sm:p-4 flex items-center justify-between">
                <div className="flex items-center px-4 sm:px-6 p-2 shadow-lg rounded-lg ">
                  <FcGoogle className="text-blue-600 text-xl mr-2" />
                  <span className="text-[#858585] text-[.5rem] sm:text-[.8rem] font-Montserrat">
                    {" "}
                    Sign in with Google
                  </span>
                </div>

                <div className="flex items-center px-4 sm:px-6 shadow-lg rounded-lg p-2">
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
                  <h2 className="text-[#858585] text-sm sm:text-base font-normal">
                    Don't have an account?{" "}
                  </h2>
                  <h2 className="text-[#605BFF] hover:cursor-pointer text-base font-normal sm:text-base ">
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
    </>
  );
};

export default page;