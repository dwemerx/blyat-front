import Card from 'src/components/Card';

const Services: React.FC = () => (
  <div
    id='services'
    className='relative w-screen h-auto p-4 mb-32 grid justify-items-center'
  >
    <div className='absolute bg-teal-400 rounded-full services-circle-1' />
    <div className='relative mt-64 text-6xl sm:mt-0'>Services</div>
    <div className='relative mb-16'>
      Just take a look at what we have to offer. And for the best part, it&#39;s
      all{' '}
      <span className='font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 via-pink-500 to-red-500'>
        FREE
      </span>
      ! <span className='italic'>Wow!</span>
    </div>
    <Card
      title='FreshRSS'
      image={'/images/freshrss.png'}
      serviceLink='https://freshrss.blyat.org'
      description='Powerfull RSS Reader'
      sourceLink='https://github.com/FreshRSS/FreshRSS'
    />
    <Card
      title='RSSHub'
      image={'/images/rsshub.png'}
      serviceLink='https://rsshub.blyat.org'
      description='RSS Aggregator, written in Java'
      sourceLink='https://github.com/DIYgod/RSSHub'
      mainInstanceLink='https://rsshub.app/'
    />
    <Card
      title='RSSBridge'
      image={'/images/rssbridge.png'}
      serviceLink='https://rssbridge.blyat.org'
      description='RSS Aggregator, written in PGP'
      sourceLink='https://github.com/RSS-Bridge/rss-bridge'
    />
    <Card
      title='RSS Proxy'
      image={'/images/rss-proxy.svg'}
      serviceLink='https://rssproxy.blyat.org'
      description='Generate RSS Feeds for (almost) anything'
      sourceLink='https://github.com/damoeb/rss-proxy'
      mainInstanceLink='https://rssproxy.migor.org/'
    />
    <Card
      title='Reddit Top RSS'
      image={'/images/reddit.png'}
      serviceLink='https://rtr.blyat.org'
      description='Reddit RSS Bridge'
      sourceLink='https://github.com/johnwarne/reddit-top-rss'
      mainInstanceLink='https://reddit-top-rss.herokuapp.com/?subreddit=pics'
    />
    <Card
      title='MORSS'
      image={'/images/rss.png'}
      serviceLink='https://morss.blyat.org'
      description='Get Full Articles from Your Feeds'
      sourceLink='https://github.com/pictuga/morss'
      mainInstanceLink='https://morss.it/'
    />
    <Card
      title='HN RSS'
      image={'/images/hnrss.png'}
      serviceLink='https://hnrss.blyat.org'
      description='Advanced HN RSS Bridge'
      sourceLink='https://github.com/hnrss/hnrss'
      mainInstanceLink='https://hnrss.org'
    />
    <Card
      title='Kill The Newsletter'
      image={'/images/kill-the-newsletter.svg'}
      serviceLink='https://ktn.blyat.org'
      description='Convert email newsletters into Atom feeds'
      sourceLink='https://github.com/leafac/kill-the-newsletter.com'
      mainInstanceLink='https://kill-the-newsletter.com/'
    />
    <div className='relative mt-4 text-xl sm:mt-0'>Check out FAQ for more</div>
  </div>
);

export default Services;
