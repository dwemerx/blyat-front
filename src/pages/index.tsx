import Card from 'src/components/Card';

const Home: React.FC = () => (
  <div className='max-h-screen p-4 overflow-y-scroll font-light text-center text-gray-700 bg-gradient-to-tr from-white via-gray-100 to-gray-100 grid-cols-none font-body'>
    <div className='w-full overflow-hidden grid justify-items-center'>
      <Card
        title='FreshRSS'
        image={require('src/images/freshrss.png')}
        serviceLink='https://freshrss.blyat.org'
        description='A Powerfull RSS Reader'
      />
      <Card
        title='RSSHub'
        image={require('src/images/rsshub.png')}
        serviceLink='https://rsshub.blyat.org'
        description='RSS Aggregator'
      />
      <Card
        title='RSSBridge'
        image={require('src/images/rssbridge.png')}
        serviceLink='https://rssbridge.blyat.org'
        description='RSS Aggregator'
      />
      <Card
        title='Reddit Top RSS'
        image={require('src/images/reddit.png')}
        serviceLink='https://rtr.blyat.org'
        description='RSS Aggregator'
      />
      <Card
        title='MORSS'
        image={require('src/images/rss.png')}
        serviceLink='https://morss.blyat.org'
        description='RSS Aggregator'
      />
      <Card
        title='HN RSS'
        image={require('src/images/hnrss.png')}
        serviceLink='https://hnrss.org'
        description='RSS Aggregator'
      />
    </div>
  </div>
);

export default Home;
