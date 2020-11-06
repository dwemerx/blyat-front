import Card from 'src/components/Card';
import Layout from 'src/components/Layout';

const Home: React.FC = () => (
  <Layout>
    <div className='absolute w-full bg-teal-400 h-x2 front-circle-1'></div>
    <div className='absolute w-full bg-teal-700 h-x2 front-circle-2'></div>
    <div className='absolute w-full bg-teal-900 h-x2 front-circle-3'></div>
    <div className='h-screen mx-16 overflow-hidden grid lg:grid-cols-2 place-items-center'>
      <div className='z-10 w-full text-3xl text-white lg:ml-16 lg:pr-24 xl:pr-64 max-w-screen-sm sm:text-5xl'>
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
          src='/images/timeline.svg'
          alt='Timeline'
        />
        <div className='p-64'></div>
      </div>
    </div>
    <div
      id='services'
      className='p-4 overflow-hidden justify-items-center grid'
    >
      <Card
        title='FreshRSS'
        image={'/images/freshrss.png'}
        serviceLink='https://freshrss.blyat.org'
        description='A Powerfull RSS Reader'
      />
      <Card
        title='RSSHub'
        image={'/images/rsshub.png'}
        serviceLink='https://rsshub.blyat.org'
        description='RSS Aggregator'
      />
      <Card
        title='RSSBridge'
        image={'/images/rssbridge.png'}
        serviceLink='https://rssbridge.blyat.org'
        description='RSS Aggregator'
      />
      <Card
        title='Reddit Top RSS'
        image={'/images/reddit.png'}
        serviceLink='https://rtr.blyat.org'
        description='RSS Aggregator'
      />
      <Card
        title='MORSS'
        image={'/images/rss.png'}
        serviceLink='https://morss.blyat.org'
        description='RSS Aggregator'
      />
      <Card
        title='HN RSS'
        image={'/images/hnrss.png'}
        serviceLink='https://hnrss.org'
        description='RSS Aggregator'
      />
    </div>
  </Layout>
);

export default Home;
