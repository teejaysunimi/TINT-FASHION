import React from 'react'
import logo from '../assets/images/logo.jpg'
import { Menu, X } from 'lucide-react'
import { useState } from 'react';

export const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toogleNavbar =()=> { setMobileDrawerOpen(!mobileDrawerOpen)}
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg  bg-black text-white">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className=" md:flex flex-col justify-end">
            <button onClick={toogleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}{" "}
            </button>
            <ul className="lg:hidden  ml-14 space-x-12">
              <li>Home </li>
              <li>Page </li>
              <li> Services </li>
            </ul>
          </div>
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-50 ml-10 space-x-12" src={logo} alt="" />
          </div>
          {/* <ul className="hidden lg:flex ml-14 space-x-12">
            <li>Home </li>
            <li>Page </li>
            <li> Services </li>
          </ul> */}
          <div className="hidden lg:flex justify-center ml-14 space-x-12 items-center">
            Add to cart
          </div>
        </div>
        <div className="fixed right-0 z-20 bg-neutral-900 w-full flex flex-col justify-center items-center lg:hidden">
          <ul className="justify-center items-center">
            <li className="py-4 ">Home </li>
            <li className="py-4 ">Page </li>
            <li className="py-4 "> Services </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
            