import React from 'react'
import { NavLink } from 'react-router-dom'


function NavBar() {
    return (
        <nav class=" bg-gray-900 text-white">
            <div class="flex px-10 xl:px-10 py-2 pt-4 w-full justify-between">


                {/* logo */}
                <NavLink to="/" className="text-3xl font-bold font-heading">
                    {/* <img class="h-10" src={logo} alt="logo" /> */}Logo
                </NavLink>



                <div class="flex justify-end space-x-5">
                    <NavLink to="/" className=" text-yellow-400 hover:text-gray-900 border border-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">Home</NavLink>
                    <NavLink to="/booking" className="transition ease-in-out delay-150 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">Booking</NavLink>
                    <NavLink to="/cart" className="hover:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </NavLink>
                </div>
            </div >
        </nav >
    )
}

export default NavBar;