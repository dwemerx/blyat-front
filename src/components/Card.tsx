interface CardProps {
  title: string;
  description: string;
  image: string;
  serviceLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  serviceLink,
}) => (
  <div className='z-10 flex items-center justify-between w-full px-4 py-2 my-4 bg-white max-w-screen-lg transition duration-500 ease-out hover:shadow-cardHover shadow-card rounded-3xl'>
    <a
      className='flex items-center justify-center w-24 h-24 bg-white rounded-xl'
      href={serviceLink}
      target='_blank'
      rel='noreferrer'
    >
      <img
        className='w-16 h-16'
        src={image}
        alt={`${title} Logo`}
        title={title}
      />
    </a>
    <div className='pr-4 text-right grid'>
      <a
        href={serviceLink}
        className='w-full text-2xl'
        target='_blank'
        rel='noreferrer'
      >
        {title}
      </a>
      <p className='text-xs text-gray-500'>{description}</p>
    </div>
  </div>
);

export default Card;
