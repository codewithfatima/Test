import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../src/assets/Logo.png";
import { IoCart } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { useCartStore } from "../store/cardStore";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {cart } = useCartStore();

  const totalItems = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    : 0;

  return (
    <>
      <nav className="bg-[#061536] text-white w-full py-5 px-9 shadow-lg">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center ">
            <img src={Logo} className="w-[45px] h-[45px]" alt="Logo" />
            <h1 className="font-bold text-[30px] ml-3 cursor-pointer">
              My<span className="text-yellow-500">Store</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-6 text-md items-center">
            <li className="hover:text-yellow-500 hover:underline underline-offset-4 decoration-2">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-yellow-500 hover:underline underline-offset-4 decoration-2">
              <Link to="/productPage">Products</Link>
            </li>
            <li className="hover:text-yellow-500 hover:underline underline-offset-4 decoration-2">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-yellow-500 hover:underline underline-offset-4 decoration-2">
              <Link to="/contact">Contact Us</Link>
            </li>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <IoCart size={25} className="cursor-pointer hover:text-yellow-500" />
              {totalItems > 0 && (
                <span className="absolute bg-red-500 rounded-full px-1.5 py-0.5 text-[10px] -top-2 -right-2 text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </ul>

          {/* Mobile Menu Icon */}
          <div
            className="md:hidden text-xl cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Nav Links */}
        <div
          className={`md:hidden flex bg-[#061536] transition-all duration-500 ease-in-out ${
            open ? "max-h-[300px]" : "max-h-0 overflow-hidden"
          }`}
        >
          <ul className="flex flex-col items-start px-2 py-2 space-y-2 text-sm gap-3 mt-5">
            <li onClick={() => setOpen(false)}>
              <Link
                to="/"
                className="hover:text-yellow-500 hover:underline underline-offset-4 decoration-2"
              >
                Home
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link
                to="/productPage"
                className="hover:text-yellow-500 hover:underline underline-offset-4 decoration-2"
              >
                Products
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link
                to="/about"
                className="hover:text-yellow-500 hover:underline underline-offset-4 decoration-2"
              >
                About Us
              </Link>
            </li>
            <li onClick={() => setOpen(false)}>
              <Link
                to="/contact"
                className="hover:text-yellow-500 hover:underline underline-offset-4 decoration-2"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
