import Footer from './Footer';
import Header from './Header';
import MyHead from './MyHead';

const Layout: React.FC = ({ children }) => {
  return (
    <div className='relative w-screen h-screen overflow-x-hidden font-light text-center text-gray-700 bg-gradient-to-tr from-white via-gray-100 to-gray-100 grid-cols-none font-body'>
      <MyHead />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
