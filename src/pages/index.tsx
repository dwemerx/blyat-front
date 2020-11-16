import FAQ from 'src/components/FAQ';
import Front from 'src/components/Front';
import Services from 'src/components/Services';
import Testimonials from 'src/components/Testimonials';
import Layout from 'src/layout/Layout';

const Home: React.FC = () => (
  <Layout>
    <Front />
    <Testimonials />
    <Services />
    <FAQ />
  </Layout>
);

export default Home;
