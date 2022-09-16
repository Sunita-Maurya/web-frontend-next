import React from 'react';
import Image from 'next/image';
// import { FiSettings } from 'react-icons/fi';
function WorkCard() {
  const workimages = ['/1.jpg', '/1.jpg', '/1.jpg'];
  return (
    <div className="flex justify-center items-center mt-14 gap-6">
      {workimages.map((img) => {
        return (
          <div
            className="border p-8 mt-16 bg-slate-200 text-black rounded  items-center  hover:bg-slate-400 transition"
            style={{
              width: '300px',
              heightRatio: '1/1',
            }}
          >
            <div className=" text-center  -translate-y-16 px-4">
              <Image
                src={img}
                width="100px"
                height="100px"
                className="bg-slate-200"
              />
              {/* <FiSettings /> */}
              <p className="whitespace-normal">
                Nostrud nostrud non labore veniam ad exercitation qui. Sunt
                dolore proident aliquip reprehenderit ad et est sunt ex ad.
                Mollit esse pariatur voluptate officia deserunt nostrud enim in
                ut aliquip Nostrud nostrud non labore veniam ad exercitation
                qui. Sunt dolore...
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WorkCard;
