import db from '../../config/db'
import Blog from '../../models/blog'
import { i18n } from '../../next.config'
import siteConfig from '../../siteConfig'

export default async function handler(req, res) {
  try {
    await db()
    const { locales } = i18n
    const blogs = await Blog.find({ site: siteConfig.siteId }, '-_id slug')
    res.setHeader('Content-Type', 'text/xml')

    // Instructing the Vercel edge to cache the file
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

    // generate sitemap here
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
        ${locales
          .map(
            (locale) =>
              `<url>
            <loc>${siteConfig.url}${locale}</loc>
        </url>`
          )
          .join('')}
        ${locales
          .map(
            (locale) =>
              `<url>
            <loc>${siteConfig.url}${locale}/blog</loc>
        </url>`
          )
          .join('')}
      ${blogs
        .map(({ slug }) => {
          return locales
            .map(
              (locale) =>
                `<url>
                  <loc>${`${siteConfig.url}${locale}/blog/${encodeURIComponent(
                    slug
                  )}`}</loc>
                </url>`
            )
            .join('')
        })
        .join('')}
      </urlset>`
    res.end(xml)
  } catch (err) {
    res.send({ err: err.message })
  }
}
