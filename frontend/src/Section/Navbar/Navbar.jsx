import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenuFold2Line } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";

const Navbar = () => {

    const links = <>
        <li><Link>Programs</Link></li>
        <li><Link>Pricing</Link></li>
        <li><Link>About</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>Dashboard</Link></li>
    </>

    const [openMenu, setOpenMenu] = useState(false)
    console.log(openMenu)

    return (
        <div className='fixed w-full top-0 left-0 z-20 py-5 border-b border-[#e7e7e7] font-bai bg-[#ffffff]'>

            <div className='max-w-[1580px] mx-auto flex justify-between items-center gap-3 sm:gap-5 px-3 sm:px-5 relative'>

                <div className='flex items-center gap-3'>
                    <div onClick={() => setOpenMenu(!openMenu)} className='md:hidden flex items-center'>
                        <button className='text-2xl'>{openMenu ? <RiMenuFoldLine /> : <RiMenuFold2Line />}</button>
                    </div>

                    <div>
                        <h1 className='font-bold text-3xl sm:text-4xl font-inter'>Learn<span className='text-gray-500'>UP</span></h1>
                    </div>
                </div>

                <div className='border py-2 px-4 border-[#e7e7e7] rounded-3xl w-full flex justify-between'>
                    <input className='outline-none w-full placeholder:text-[#cacaca] text-[#303030] ' type="text" placeholder='Search program...' />
                    <button>Search</button>
                </div>

                <div className={`md:hidden transition-all ease-in-out flex flex-col gap-5 absolute list-none top-14 border-t p-5 bg-white h-screen ${openMenu ? "left-0 w-full" : "-left-[300px] w-[300px]"} font-semibold text-lg text-[#5e5e5e]`}>
                    {links}
                </div>

                <div className='flex items-center gap-5'>
                    <div className='list-none gap-5 ml-3 hidden md:flex font-semibold text-lg text-[#5e5e5e]'>
                        {links}
                    </div>

                    <div className='ml-2'>
                        <button className='sm:py-[6px] py-1 px-5 rounded-md bg-black font-semibold text-lg text-[#cacaca]'><Link to="/login">Login</Link></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;