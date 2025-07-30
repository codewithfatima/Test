import React from 'react';
import Logo from '../../src/assets/Logo.png';
import { Link } from "react-router-dom";
import { FaInstagram, FaPinterest, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-[#061536] mt-10 pt-6 pb-4 mt-20 '>
            <div className="flex flex-col sm:flex-row sm:justify-between px-10">

                <div className=''>
                    <div className="flex items-center text-white mb-4 ">
                        <img src={Logo} className="w-[25px] h-[25px]" />
                        <h1 className="font-bold text-[20px] ml-3 cursor-pointer">My<span className="text-yellow-500">Store</span></h1>
                    </div>

                    <div className='text-white font-Arial m-3 w-[330px] '>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Labore ipsa molestiae fuga vero beatae voluptatem, adipisci,
                            eveniet voluptatum, ut doloribus maiores dolores! Ipsam velit
                            eius repellendus fugiat eaque atque, voluptate quod est.</p>

                    </div>


                    {/* Social */}
                    <div className="flex gap-4 text-white hover:text-yellow-500 mb-5 ml-3">
                        <FaInstagram />
                        <FaPinterest />
                        <FaEnvelope />
                    </div>
                </div>

                {/* Links */}
                <div className="text-white mt-10">
                    <h3 className="font-bold mb-2">Quick Links</h3>
                    <ul className='space-y-1'>
                        <li className='hover:text-yellow-500 hover:underline  underline-offset-4 decoration-2'><Link to="/">Home</Link></li>
                        <li className='hover:text-yellow-500 hover:underline  underline-offset-4 decoration-2'><Link to="/products">Products</Link></li>
                        <li className='hover:text-yellow-500 hover:underline  underline-offset-4 decoration-2'><Link to="/about">About Us</Link></li>
                        <li className='hover:text-yellow-500 hover:underline  underline-offset-4 decoration-2'><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="text-white mt-4 sm:mt-0 pt-10">
                    <p className="mb-2">Subscribe to our newsletter</p>
                    <input type="email" placeholder="Email" className="outline-none p-2 rounded mr-2 text-white border border-yellow-500" />
                    <button className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-600 focus-none">Subscribe</button>
                </div>
            </div>

            {/* Copyright */}
            <div className='border-t border-yellow-500 mt-5'>
                <p className="text-center text-white text-sm mt-5 ">&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>

            </div>        </div>

    )
}

export default Footer