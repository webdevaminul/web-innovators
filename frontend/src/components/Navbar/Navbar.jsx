import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiMenuFold2Line } from "react-icons/ri";
import { RiMenuFoldLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { MdArrowBackIosNew } from "react-icons/md";
import "./navbar.css"

const Navbar = () => {

    const links = <>
        <li><NavLink to="/home">Programs</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        {/* <li><NavLink to="/about">About</NavLink></li> */}
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/register">Dashboard</NavLink></li>
    </>

    const [openMenu, setOpenMenu] = useState(false)
    const [searchBarOpen, setSearchBarOpen] = useState(false)

    console.log(searchBarOpen)

    return (
        <div className='fixed w-full top-0 left-0 z-20 py-5 border-b border-[#e7e7e7] font-bai bg-[#ffffff]'>

            <div className='max-w-[1580px] mx-auto flex justify-between items-center gap-3 sm:gap-5 px-3 sm:px-5 relative'>

                <div className='flex items-center gap-3'>
                    <div onClick={() => setOpenMenu(!openMenu)} className='md:hidden flex items-center'>
                        <button className='text-2xl'>{openMenu ? <RiMenuFoldLine /> : <RiMenuFold2Line />}</button>
                    </div>

                    <div>
                        <Link to="/"><h1 className='font-bold text-3xl sm:text-4xl font-inter'>Learn<span className='text-gray-500'>UP</span></h1></Link>
                    </div>
                </div>

                {/* search bar for large device */}
                <div className='border py-2 px-4 border-[#e7e7e7] rounded-3xl w-full justify-between sm:flex md:hidden lg:flex hidden'>
                    <input className='outline-none w-full placeholder:text-[#cacaca] text-[#303030] ' type="text" placeholder='Search program...' />
                    <button className='text-2xl text-[#5e5e5e]'><IoSearchOutline /></button>
                </div>

                {/* search bar for small device */}
                <div className={`border-b absolute z-10 py-2 px-4 border-[#e7e7e7] top-0 justify-between flex bg-white transition-all ease-in-out ${searchBarOpen ? 'w-full left-0' : 'w-0 -left-[300px]'}`}>

                    <button onClick={() => setSearchBarOpen(false)} className='absolute p-2 text-[#5e5e5e] -top-5 left-1'><MdArrowBackIosNew /></button>

                    <input className='outline-none w-full placeholder:text-[#cacaca] text-[#303030] ' type="text" placeholder='Search program...' />
                    <button className='text-2xl text-[#5e5e5e]'><IoSearchOutline /></button>
                </div>


                {/* nav links for small device */}
                <div className={`nav-parent md:hidden transition-all ease-in-out flex flex-col gap-5 absolute list-none top-14 border-t p-5 bg-white h-screen ${openMenu ? "left-0 w-full" : "-left-[300px] w-[300px]"} font-semibold text-lg text-[#5e5e5e]`}>
                    {links}
                </div>

                <div className='flex items-center gap-5'>

                    {/* nav links for large device */}
                    <div className='nav-parent list-none gap-5 ml-3 hidden md:flex font-semibold text-lg text-[#5e5e5e]'>
                        {links}
                    </div>

                    <div onClick={() => setSearchBarOpen(true)} className='sm:hidden md:flex lg:hidden flex items-center'>
                        <button className='text-2xl text-[#5e5e5e]'><IoSearchOutline /></button>
                    </div>

                    <div className='sm:ml-2'>
                        <button className='sm:py-[6px] py-1 px-2 sm:px-4 rounded-md bg-black font-semibold text-[#cacaca]'><Link to="/register">Register</Link></button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;