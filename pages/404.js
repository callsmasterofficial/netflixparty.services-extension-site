import React from 'react'
import Navbar from '../components/Navbar'
import Error from '../components/404'
import { getHome, getallmeta } from '../locale/index'

export async function getStaticProps({ locale }) {
  const allmeta = getallmeta(locale)
  const home = getHome(locale)
  return {
    props: {
      home,
      allmeta,
      meta: {
        title: allmeta.foroforMetatitle,
        description: allmeta.foroforMetadescription,
        keywords: allmeta.homeMetakeywords,
        pageUrl: 'https://www.netflixparty.services/',
        featuredImage: '/logo.png',
      },
    },
  }
}
function error({ home }) {
  return (
    <div className="error_404 ">
      <div>
        <Navbar installBtn={home.header.installBtn} />
      </div>
      <Error />
    </div>
  )
}

export default error
