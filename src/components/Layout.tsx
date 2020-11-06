import { useState } from 'react';
import { GitHub, Menu, X } from 'react-feather';

const Layout: React.FC = ({ children }) => {
  const [isMenuVisible, toggleMenu] = useState(false);

  return (
    <div className='relative h-screen overflow-y-scroll font-light text-center text-gray-700 bg-gradient-to-tr from-white via-gray-100 to-gray-100 grid-cols-none font-body'>
      <header className='absolute z-10 flex items-center justify-between w-full px-8 py-4 overflow-hidden'>
        <a
          className='font-sans text-4xl font-semibold tracking-widest text-white uppercase sm:text-6xl'
          href='https://blyat.org'
        >
          Blyat
        </a>
        <button
          className='text-white fill-current lg:text-gray-700 lg:hover:text-gray-800 lg:pb-8'
          type='button'
          tabIndex={0}
          onClick={() => toggleMenu(!isMenuVisible)}
        >
          <Menu size={32} />
        </button>
      </header>
      <div
        className={`fixed right-0 z-20 w-full h-screen bg-white md:w-64 shadow-card 
      transform easy-out duration-700 ${
        isMenuVisible ? 'translate-x-full' : null
      }`}
      >
        <button
          className='absolute top-0 right-0 p-8 text-gray-700 fill-current hover:text-gray-800 lg:pb-8'
          type='button'
          tabIndex={0}
          onClick={() => toggleMenu(!isMenuVisible)}
          onKeyUp={() => toggleMenu(!isMenuVisible)}
        >
          <X size={32} />
        </button>
        <div className='h-full py-64 text-3xl text-gray-700 grid place-items-center'>
          <a
            className='hover:text-gray-800'
            href='#services'
            onClick={() => toggleMenu(!isMenuVisible)}
            onKeyUp={() => toggleMenu(!isMenuVisible)}
          >
            Services
          </a>
          <a
            className='hover:text-gray-800'
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
          className='fixed z-20 w-screen h-screen'
          aria-hidden='true'
          onClick={() => toggleMenu(!isMenuVisible)}
        ></div>
      )}
      {children}
      <footer className='flex justify-center p-4'>
        <a
          className=''
          href='https://blyat.org'
          target='_blank'
          rel='noreferrer'
        >
          <GitHub color='#333' />
        </a>
      </footer>
    </div>
  );
};

export default Layout;
