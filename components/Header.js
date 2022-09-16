import React from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { IoIosArrowDropright } from 'react-icons/io';
const Header = () => {
  return (
    <nav
      style={{
        // background: '#003049',
        background: 'transparent',
        position: 'fixed',
        top: 0,
        zIndex: 100,
      }}
      className="flex items-center justify-between flex-wrap pr-16 p-4 w-full transition-all"
    >
      <div className="w-1/3 flex items-center  flex-shrink-0  mr-6  ">
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

      <div className="w-full block flex-grow lg:flex justify-between lg:items-center lg:w-auto mycolor ">
        <div className="text-sm lg:flex justify-between">
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
          <Link href="">
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
        <div>
          <Link href="/contact">
            <a className="contact-btn inline-block leading-none mt-4 lg:mt-0 ">
              Contact Us
              <IoIosArrowDropright className="arrow" />
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
