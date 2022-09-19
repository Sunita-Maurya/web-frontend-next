import Head from 'next/head';
import About from './About';
import Contact from './contact';
import Team from './team';
import Image from 'next/image';
import WorkCard from '../components/WorkCard';
export default function Home() {
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
        <title>JMBDD pvt.Ltd.</title>
      </Head>

      <main className="">
        <div>
          <div
            className="mt-16 relative "
            style={{
              height: '30rem',
              width: '100%',
            }}
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] flex flex-col items-center justify-center ">
              <div className="lg:w-1/2 sm:w-full article-content sm:p-4 flex flex-col justify-center items-center text-center">
                <h1 className="article-load text-3xl text-yellow-600 font-bold p-4 ">
                  <font className="italic text-red-600">JMBDD</font>{' '}
                  Technologies
                </h1>
                <p className="article-load-p  text-zinc-200">
                  Nostrud nostrud non labore veniam ad exercitation qui. Sunt
                  dolore proident aliquip reprehenderit ad et est sunt ex ad.
                  Mollit esse pariatur voluptate officia deserunt nostrud enim
                  in ut aliquip Nostrud nostrud non labore veniam ad
                  exercitation qui. Sunt dolore...
                </p>
              </div>
            </div>
            <Image
              src="/homebg.jpg"
              height="100%"
              width="100%"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* =------------our work */}
          <div>
            <div className="flex justify-center md:mt-14 mt-4">
              <div className=" md:w-1/2 w-full p-4 flex flex-col justify-center items-center text-center ">
                <h1 className="myunderline text-3xl font-bold p-4 relative">
                  Our Works
                </h1>
                <p className=" text-zinc-200 pt-12">
                  Nostrud nostrud non labore veniam ad exercitation qui. Sunt
                  dolore proident aliquip reprehenderit ad et est sunt ex ad.
                  Mollit esse pariatur voluptate officia deserunt nostrud enim
                  in ut aliquip Nostrud nostrud non labore veniam ad
                  exercitation qui. Sunt dolore...
                </p>
              </div>
            </div>
          </div>
          <WorkCard />
        </div>

        {/* rendering pages */}
        <Team />
        <About />
        <Contact />
      </main>

      <footer></footer>
    </>
  );
}
