import { GitHub } from 'react-feather';

const Footer: React.FC = () => (
  <footer className='relative flex justify-center p-8 text-white text-gray-700 fill-current hover:text-gray-800'>
    <div className='text-gray-500'>
      BLYAT - a service provider you probably shoudn&apos;t trust
    </div>
    <a
      href='https://github.com/dwemerx/blyat-front'
      target='_blank'
      rel='noreferrer'
      className='absolute right-0 h-full pr-8 focus:outline-none focus:shadow-outline '
    >
      <GitHub strokeWidth={1.5} size={24} />
    </a>
  </footer>
);

export default Footer;
