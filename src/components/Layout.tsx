const Layout: React.FC = ({ children }) => (
  <div className='h-screen overflow-y-scroll font-light text-center text-gray-700 bg-gradient-to-tr from-white via-gray-100 to-gray-100 grid-cols-none font-body'>
    <header className='flex items-center justify-between px-8 py-4'>
      <a className='text-3xl text-gray-800' href='https://blyat.org'>
        Blyat
      </a>
      <div className='flex'>
        <a className='mr-4 hover:text-gray-800' href='#services'>
          Services
        </a>
        <a className='hover:text-gray-800' href='#phacyou'>
          FAQ
        </a>
      </div>
    </header>
    {children}
    <footer className='p-4'>TODO</footer>
  </div>
);

export default Layout;
