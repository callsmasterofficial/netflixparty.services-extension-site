import React from 'react'
import Link from 'next/link'
import siteConfig from '../siteConfig'
import InstallButton from "../components/InstallButton"

function Navbar() {
  return (
    <div className="nav-container flex w-screen items-center justify-evenly p-3">
      <div className="second  md:flex w-[80%] m-auto items-center justify-between">
        <Link href="/">
          <div className="logo-box md:m-2 md:cursor-pointer ">
            <img className='max-w-[75%]' src={siteConfig.logo} alt={siteConfig.siteName} />
          </div>
        </Link>
        <div className='ml-0 mt-4  md:m-0 lg:m-0 xl:m-0'>
        <InstallButton />
        </div>
      </div>
    </div>
  )
}

export default Navbar
