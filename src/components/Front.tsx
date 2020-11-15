import useMedia from 'use-media';

const Front: React.FC = () => {
  const isLarge = useMedia({ minWidth: 1600 });

  return (
    <div className='relative w-screen h-screen mb-32'>
      <div
        className={`absolute bg-teal-400 rounded-full ${
          isLarge ? 'front-circle-1-large' : 'front-circle-1'
        }`}
      />
      <div className='absolute bg-teal-700 rounded-full front-circle-2' />
      <div className='absolute bg-teal-900 rounded-full front-circle-3' />
      <div className='h-screen mx-16 grid lg:grid-cols-2 place-items-center'>
        <div className='relative z-10 w-full text-3xl font-bold text-white lg:ml-16 lg:pr-24 lg:pt-64 lg:mb-64 xl:pr-64 max-w-screen-sm sm:text-5xl'>
          All humans are born young. We need to change this{' '}
          <a
            className='text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500'
            href='#services'
          >
            now
          </a>
          .
        </div>
        <div className='relative z-10 hidden mb-64 mr-16 bg-teal-200 rounded-full lg:block max-w-screen-sm'>
          <img
            className='absolute object-contain p-16'
            src='/images/woman.svg'
            alt='Timeline'
          />
          <div className='p-64'></div>
        </div>
      </div>
    </div>
  );
};

export default Front;
