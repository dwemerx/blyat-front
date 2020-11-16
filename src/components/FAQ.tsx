import QACard from 'src/components/QACard';

const FAQ: React.FC = () => (
  <div id='phacyou' className='relative w-screen min-h-screen'>
    <div className='mb-16'>
      <div className='text-5xl'>Frequently Asked Questions</div>
      <div className='text-lg'>
        Well, maybe not that frequently, but I&apos;ll answer them anyway
      </div>
    </div>
    <div className='relative px-4 grid place-items-center'>
      <QACard
        question='Can I donate?'
        answer='Yes! You definitely can. Please choose your favorite service and donate to the developer directly. BLYAT does not accept any donations, though.'
      />
      <QACard
        question='Can I trust you with my data?'
        answer='If you are an adventurist, yes.'
      />
      <QACard
        question='Can I copy your project and host it myself?'
        answer='Yes! The source code for the front page, as well as for the docker files, is somewhere on github. If you find it, please leave a star, so my self esteem will grow by exatly one star.'
      />
      <QACard
        question='How reliable your servers are?'
        answer="Well, all services are hosted on a Hetzner's VPS (Finland). It's pretty good."
      />
      <QACard
        question='Are you trolling me?'
        answer='No, why would you think that?'
      />
    </div>
  </div>
);

export default FAQ;
