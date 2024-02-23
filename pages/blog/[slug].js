import React from 'react'
import Navbar from '../../components/Navbar'

import Blogmore from '../../components/Blogmore'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import db from '../../config/db'
import Blog from '../../models/blog'
import siteConfig from '../../siteConfig'
import { getHome } from '../../locale/index'

const site = siteConfig.siteId

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // false or 'blocking'
  }
}

export async function getStaticProps({ params: { slug }, locale }) {
  const home = getHome(locale)
  try {
    db()
    const blog = await Blog.findOne({ site, slug }).populate('cat')
    const data = JSON.parse(JSON.stringify(blog))
    return {
      props: {
        home,
        meta: {
          title: data.title,
          description: data.meta_description,
          keywords: data.meta_keywords,
          pageUrl: `https://www.netflixparty.services${siteConfig.blogUrl}/${slug}`,
          featuredImage: data.featured_image,
        },
        data,
      },
      revalidate: 7200,
    }
  } catch (err) {
    // console.log(err)
    return {
      redirect: {
        destination: '/all-stores',
        permanent: false,
      },
    }
  }
}

function blog({ data, home = {} }) {
  return (
    <div className="blogmore">
      {home.header && home.footer && (
        <>
          <Navbar installBtn={home?.header?.installBtn} />
          <Banner heading={home?.header?.navBarHeading} />
          {data && <Blogmore data={data} />}
          <Footer installBtn={home?.header?.installBtn} footer={home.footer} />
        </>
      )}
    </div>
  )
}

export default blog
