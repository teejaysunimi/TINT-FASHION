import React from 'react'
import logo from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    // <div className="h-10 w-full bg-red-200 flex ">    </div>
    <div className=" text-center bg-black text-white gap-50 cursor-pointer justify-between">
      <div className="flex items-center flex-shrink-0">
        <img className="h-10 w-30 ml-10 space-x-12" src={logo} alt="" />
        <p></p>
      </div>
      <div className="">
        <h1>Services</h1>
      </div>
      <div className="">
        <h1>Services</h1>
      </div>
      <div className="">
        {/* <input type="email" placeholder="Email Address" id="email" />
        <button>Submit</button> */}
      </div>
      <div className="">
        <h1>Service</h1>
      </div>
    </div>
  );
}

export default Footer

