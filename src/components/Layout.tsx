const Layout: React.FC = ({ children }) => (
  <div className='relative h-screen overflow-y-scroll font-light text-center text-gray-700 bg-gradient-to-tr from-white via-gray-100 to-gray-100 grid-cols-none font-body'>
    <header className='absolute z-10 flex items-center justify-between w-full px-8 py-4'>
      <a
        className='font-sans text-4xl font-semibold tracking-widest text-white uppercase sm:text-6xl'
        href='https://blyat.org'
      >
        Blyat
      </a>
      <div className='text-lg text-white grid grid-cols-2 gap-2 sm:gap-6 sm:text-3xl lg:text-gray-700 sm:pb-10'>
        <a
          className='hover:text-gray-300 lg:hover:text-gray-800'
          href='#services'
        >
          Services
        </a>
        <a
          className='hover:text-gray-300 lg:hover:text-gray-800'
          href='#phacyou'
        >
          FAQ
        </a>
      </div>
    </header>
    {children}
    <footer className='p-4'>TODO</footer>
  </div>
);

export default Layout;
