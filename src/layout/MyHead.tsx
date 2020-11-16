import Head from 'next/head';

const MyHead: React.FC = () => (
  <Head>
    <title>BLYAT</title>
    <meta charSet='UTF-8' />
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
    <meta
      name='keywords'
      content='BLYAT, Service Provider, RSS, FreshRSS, RSSHub, RSSBridge, Reddit Top RSS, MORSS, HN RSS'
    />
    <meta
      name='description'
      content="A service provider you probably shouldn't trust"
    />
    <meta name='author' content='dwemerx' />
    <link rel='shortcut icon' type='image/ico' href='/favicon.ico' />
    <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
    <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
    <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
    <link rel='manifest' href='/site.webmanifest' />
  </Head>
);

export default MyHead;
