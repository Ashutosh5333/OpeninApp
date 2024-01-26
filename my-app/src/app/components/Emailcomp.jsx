"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';



const Emailcomp = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
       
    if (formData.email === "" || formData.password === "") {
      toast.error("Fill both fields");
    } else {
      router.push("/dashboard")
      toast.success("Login Successfully");
    }

  };


  return (
    <>
      <div className="w-[100%] sm:w-[90%]  m-auto sm:px-8 sm:py-8  shadow-md rounded-lg ">
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone" className="m-1 font-normal  text-sm">
            Email address
          </label>
          <div className="flex mb-2 justify-between py-1  items-center">
            <input
              type="email"
              name="email"
              className={`w-full text-sm px-4 rounded-lg p-2  bg-[#F5F5F5] `}
              placeholder=" Email Address"
              onChange={handleInputChange}
            />
          </div>
         

          <label htmlFor="password" className="m-1 font-normal   text-sm">
            Password
          </label>

          <div className="relative py-1 pb-5">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className={`appearance-none  relative block w-full px-5  bg-[#F5F5F5] text-sm
              border-none text-black p-2 rounded-lg z-10 `}
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
         

          <label
            htmlFor="Forget"
            className="m-1 mt-5 py-6 font-semibold text-[#346BD4]  text-sm"
          >
            Forgot password?
          </label>
          <div
           onClick={handleSubmit}
            className={`py-1 px-2 mt-5 bg-[#605BFF] flex items-center justify-center cursor-pointer border-yellow-600 rounded-md`}
          >
            <button
              type="submit"
              className={`text-white hover:cursor-pointer py-1 px-2 font-semibold text-sm text-center`}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Toaster />
    </>
  );
};

export default Emailcomp;
