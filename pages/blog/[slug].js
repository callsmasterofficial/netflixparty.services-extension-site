import React from 'react'
import Navbar from '../../components/Navbar'

import Blogmore from '../../components/Blogmore'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import db from '../../config/db'
import Blog from '../../models/blog'
import siteConfig from '../../siteConfig'

const site = siteConfig.siteId

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // false or 'blocking'
  }
}

export async function getStaticProps({ params: { slug } }) {
  try {
    db()
    const blog = await Blog.findOne({ site, slug }).populate('cat')
    const data = JSON.parse(JSON.stringify(blog))
    return {
      props: {
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

function blog({ data }) {
  return (
    <div className="blogmore">
      <Navbar />
      <Banner />
      {data && <Blogmore data={data} />}
      <Footer />
    </div>
  )
}

export default blog
