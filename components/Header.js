import React from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { IoIosArrowDropright } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsXLg } from 'react-icons/bs';
const Header = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const change = () => {
    setIsMobile(!isMobile);
  };
  return (
    <nav
      style={{
        // background: '#003049',
        background: 'transparent',
        position: 'fixed',
        top: 0,
        zIndex: 100,
      }}
      className="lg:flex lg:items-center  justify-between flex-wrap pr-16 p-4 w-full transition-all"
    >
      <div className="  lg:flex sm:flex-col items-center  flex-shrink-0  mr-6 ">
        <Link href="/">
          <a
            className="font-semibold text-6xl tracking-tight text-3xl ml-10"
            style={{
              letterSpacing: '-7px',
              color: '#eb2f40',
              textShadow: '0 0 20px black',
            }}
          >
            JMBDD
          </a>
        </Link>
      </div>

      <div className="w-full block flex-grow lg:flex justify-between lg:items-center lg:w-auto  ">
        <div className="menu text-sm lg:flex place-content-evenly mx-auto">
          <Link href="/">
            <a className="menutitile block lg:inline-block text-lg transition-all">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="menutitile block lg:inline-block  text-lg transition-all">
              About
            </a>
          </Link>
          <Link href="/services">
            <a className=" menutitile block lg:inline-block   text-lg transition-all">
              Services
            </a>
          </Link>
          <Link href="/team">
            <a className=" menutitile block lg:inline-block text-lg transition-all">
              Our Team
            </a>
          </Link>
        </div>
        <div className="sm:w-36">
          <Link href="/contact">
            <a className="contact-btn inline-block leading-none mt-4 lg:mt-0 ">
              Contact Us
              <IoIosArrowDropright className="arrow" />
            </a>
          </Link>
        </div>
      </div>
      <div className="relative lg:hidden sm:block  " onClick={change}>
        {isMobile ? (
          <button className="absolute">
            <BsXLg />
          </button>
        ) : (
          <button className="absolute">
            <GiHamburgerMenu />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
