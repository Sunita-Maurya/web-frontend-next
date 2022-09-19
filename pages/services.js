import React from 'react';
import Image from 'next/image';
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineLaptopChromebook } from 'react-icons/md';
import { FaMobileAlt } from 'react-icons/fa';
import { BsGraphUp } from 'react-icons/bs';
import { ImDatabase } from 'react-icons/im';
import { FaNetworkWired } from 'react-icons/fa';
const Services = () => {
  const servicesIcons = [
    // '/coding.png',
    // '/app-development.png',
    // '/bullhorn.png',
    // './data-science.png',
    // '/innovation.png',
    // '/ux-design.png',
    {
      name: 'Web Development',
      icon: '/coding.png',
    },
    {
      name: 'Mobile App Development',
      icon: '/app-development.png',
    },
    {
      name: 'Web Development',
      icon: '/bullhorn.png',
    },
    {
      name: 'Web Development',
      icon: '/data-science.png',
    },
    {
      name: 'Web Development',
      icon: '/innovation.png',
    },
    {
      name: 'Web Design',
      icon: '/ux-design.png',
    },
  ];
  return (
    <div className="mt-16  text-black">
      <Image
        src="/web_development.jpg"
        height="400"
        width="2000"
        objectFit="cover"
      />
      <div className="text-center p-8 flex  justify-center border ">
        <div className="border ">
          <Image src="/a.jpg" height="400" width="600" objectFit="cover" />
        </div>
        <div className="">
          <h1 className="text-3xl ">Services</h1>
          <p className="p-10 ">
            dolore proident aliquip reprehenderit ad et est sunt ex ad. Mollit
            esse pariatur voluptate officia deserunt nostrud enim in ut aliquip
            dolore proident aliquip reprehenderit ad et est sunt ex ad. Mollit
            esse pariatur voluptate officia deserunt nostrud enim in ut aliquip
            Nostrud nostrud non labore veniam ad exercitation qui. Sunt
            dolore...
          </p>
        </div>
      </div>
      <div className="grid hidden lg:grid-cols-3  sm:grid-cols-2  justify-items-center justify-self-center place-items-center">
        {servicesIcons.map((ob) => {
          return (
            <>
              <div
                className=" p-4  bg-white rounded border ease-in  hover:bg-slate-300 shadow-lg  "
                style={{
                  width: '400px',
                  height: '300px',
                  color: 'black',
                  margin: '10px 5px',
                }}
              >
                <div className="flex flex-col items-center overflow:hidden ">
                  <img
                    src={ob.icon}
                    alt=""
                    style={{
                      backgroundColor: '',
                      color: 'white',
                      width: '100px',
                      heightRatio: '1/1',
                    }}
                  />
                  <h1 className="text-1xl font-bold p-4">{ob.name}</h1>
                  <p className="p-4">
                    dolore proident aliquip reprehenderit ad et est sunt ex ad.
                    Mollit esse pariatur voluptate officia deserunt nostrud enim
                    in ut aliquip Nostrud nostrud non labore veniam ad
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="bg-blue-800 h-40 flex my-16 place-content-evenly items-center">
        <button className="p-4 border rounded-full  ">
          <BiCodeAlt clas className="text-4xl text-white" />
        </button>
        <button className="p-4 border rounded-full ">
          <FaMobileAlt className="text-4xl  text-white " />
        </button>
        <button className="p-4 border  rounded-full">
          <MdOutlineLaptopChromebook className="text-4xl  text-white" />
        </button>
        <button className="p-4 border  rounded-full ">
          <BsGraphUp className="text-4xl  text-white" />
        </button>
        <button className="p-4 border  rounded-full">
          <ImDatabase className="text-4xl  text-white" />
        </button>
        <button className="p-4 border  rounded-full">
          <FaNetworkWired className="text-4xl  text-white" />
        </button>
      </div>
    </div>
  );
};

export default Services;
