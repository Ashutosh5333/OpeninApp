"use client";
import React, { useState } from "react";

const Emailcomp = () => {
   const [loading, setLoading] = useState(false);
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

  const handleSubmit = () => {};

  const isFormValid = () => {
    const { email, password } = formData;
    return email.trim() !== "" && password.trim() !== "";
  };

  return (
    <>
      <div className="w-[100%] sm:w-[90%] m-auto sm:px-8 sm:py-8  shadow-lg rounded-lg ">
        <form onSubmit={handleSubmit}>
          <label htmlFor="phone" className="m-1 font-semibold  text-sm">
            Email address
          </label>
          <div className="flex justify-between py-1  items-center">
            <input
              type="email"
              name="email"
              className="w-full text-sm px-4 rounded-lg
             p-2  bg-[#F5F5F5]"
              placeholder=" Email Address"
              onChange={handleInputChange}
            />
          </div>
          <label htmlFor="password" className="m-1 font-semibold   text-sm">
            Password
          </label>

          <div className="relative py-1 pb-5">
            <input
              id="password"
              name="password"
              type={"password"}
              autoComplete="current-password"
              required
              className="appearance-none  relative block
           w-full px-5  bg-[#F5F5F5] text-sm
              border-none text-black
                p-2 rounded-lg
               z-10 "
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
            className={`py-1 px-2 mt-5 
          bg-[#605BFF]
       flex items-center justify-center
        cursor-pointer 
       border-yellow-600 rounded-md`}
          >
            <button
              type="submit"
              disabled={loading}
              className={`text-white hover:cursor-pointer
               py-1 px-2 font-semibold text-sm text-center `}
            >
              {loading ? (
                <div className="w-[50%] flex items-center h-[15px] m-auto  ">
                  <Image
                    src={`https://s3.us-east-2.amazonaws.com/sikkaplay.com-assets/assets/users/loading.gif`}
                    alt="loader"
                    width={200}
                    height={100}
                  />
                </div>
              ) : (
                "Sign in"
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Emailcomp;
