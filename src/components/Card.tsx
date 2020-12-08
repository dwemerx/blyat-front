import Image from 'next/image';
import { GitHub, Home } from 'react-feather';

interface CardProps {
  title: string;
  description: string;
  image: string;
  serviceLink: string;
  sourceLink: string;
  mainInstanceLink?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  serviceLink,
  sourceLink,
  mainInstanceLink,
}) => (
  <a
    className='z-10 flex items-center justify-between w-full px-4 py-0 my-2 bg-white border border-gray-300 sm:my-4 hover:border-gray-500 show-card-icons max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg transition duration-500 ease-out rounded-3xl'
    href={serviceLink}
    target='_blank'
    rel='noreferrer'
  >
    <div className='z-10 flex items-center justify-start'>
      <div className='z-10 flex items-center justify-center w-24 h-24 bg-white focus:outline-none focus:shadow-outline rounded-xl'>
        <Image
          width={70}
          height={70}
          src={image}
          alt={`${title} Logo`}
          title={title}
        />
      </div>
      <div className='z-10 hidden ml-8 card-icons duration-500 sm:flex '>
        <a
          className='z-10 w-12 h-12 mx-4 text-gray-400 border border-gray-300 rounded-full hover:border-gray-500 hover:text-gray-500 duration-300 grid place-items-center'
          target='_blank'
          rel='noreferrer'
          title={`${title} Source Code`}
          href={sourceLink}
        >
          <GitHub strokeWidth={1} size={24} />
        </a>
        {mainInstanceLink && (
          <a
            className='z-10 w-12 h-12 mx-4 text-gray-400 border border-gray-300 rounded-full hover:border-gray-500 hover:text-gray-500 duration-300 grid place-items-center'
            target='_blank'
            rel='noreferrer'
            title={`${title} Main Instance`}
            href={mainInstanceLink}
          >
            <Home strokeWidth={1} size={24} />
          </a>
        )}
      </div>
    </div>
    <div className='z-10 w-48 pr-4 text-right sm:w-64 grid'>
      <a
        href={serviceLink}
        className='w-full mb-2 text-2xl leading-6 focus:outline-none focus:shadow-outline'
        target='_blank'
        rel='noreferrer'
      >
        {title}
      </a>
      <p className='text-xs text-gray-500 truncate'>{description}</p>
    </div>
  </a>
);

export default Card;
