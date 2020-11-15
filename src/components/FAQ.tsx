import QACard from 'src/components/QACard';

const FAQ: React.FC = () => (
  <div className='relative w-screen min-h-screen'>
    <div className='mb-8'>
      <div className='text-5xl'>Frequently Asked Questions</div>
      <div className='text-lg'>
        Well, maybe not that frequently, but I&apos;ll answer them anyway
      </div>
    </div>
    <div className='relative grid place-items-center'>
      <QACard />
    </div>
  </div>
);

export default FAQ;
