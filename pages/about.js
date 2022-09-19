import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
const About = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/images/jmbdd_logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-next-app"
        />
        <title>JMBDD About</title>
      </Head>

      <div
        className="mt-16 relative  "
        style={{
          height: '25rem',
          width: '100%',
        }}
      >
        <Image
          src="/it.jpg"
          alt=""
          height="100%"
          width="100%"
          layout="fill"
          objectFit="cover"
        />

        <div className="absolute mytitle inset-0 flex justify-center items-center text-6xl font-bold backdrop-brightness-50">
          Who we are.
        </div>
      </div>
      <div
        className="m-8 p-4 flex flex-col rounded"
        style={{ border: '1px solid #fffdfd52' }}
      >
        <div className="text-center">
          <h1 className="text-3xl mb-4"> Who we are.</h1>
          <p className=" mx-auto">
            Nostrud nostrud non labore veniam ad exercitation qui. Sunt dolore
            proident aliquip reprehenderit ad et est sunt ex ad. Mollit esse
            pariatur voluptate officia deserunt nostrud enim in ut aliquip
            Nostrud nostrud non labore veniam ad exercitation qui. Sunt dolore
            proident aliquip reprehenderit ad et est sunt ex ad. Mollit esse
            pariatur voluptate officia deserunt nostrud enim in ut aliquip.
            proident aliquip reprehenderit ad et est sunt ex ad. Mollit esse
            pariatur voluptate officia deserunt nostrud enim in ut aliquip.
          </p>
        </div>

        <div className="mt-8 grid justify-items-center grid-rows-1 gap-8">
          <div className="p-4 bg-white rounded-lg lg:w-1/2  md:-translate-x-2">
            <div className="flex justify-center items-center flex-col md:flex-row  gap-4  lg:-translate-x-32 md:w-[120%] ">
              <img
                src="/person.jpg"
                alt=""
                className="object-cover rounded-full  h-[250px] w-[250px]"
                loading="lazy"
              />
              <div className="text-black  mt-4   px-4  ">
                <h1 className="text-3xl mb-4"> What do we do</h1>
                <p>
                  Nostrud nostrud non labore veniam ad exercitation qui. Sunt
                  dolore proident aliquip reprehenderit ad et est sunt ex ad.
                  Mollit esse pariatur voluptate officia deserunt nostrud enim
                  in ut aliquip Nostrud nostrud non labore veniam ad
                  exercitation qui. Sunt dolore proident aliquip reprehenderit
                  ad et est sunt ex ad. Mollit esse pa
                </p>
              </div>
            </div>
          </div>
          <div className=" p-4 bg-white rounded-lg lg:w-1/2 md:translate-x-2">
            <div className="flex justify-center items-center md:flex-row flex-col-reverse  gap-4 md:w-[120%]">
              <div className="text-black  mt-4 px-4">
                <h1 className="text-3xl mb-4"> Our Aim</h1>
                <p>
                  Nostrud nostrud non labore veniam ad exercitation qui. Sunt
                  dolore proident aliquip reprehenderit ad et est sunt ex ad.
                  Mollit esse pariatur voluptate officia deserunt nostrud enim
                  in ut aliquip Nostrud nostrud non labore veniam ad
                  exercitation qui. Sunt dolore proident aliquip reprehenderit
                  ad et est sunt ex ad. Mollit esse pa
                </p>
              </div>
              <img
                src="/person.jpg"
                alt=""
                loading="lazy"
                className="object-cover rounded-full h-[250px] w-[250px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
