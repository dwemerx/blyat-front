import Card from 'src/components/Card';
import Front from 'src/components/Front';
import Layout from 'src/components/Layout';

const Home: React.FC = () => (
  <Layout>
    <Front />
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
