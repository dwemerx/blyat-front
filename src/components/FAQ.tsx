import QACard from 'src/components/QACard';

const FAQ: React.FC = () => (
  <div id='phacyou' className='relative w-screen min-h-screen'>
    <div className='absolute bg-teal-800 rounded-full faq-circle-1' />
    <div className='absolute bg-teal-500 rounded-full faq-circle-2' />
    <div className='mb-16'>
      <div className='relative text-5xl'>Frequently Asked Questions</div>
      <div className='relative text-lg'>
        Well, maybe not that frequently, but I&apos;ll answer them anyway
      </div>
    </div>
    <div className='relative px-4 grid place-items-center'>
      <QACard
        question='What is RSS?'
        answer='It is a way to follow blogs, news websites, Twitter accounts, Youtube channels and so on. You can follow pretty much anything, even search results and comments on certain posts. RSS also allows you to follow your favorite content creators without an account or giving up your data to social media companies.'
      />
      <QACard
        question='Why does this project exist?'
        answer='Many popular websites do not provide an official RSS feed and this project attempts to fix this, blyat. '
      />
      <QACard
        question='Can I donate?'
        answer='Yes! You definitely can. Please choose your favorite service and donate to the developer directly. BLYAT does not accept any donations, though.'
      />
      <QACard
        question='Can I trust you with my data?'
        answer='If you are an adventurist, yes.'
      />
      <QACard question='Do you sell it?' answer='I just... You... Whoah. No.' />
      <QACard
        question='Can I host these services myself?'
        answer='Yes! The source code for the front page, as well as for the container images, is somewhere on Github. If you find it, please leave a star, so my self esteem will grow by exatly one star.'
      />
      <QACard
        question='How reliable your servers are?'
        answer="Well, all services are hosted on a Hetzner's VPS (Finland). It's pretty good."
      />
      <QACard
        question='Are you trolling me?'
        answer='No, why would you think that?'
      />
      {/*This is why I use Typescript*/}
      <QACard
        question='Gib. Mor.'
        answer={((<GIB_MOR_ANSWER />) as unknown) as string}
      />
    </div>
  </div>
);

const GIB_MOR_ANSWER = () => (
  <div className='inline-block w-3/4 pr-8'>
    If you are looking for more tools, check out{' '}
    <a
      className='text-blue-500 hover:text-blue-700'
      href='https://github.com/iv-org/invidious'
    >
      Invidious
    </a>{' '}
    (Youtube),{' '}
    <a
      className='text-blue-500 hover:text-blue-700'
      href='https://github.com/zedeus/nitter'
    >
      Nitter
    </a>{' '}
    (Twitter) and{' '}
    <a
      className='text-blue-500 hover:text-blue-700'
      href='https://sr.ht/~cadence/bibliogram/'
    >
      Bibliogram
    </a>{' '}
    (Instagram). You should also take a look at{' '}
    <a
      className='text-blue-500 hover:text-blue-700'
      href='https://github.com/DIYgod/RSSHub-Radar'
    >
      RSS Radar
    </a>
    , which is a browser extension that helps discovering official feeds.
  </div>
);

export default FAQ;
