import { useState } from 'react';
import { ChevronRight } from 'react-feather';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className='block w-full px-8 py-4 mb-4 bg-white border border-gray-300 max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg rounded-3xl hover:border-gray-500'>
      <details className='relative flex items-center'>
        <summary
          className='focus:outline-none active:outline-none summary-no-marker'
          onClick={() => handleClick()}
        >
          {!!window.webkitURL && (
            <ChevronRight
              strokeWidth={1.5}
              className={`inline mr-4 transform duration-300 easy-out ${
                open ? 'rotate-90' : null
              }`}
              size={24}
            />
          )}
          {question}
        </summary>
        <p>
          <div className='px-8 mt-2 mb-4'>
            <div className='border border-gray-300'></div>
          </div>
          {answer}
        </p>
      </details>
    </div>
  );
};

export default FAQ;
