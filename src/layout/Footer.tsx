import { Feather, GitHub } from 'react-feather';
import IkonateLogo from 'src/components/common/IkonateLogo';

const Footer: React.FC = () => (
  <footer className='relative flex justify-center p-8 text-white text-gray-700 fill-current hover:text-gray-800'>
    <div className='text-gray-500'>
      BLYAT - a service provider you probably shoudn&apos;t trust
    </div>
    <div className='absolute flex-col hidden w-16 h-full pb-16 lg:flex sm:left-0 sm:pl-8 sm:pt-0 focus:outline-none focus:shadow-outline'>
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
      className='absolute h-full pt-16 sm:right-0 sm:pr-8 sm:pt-0 focus:outline-none focus:shadow-outline'
    >
      <GitHub strokeWidth={1.5} size={24} />
    </a>
  </footer>
);

export default Footer;
