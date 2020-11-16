import { X } from 'react-feather';

interface SideMenuProps {
  isMenuVisible: boolean;
  toggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideMenu: React.FC<SideMenuProps> = ({ isMenuVisible, toggleMenu }) => (
  <>
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
  </>
);

export default SideMenu;
