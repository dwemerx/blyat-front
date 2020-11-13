import Card from 'src/components/Card';
import Front from 'src/components/Front';
import Layout from 'src/components/Layout';
import Testimonials from 'src/components/Testimonials';

const Home: React.FC = () => (
  <Layout>
    <Front />
    <Testimonials />
    <div
      id='services'
      className='p-4 overflow-hidden justify-items-center grid'
    >
      <div className='mb-8 text-6xl'>Services</div>
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
        serviceLink='https://hnrss.org'
        description='Advanced HN RSS Bridge'
        sourceLink='https://github.com/hnrss/hnrss'
        mainInstanceLink='https://hnrss.org'
      />
    </div>
  </Layout>
);

export default Home;
