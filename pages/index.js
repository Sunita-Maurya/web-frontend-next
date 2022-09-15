import Head from 'next/head';
import About from './About';
import Contact from './contact';
import Team from './team';

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
        <Team />
        <About />
        <Contact />
      </main>

      <footer></footer>
    </>
  );
}
