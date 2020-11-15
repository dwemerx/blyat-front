import Head from 'next/head';
import { useState } from 'react';
import { GitHub, Menu, X } from 'react-feather';

const Layout: React.FC = ({ children }) => {
  const [isMenuVisible, toggleMenu] = useState(true);

  return (
    <div className='relative w-screen h-screen overflow-x-hidden font-light text-center text-gray-700 bg-gradient-to-tr from-white via-gray-100 to-gray-100 grid-cols-none font-body'>
      <Head>
        <title>BLYAT</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta
          name='keywords'
          content='BLYAT, Service Provider, RSS, FreshRSS, RSSHub, RSSBridge, Reddit Top RSS, MORSS, HN RSS'
        />
        <meta
          name='description'
          content="A service provider you probably shouldn't trust"
        />
        <meta name='author' content='dwemerx' />
        <link rel='shortcut icon' type='image/ico' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <header className='absolute z-10 flex items-center justify-between w-full px-8 py-4 overflow-hidden'>
        <a
          className='font-sans text-4xl font-semibold tracking-widest text-white uppercase sm:text-6xl focus:outline-none focus:shadow-outline '
          href='https://blyat.org'
        >
          Blyat
        </a>
        <button
          className='text-white fill-current lg:text-gray-700 lg:hover:text-gray-800 lg:pb-8 focus:outline-none focus:shadow-outline '
          type='button'
          tabIndex={0}
          onClick={() => toggleMenu(!isMenuVisible)}
        >
          <Menu strokeWidth={1} size={32} />
        </button>
      </header>
      <div
        className={`fixed right-0 z-30 w-full h-screen bg-white md:w-64 border border-gray-300 transform easy-out duration-700 
      ${isMenuVisible ? 'translate-x-full' : null}`}
      >
        <button
          className='absolute top-0 right-0 p-8 text-gray-700 fill-current focus:outline-none focus:shadow-outline hover:text-gray-800 lg:pb-8'
          type='button'
          tabIndex={0}
          onClick={() => toggleMenu(!isMenuVisible)}
          onKeyUp={() => toggleMenu(!isMenuVisible)}
        >
          <X strokeWidth={1} size={32} />
        </button>
        <div className='h-full py-64 text-3xl text-gray-700 grid place-items-center'>
          <a
            className='hover:text-gray-800 focus:outline-none focus:shadow-outline '
            href='#testimonials'
            onClick={() => toggleMenu(!isMenuVisible)}
            onKeyUp={() => toggleMenu(!isMenuVisible)}
          >
            Testimonials
          </a>
          <a
            className='hover:text-gray-800 focus:outline-none focus:shadow-outline '
            href='#services'
            onClick={() => toggleMenu(!isMenuVisible)}
            onKeyUp={() => toggleMenu(!isMenuVisible)}
          >
            Services
          </a>
          <a
            className='hover:text-gray-800 focus:outline-none focus:shadow-outline '
            href='#phacyou'
            onClick={() => toggleMenu(!isMenuVisible)}
            onKeyUp={() => toggleMenu(!isMenuVisible)}
          >
            FAQ
          </a>
        </div>
      </div>
      {!isMenuVisible && (
        <div
          className='fixed z-20 w-screen h-screen bg-black transform duration-700 easy-out bg-opacity-25'
          aria-hidden='true'
          onClick={() => toggleMenu(!isMenuVisible)}
        />
      )}
      {children}
      <footer className='relative flex justify-center p-8 text-white text-gray-700 fill-current hover:text-gray-800'>
        <div className='text-gray-500'>
          BLYAT - a service provider you probably shoudn&apos;t trust
        </div>
        <a
          href='https://blyat.org'
          target='_blank'
          rel='noreferrer'
          className='absolute right-0 h-full pr-8 focus:outline-none focus:shadow-outline '
        >
          <GitHub strokeWidth={1.5} size={24} />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
