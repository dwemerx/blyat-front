import { useState } from 'react';
import { ChevronRight } from 'react-feather';

const FAQ: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    console.log(!open);
    setOpen(!open);
  };

  console.log(!open);

  return (
    <div className='max-w-md p-4 bg-white border border-gray-300 transform duration-700 easy-out rounded-3xl hover:border-gray-500'>
      <div className='relative flex items-center'>
        <button
          className={`mr-4 ${open ? 'rotate-90' : null}`}
          onClick={() => handleClick()}
        >
          <ChevronRight className='' strokeWidth={1.5} size={24} />
        </button>
        <div className=''>Can I donate?</div>
      </div>
      <div className='h-0 overflow-hidden'>
        <div className='w-full px-8 my-4'>
          <div className='w-full border border-gray-300'></div>
        </div>
        Yes! You definitely can. Please choose your favorite service and donate
        to the developer directly. BLYAT does not accept any donations, though.
      </div>
    </div>
  );
};

export default FAQ;
