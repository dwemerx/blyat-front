const Navbar: React.FC = () => (
  <div className='flex items-center justify-center text-xl'>
    <a
      className='pb-12 mr-12 text-gray-700 hover:text-gray-800'
      href='#testimonials'
    >
      Testimonials
    </a>
    <a
      className='pb-12 mr-12 text-gray-700 hover:text-gray-800'
      href='#services'
    >
      Services
    </a>
    <a className='pb-12 text-gray-700 hover:text-gray-800' href='#phacyou'>
      FAQ
    </a>
  </div>
);

export default Navbar;
