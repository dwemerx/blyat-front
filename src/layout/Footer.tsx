import { Feather, GitHub } from 'react-feather';
import IkonateLogo from 'src/components/common/IkonateLogo';

const Footer: React.FC = () => (
  <footer className='relative flex flex-col justify-center p-8 text-white text-gray-700 align-middle fill-current hover:text-gray-800'>
    <div className='text-gray-500'>
      BLYAT - a service provider you probably shoudn&apos;t trust
    </div>
    <div className='mt-6 text-gray-500'>
      <a
        className='text-gray-500 hover:text-gray-700'
        href='https://uptime.blyat.org'
      >
        Uptime
      </a>
    </div>
    <div className='absolute flex-col hidden w-16 h-full top-6 lg:flex sm:left-0 sm:pl-8 sm:pt-0 focus:outline-none focus:shadow-outline'>
      <div className='flex mb-2 align-middle'>Icons:</div>
      <div className='flex'>
        <a href='https://github.com/feathericons/feather' className='pr-2'>
          <Feather strokeWidth={1.5} size={24} />
        </a>
        <p> & </p>
        <a href='https://github.com/mikolajdobrucki/ikonate' className='pl-2'>
          <IkonateLogo />
        </a>
      </div>
    </div>
    <a
      href='https://github.com/dwemerx/blyat'
      target='_blank'
      rel='noreferrer'
      className='flex justify-center h-full mt-6 sm:mt-0 sm:absolute sm:right-0 sm:top-12 sm:pr-8 sm:pt-0 focus:outline-none focus:shadow-outline'
    >
      <GitHub strokeWidth={1.5} size={24} />
    </a>
  </footer>
);

export default Footer;
