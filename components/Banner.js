import React from 'react'
import siteConfig from '../siteConfig'

function Banner() {
  return (
    <div className="m-auto mb-10  w-[80%] items-center justify-center  p-0 py-2 md:flex md:w-full md:bg-red-700 md:p-3.5">
      <h1 className="primary_text_color md:primary_text_color ml-4 text-lg  md:font-semibold  ">
        {siteConfig.siteName}
      </h1>

      <h5 className="primary_text_color md:primary_text_color ml-4 text-lg md:ml-1.5 md:font-semibold ">
        is now available on Google Chrome, Microsoft Edge and Mozilla Firefox
      </h5>
    </div>
  )
}

export default Banner
