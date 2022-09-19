import React from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { IoIosArrowDropright } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsXLg } from 'react-icons/bs';
const Header = () => {
  const [open, setOpen] = React.useState(false);

  return (
    // <nav className="mynav lg:flex lg:items-center  justify-between flex-wrap pr-16 p-4 w-full transition-all z-10">
    //   <div className="  lg:flex sm:flex-col items-center  flex-shrink-0  mr-6 ">
    //     <Link href="/">
    //       <a className="logostyle font-semibold  tracking-tight lg:text-3xl  ml-10">
    //         JMBDD
    //       </a>
    //     </Link>
    //   </div>

    //   <div className="w-full flex-grow lg:flex  justify-between lg:items-center lg:w-auto  ">
    //     <div className="menu text-sm lg:flex place-content-evenly mx-auto">
    //       <Link href="/">
    //         <a className="menutitile block lg:inline-block text-lg transition-all">
    //           Home
    //         </a>
    //       </Link>
    //       <Link href="/about">
    //         <a className="menutitile block lg:inline-block  text-lg transition-all">
    //           About
    //         </a>
    //       </Link>
    //       <Link href="/services">
    //         <a className=" menutitile block lg:inline-block   text-lg transition-all">
    //           Services
    //         </a>
    //       </Link>
    //       <Link href="/team">
    //         <a className=" menutitile block lg:inline-block text-lg transition-all">
    //           Our Team
    //         </a>
    //       </Link>
    //     </div>
    //     <div className="lg:w-auto  sm:w-36">
    //       <Link href="/contact">
    //         <a className="contact-btn lg:inline-block  leading-none mt-4 lg:mt-0  ">
    //           Contact Us
    //           <IoIosArrowDropright className="arrow" />
    //         </a>
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="relative lg:hidden sm:block  " onClick={change}>
    //     {isMobile ? (
    //       <button className="absolute">
    //         <BsXLg />
    //       </button>
    //     ) : (
    //       <button className="absolute">
    //         <GiHamburgerMenu />
    //       </button>
    //     )}
    //   </div>
    // </nav>
    <nav className="mybg w-[100%] h-[60px] fixed top-0 left-0 text-white shadow-lg shadow-black/30 text- z-10 flex md:justify-between justify-around">
      <div className="flex gap-x-4 items-center h-full">
        {open ? (
          <BsXLg
            className="w-8 hover:cursor-pointer hover:opacity-80 transition-all md:hidden"
            onClick={() => setOpen(false)}
          />
        ) : (
          <GiHamburgerMenu
            className="w-8 hover:cursor-pointer hover:opacity-80 transition-all md:hidden"
            onClick={() => setOpen(true)}
          />
        )}

        <Link href="/">
          <a className="logostyle font-semibold  tracking-tight md:text-3xl  px-8 ">
            JMBDD
          </a>
        </Link>
      </div>
      <ul
        className={`mybg flex md:flex-row flex-col absolute md:static  md:space-y-0 md:justify-center  md:items-center w-[40%]  
        md:w-auto md:-h-auto  text-center 
         h-auto bg-gray-800 md:text-white md-py-0 md:items-center   top-[60px] space-y-5 ${
           open ? 'left-0' : 'left-[-100%]'
         } transition-all md:transition-none  duration-500 ease-in`}
      >
        <li className="hover:cursor-pointer hover:text-gray-900   md:px-8">
          <a href="/" className="menutitle">
            Home
          </a>
        </li>
        <li className="hover:cursor-pointer hover:text-gray-900   md:px-8">
          <a href="/about" className="menutitle">
            About
          </a>
        </li>
        <li className="hover:cursor-pointer hover:text-gray-900  md:px-8">
          <a href="/services" className="menutitle">
            Services
          </a>
        </li>
        <li className="hover:cursor-pointer hover:text-gray-900   md:px-8">
          <a href="/team" className="menutitle">
            Team
          </a>
        </li>
      </ul>
      <div className="items-center md:my-auto mr-8">
        <Link href="/contact">
          <a className="contact-btn md:w-[150px]  leading-none md:mt-0 mt-4 ">
            Contact Us
            <IoIosArrowDropright className="arrow" />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
