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
  <div className='flex items-center justify-between px-2 py-1 m-4 bg-white shadow-primary rounded-3xl'>
    <a
      className='flex items-center justify-center w-16 h-16'
      href={serviceLink}
      target='_blank'
      rel='noreferrer'
    >
      <img
        className='w-12 h-12'
        src={image}
        alt={`${title} Logo`}
        title={title}
      />
    </a>
    <div className='w-64 pr-2 text-right grid'>
      <a
        href={serviceLink}
        className='w-full text-xl'
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
