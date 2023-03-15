import React from 'react'
import siteConfig from '../siteConfig'

const createSitemap = (data) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
        <url>
            <loc>${siteConfig.url}</loc>
        </url>
        <url>
            <loc>${siteConfig.url}blogs/</loc>
        </url>
        <url>
            <loc>${siteConfig.url}404/</loc>
        </url>
        ${data
          .map(({ slug }) => {
            return `
                    <url>
                        <loc>${`${siteConfig.url}blog/${encodeURIComponent(
                          slug
                        )}`}</loc>
                    </url>
                `
          })
          .join('')}
    </urlset>
    `

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await fetch(`${siteConfig.url}/api/sitemap`)
    const data = await request.json()
    res.setHeader('Content-Type', 'application/xml')
    res.write(createSitemap(data))
    res.end()
  }
}

export default Sitemap
