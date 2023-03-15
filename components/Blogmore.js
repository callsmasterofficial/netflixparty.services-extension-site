import React from 'react'

function Blogmore({ data }) {
  return (
    <div className="Blogmore">
      <div className="blogmore-container  m-auto  w-[80%]">
        {/* map starts here */}
        {/* {data.map((item) => ( */}
        <div className="map  backdrop-blur-md backdrop-opacity-5">
          <div className="text-box my-4 flex  items-center">
            <h2 className="primary_text_color my-2 text-xl font-semibold">
              {data.title}
            </h2>
          </div>
          <div className="img-box my-4 flex h-[100%] w-[100%] items-start justify-start object-contain">
            {/* <Link href="/blog"> */}
            <img
              className="img my-2 cursor-pointer rounded-md"
              src={data.featured_image}
              alt="Batman Image"
              style={{ boxShadow: '0px 0px 4px 4px white' }}
            />
            {/* </Link> */}
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: data.description
            }}
          />
        </div>
        {/* ))} */}

        <div>
          <span >Tags: - </span>{' '}
          {data.tags?.map((item, index) => (
            <span key={`tag-${index}-${item}`}>{item}, </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogmore
