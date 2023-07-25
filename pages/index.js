import Head from 'next/head';
import { NextUIProvider } from '@nextui-org/react';
import FooterProject from './components/footerProject';
import HeaderProject from './components/headerProject';
import About from './components/about';
import WriterCertification from './components/writerCertification';
import dynamic from 'next/dynamic';
import ContactUs from './components/contactUs';
import InstaFeed from './components/instaFeed';

const Intro = dynamic(() => import('./components/intro'), {
  ssr: false,
});

const Testimonials = dynamic(() => import('./components/testimonials'), {
  ssr: false,
});

const Store = dynamic(() => import('./components/store'), {
  ssr: false,
});

const HopeWriter = dynamic(() => import('./components/hopeWriter'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="amandaBoaviagem">
      <Head>
        <title>Amanda Boaviagem | Escritora da esperança</title>
      </Head>
      <main>
        <NextUIProvider>
          <HeaderProject></HeaderProject>
          <Intro></Intro>
          <About></About>
          <Store></Store>
          <HopeWriter></HopeWriter>
          <WriterCertification></WriterCertification>
          <InstaFeed></InstaFeed>
          <Testimonials></Testimonials>
          <ContactUs></ContactUs>
        </NextUIProvider>
      </main>
      <footer>
        <NextUIProvider>
          <FooterProject></FooterProject>
        </NextUIProvider>
      </footer>
      <style jsx global>{`
        html,
        main {
          background: #2d638e;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          font-family: Open Sans, sans-serif;
        }
        div,footer{
          overflow: hidden;
          white-space: wrap;
          word-break: break-word;
        }
      `}</style>
    </div>
  )
}
