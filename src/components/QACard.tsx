import { useState } from 'react';
import { ChevronRight } from 'react-feather';

interface FAQProps {
  question: string | Element;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='w-full px-8 py-4 mb-4 bg-white border border-gray-300 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg rounded-3xl hover:border-gray-500'>
      <details className='relative flex items-center justify-center'>
        <summary
          className='flex items-center justify-center focus:outline-none active:outline-none no-marker'
          onClick={() => handleClick()}
        >
          <ChevronRight
            strokeWidth={1.5}
            className={`inline-block mr-4 transform duration-300 easy-out ${
              open ? 'rotate-90' : null
            }`}
            size={24}
          />
          {typeof question === 'string' ? (
            <div className='inline-block w-3/4 pr-8'>{question}</div>
          ) : (
            question
          )}
        </summary>
        <div>
          <div className='px-8 mt-2 mb-4'>
            <div className='border border-gray-300'></div>
          </div>
          {answer}
        </div>
      </details>
    </div>
  );
};

export default FAQ;
