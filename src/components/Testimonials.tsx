import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const Testimonials: React.FC = () => {
  const [slider, setSlider] = useState({
    slidePosition: [
      { position: -2, isVisible: false },
      { position: -1, isVisible: true },
      { position: 0, isVisible: true },
      { position: 1, isVisible: true },
      { position: 2, isVisible: true },
    ],
    slides: [
      {
        name: 'Boris',
        occupation: 'Under Attack',
        comment:
          'This platform taught me how to protect yourself with a plastic bag. Very useful!',
        image: '/images/testimonial3.jpg',
      },
      {
        name: 'Ahmad',
        occupation: 'Passionate Stock Photo',
        comment: "My glasses don't have any glass in them. Help",
        image: '/images/testimonial5.jpg',
      },
      {
        name: 'Valentin',
        occupation: 'Professional Director',
        comment: 'This is the service provider I trust. The best!',
        image: '/images/testimonial1.jpg',
      },
      {
        name: 'Jeff',
        occupation: 'Recently Approved for a Mortgage',
        comment:
          'This is my favorite cafe. The food is great and the staff is always ready to help!',
        image: '/images/testimonial4.jpg',
      },
      {
        name: 'Victor',
        occupation: 'Has a Dark Soul',
        comment:
          'Washing your hands regularly improves your higiene and prevents many diseases',
        image: '/images/testimonial2.jpg',
      },
    ],
  });

  const moveRight = () => {
    const newPosition = slider.slidePosition;
    const slide = newPosition.pop();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    newPosition.unshift(slide!);
    newPosition.forEach((s, i) => {
      return { ...s, isVisible: i !== 0 };
    });

    setSlider({
      ...slider,
      slidePosition: newPosition,
    });
  };

  const moveLeft = () => {
    const newPosition = slider.slidePosition;
    const slide = newPosition.shift();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    newPosition.push(slide!);
    newPosition.forEach((s, i) => {
      return { ...s, isVisible: i !== newPosition.length - 1 };
    });

    setSlider({
      ...slider,
      slidePosition: newPosition,
    });
  };

  return (
    <div id='testimonials' className='relative w-screen min-h-screen'>
      <div className='absolute bg-teal-800 rounded-full testimonials-circle-1' />
      <div>
        <div className='text-5xl'>Testimonials</div>
        <div className='text-lg'>Read what people have to say about us</div>
      </div>
      <div className='relative w-screen h-64'>
        <div className='relative w-screen'>
          {slider.slides.map((s, i) => (
            <div
              key={`doesn't matter ${i}`}
              style={{
                transform: `translateX(calc(${slider.slidePosition[i].position} *
              100vw))`,
              }}
              className={`grid absolute w-screen h-600px place-items-center
            ${slider.slidePosition[i].isVisible ? 'duration-700' : 'hidden'}`}
            >
              <div className='max-w-md p-4 md:max-w-lg lg:max-w-xl xl:max-w-2xl place-items-center grid'>
                <div className='p-4 bg-white border border-gray-300 grid place-items-center rounded-3xl'>
                  <div className='relative p-6 '>
                    <Image
                      alt='Image'
                      className='object-cover w-full h-full rounded-full'
                      height={200}
                      width={200}
                      src={s.image}
                    />
                  </div>
                  <div className='px-4 mb-1 text-2xl'>{s.name}</div>
                  <div className='px-4 mb-4 text-lg text-gray-500'>
                    {s.occupation}
                  </div>
                  <div className='w-full px-8'>
                    <div className='w-full border border-gray-300'></div>
                  </div>
                  <div className='p-4 text-3xl'>
                    <div className='flex items-center h-64'>{s.comment}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='relative flex items-center justify-between w-screen px-8 xl:justify-around h-600px xl:px-16'>
            <button
              className='w-16 h-16 bg-white border border-gray-300 rounded-full outline-none md:active:translate-y-24 active:translate-y-20 transform translate-y-20 md:translate-y-16 xl:w-24 xl:h-24 grid place-items-center xl:p-6 focus:outline-none hover:scale-110 active:translate-y-4 duration-500 easy-out'
              onClick={() => moveLeft()}
            >
              <ChevronLeft strokeWidth={1} size={32} />
            </button>
            <button
              className='w-16 h-16 bg-white border border-gray-300 rounded-full outline-none transform translate-y-20 md:translate-y-16 xl:w-24 xl:h-24 grid place-items-center xl:p-6 focus:outline-none hover:scale-110 md:active:translate-y-24 active:translate-y-20 duration-500 easy-out '
              onClick={() => moveRight()}
            >
              <ChevronRight strokeWidth={1} size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
