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
    className='z-10 flex items-center justify-between w-full px-4 py-2 my-4 bg-white show-card-icons max-w-screen-lg transition duration-500 ease-out hover:shadow-cardHover shadow-card rounded-3xl'
    href={serviceLink}
    target='_blank'
    rel='noreferrer'
  >
    <div className='flex items-center justify-start'>
      <div className='flex items-center justify-center w-24 h-24 bg-white focus:outline-none focus:shadow-outline rounded-xl'>
        <Image
          width={90}
          height={90}
          src={image}
          alt={`${title} Logo`}
          title={title}
        />
      </div>
      <div className='hidden ml-8 card-icons duration-500 md:flex '>
        <a
          className='w-16 h-16 mx-4 text-gray-500 rounded-full hover:text-gray-700 duration-300 grid place-items-center shadow-card hover:shadow-cardHover'
          href={sourceLink}
          target='_blank'
          rel='noreferrer'
          title={`${title} Source Code`}
        >
          <GitHub size={32} />
        </a>
        {mainInstanceLink && (
          <a
            className='w-16 h-16 mx-4 text-gray-500 rounded-full hover:text-gray-700 duration-300 grid place-items-center shadow-card hover:shadow-cardHover'
            href={mainInstanceLink}
            target='_blank'
            rel='noreferrer'
            title={`${title} Main Instance`}
          >
            <Home size={32} />
          </a>
        )}
      </div>
    </div>
    <div className='w-40 pr-4 text-right sm:w-48 grid'>
      <a
        href={serviceLink}
        className='w-full text-2xl focus:outline-none focus:shadow-outline'
        target='_blank'
        rel='noreferrer'
      >
        {title}
      </a>
      <p className='text-xs text-gray-500'>{description}</p>
    </div>
  </a>
);

export default Card;
