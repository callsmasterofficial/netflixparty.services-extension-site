import React from 'react'
import Navbar from '../../components/Navbar'
import Banner from '../../components/Banner'
import Blogimg from '../../components/Blogimg'
import Footer from '../../components/Footer'
import db from '../../config/db'
import Blog from '../../models/blog'
import siteConfig from '../../siteConfig'
import { getHome, getallmeta } from '../../locale/index'

const site = siteConfig.siteId

export async function getStaticProps({ locale }) {
  const home = getHome(locale)
  const allmeta = getallmeta(locale)
  try {
    await db()
    const blogsRaw = await Blog.find(
      { site },
      'title slug featured_image createdAt cat tags author meta_description meta_keywords',
      { sort: { createdAt: -1 }, limit: 12 }
    )
      .populate('cat', 'name slug')
      .exec()
    const data = JSON.parse(JSON.stringify(blogsRaw))
    return {
      props: {
        home,
        allmeta,
        meta: {
          title: allmeta.blogMetatitle,
          description: allmeta.blogMetadescription,
          keywords: allmeta.homeMetakeywords,
          pageUrl: 'https://www.netflixparty.services/blog',
          featuredImage: '/logo.png',
        },
        data,
      },
    }
  } catch (err) {
    return {
      props: {
        err,
      },
    }
  }
}

function blog({ data, home = {} }) {
  return (
    <div className="blogpage">
      <Navbar installBtn={home.header.installBtn} />
      <Banner heading={home.header.navBarHeading} />
      <Blogimg data={data} />
      <Footer installBtn={home.header.installBtn} footer={home.footer} />
    </div>
  )
}

export default blog
