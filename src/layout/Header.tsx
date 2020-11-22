import { useEffect, useState } from 'react';
import { Menu } from 'react-feather';
import useMedia from 'use-media';

import Navbar from './Navbar';
import SideMenu from './SideMenu';

const Header: React.FC = () => {
  // For some unknown reason, in production build, SideMenu changes its position
  // when loaded for the first time. As a workaround, set a delay of 2 seconds
  const [isMenuLoaded, loadMenu] = useState(false);

  const [isMenuVisible, toggleMenu] = useState(true);
  const isLarge = useMedia({ minWidth: 1400 });

  useEffect(() => {
    const timer = setTimeout(() => {
      loadMenu(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <header className='absolute z-10 flex items-center justify-between w-full px-8 py-4 overflow-hidden'>
        <a
          className='font-sans text-4xl font-semibold tracking-widest text-white uppercase sm:text-6xl focus:outline-none focus:shadow-outline '
          href='https://blyat.org'
        >
          Blyat
        </a>
        {isLarge ? (
          <Navbar />
        ) : (
          <button
            className='text-white fill-current md:text-gray-700 md:hover:text-gray-800 lg:pb-8 focus:outline-none focus:shadow-outline '
            type='button'
            tabIndex={0}
            onClick={() => toggleMenu(!isMenuVisible)}
          >
            <Menu strokeWidth={1} size={32} />
          </button>
        )}
      </header>
      {isLarge
        ? null
        : isMenuLoaded && (
            <SideMenu isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
          )}
    </>
  );
};

export default Header;
