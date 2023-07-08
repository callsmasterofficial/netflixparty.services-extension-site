import '../styles/globals.css'
import Head from 'next/head'
import siteConfig from '../siteConfig'
import Seotags from '../components/Seotags'

function MyApp({ Component, pageProps }) {
  const schema = {
    '@context': 'https://schema.org/',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: siteConfig.url,
  }
  const mySchema = JSON.stringify(schema)
  const gtagCode = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
 
  gtag('config', 'UA-${siteConfig.gtagId}');`
  const gtagUrl = `https://www.googletagmanager.com/gtag/js?id=UA-${siteConfig.gtagId}`
  return (
    <>
      <Head>
        <title>
          {pageProps.meta
            ? pageProps.meta.title
            : 'Netflix Party - Stream Netflix with Your Friends | Install the Extension'}
        </title>
        {pageProps.meta && (
          <meta property="og:image" content={pageProps.meta.featuredImage} />
        )}
        {pageProps.meta && <Seotags meta={pageProps.meta} />}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="article" />
        <meta property="og:sitename" content={siteConfig.siteName} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: mySchema }}
        />
        <script async src={gtagUrl}></script>
        <script dangerouslySetInnerHTML={{ __html: gtagCode }} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
