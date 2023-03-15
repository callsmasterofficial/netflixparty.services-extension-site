import React from 'react'
import { useRouter } from 'next/router'
import siteConfig from '../siteConfig'

function Blogimg({ data }) {
  const router = useRouter()
  return (
    <div className="main-blog-img-container mb-[15%] w-screen">
      <div className="blogimg-container  m-auto mb-6 w-[80%] p-2 md:mb-0 ">
        <div className="text-box  primary_text_color">
          <h2 className="primary_text_color m-5 text-3xl font-semibold ">
            Blog
          </h2>
        </div>
        {/* Image Starts here */}

        <main className="main-div md:grid md:grid-cols-3">
          {/* map starts here */}
          {data.map((item) => (
            <div
              className="blog-box m-1 w-auto rounded-sm border-2 border-white shadow-sm"
              style={{ boxShadow: '3px 3px 2px #888888' }}
              key={item._id}
            >
              <div
                className="img-box"
                onClick={() =>
                  router.push(`${siteConfig.blogUrl}/${item.slug}`)
                }
              >
                <img
                  className="w-[680px]  cursor-pointer object-contain"
                  src={item.featured_image}
                  alt=""
                />
              </div>

              <div className="text-box primary_text_color mt-10 p-3 text-center">
                <h3 className="primary_text_color text-xl font-semibold">
                  {item.title}
                </h3>
                <span className="primary_text_color mb-4 text-base font-normal">
                  {item.createdAt.slice(0, 10)}
                </span>
                <p className="primary_text_color mt-3 text-base font-light">
                  {item.meta_description}
                </p>

                <span
                  className="primary_text_color mt-1 cursor-pointer font-light"
                  onClick={() =>
                    router.push(` ${siteConfig.blogUrl} /${item.slug}`)
                  }
                >
                  {item.btn}
                </span>
              </div>
            </div>
          ))}
        </main>

        {/* imageEnds here */}
      </div>
    </div>
  )
}

export default Blogimg

// const data = [
//   {
//     id: 1,
//     img: "https://www.hbomaxwatchparty.com/wp-content/uploads/2022/04/The-Batman-is-coming-to-HBO-Max-earlier-than-we-thought.jpg",
//     heading: "The Batman Is Coming To Hbo Max Earlier Than We Thought",
//     comment: 'April 16, 2022  No Comments',
//     description: "The Batman Is Coming To Hbo Max Earlier Than We Thought Batman has given an official HBO Max release date. It’s interesting that it will",
//     btn: "Read More »"
//   },

//   {
//     id: 2,
//     img: "https://www.hbomaxwatchparty.com/wp-content/uploads/2022/04/HBO-Max.jpg",
//     heading: "What to Watch on HBO Max?",
//     comment: 'December 21, 2021 / No Comments',
//     description: "What to Watch on HBO Max? What to watch on HBO Max? It’s quite a popular streaming website amongst the binge-watchers. Therefore, HBO Max is",
//     btn: "Read More »"
//   },

// ]
