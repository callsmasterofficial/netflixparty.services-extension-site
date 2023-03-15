import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Text from '../components/Text'
import Text2 from '../components/Text2'
import Footer from '../components/Footer'
import Script from 'next/script'

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title:
          'Netflix Party - Stream Netflix with Your Friends | Install the Extension',
        description:
          'Netflix Party allows Netflix subscribers to watch movies and shows together online and connect from various locations.',
        keywords:
          'Netflix Party, Netflix Watch Party, Netflix Party Extension, Netflix Party Chrome Extension, Watch Party Netflix, How to do Netflix Party, How to use Netflix Party, How to do a Netflix Party, Netflix Watch Party Extension',
        pageUrl: 'https://www.netflixparty.services/',
        featuredImage: '/logo.png',
      },
    },
  }
}

const Home = () => {
  return (
    <div>
      <Script src="https://cdn.tailwindcss.com" />

      <Navbar />
      <Banner />
      <Text />
      <Text2 />
      <Footer />

      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
    </div>
  )
}

export default Home
