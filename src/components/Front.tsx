import useMedia from 'use-media';

const Front: React.FC = () => {
  const isLarge = useMedia({ minWidth: 1000 });

  return (
    <div>
      <div
        className={`absolute w-full bg-teal-400 h-x2 ${
          isLarge ? 'front-circle-1-lg' : 'front-circle-1'
        }`}
      />
      <div className='absolute w-full bg-teal-700 h-x2 front-circle-2' />
      <div className='absolute w-full bg-teal-900 h-x2 front-circle-3' />
      <div className='h-screen mx-16 overflow-hidden grid lg:grid-cols-2 place-items-center'>
        <div className='z-10 w-full text-3xl text-white lg:ml-16 lg:pr-24 lg:pb-64 lg:mb-64 xl:pr-64 max-w-screen-sm sm:text-5xl'>
          All humans are born young. We need to change this{' '}
          <a
            className='text-transparent bg-clip-text bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500'
            href='#services'
          >
            now
          </a>
          .
        </div>
        <div className='relative z-10 hidden mr-16 bg-teal-200 rounded-full lg:block max-w-screen-sm'>
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
