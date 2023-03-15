import React from 'react'

function Video_container() {
  return (
    <div className="w-[100%]">
      <div className="m-auto mt-20 flex w-[80%] items-center justify-center ">
        <h1 className="text-2xl font-semibold text-white md:text-4xl ">
          How to Join a NETFLIX PARTY
        </h1>
      </div>
      <div className="main-container  m-auto  w-[80%] md:flex ">
        <div className=" h-fit cursor-pointer   md:ml-4 md:w-[100%]">
          <p className="pt-[40px]  text-justify text-white">
            First, you need Netflix Party Extension in your system to start the
            procedure. Once you install it, you can pin it to the toolbar. Then,
            click on the URL shared by one of your friends who will host a
            Netflix Watch Party. This click will redirect you to your Netflix
            account; log in to your official Netflix account by adding the
            required information. Make sure that you have your own subscribed
            Netflix account, including the host and all the participants of the
            group watch party. Once you are done with log in to it, now you have
            entered the existing Watch Party. Have fun with all the members and
            enhance your movie experience with the incredible group chat
            feature.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Video_container
