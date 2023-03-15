import React from 'react'

function Video_content() {
  return (
    <div className="m-auto mt-10 w-[80%] md:flex">
      <div className="-pt[30px] h-fit cursor-pointer  pt-[20px] md:ml-4 md:w-[50%]">
        <h1 className="mb-[20px] text-3xl font-semibold text-white md:text-4xl">
          Enhance Virtual Movie Fun With Fun Chat
        </h1>

        <p className="text-white">
          Enjoy the real-time chat feature and share the viewing experience with
          existing participants, no matter where they are in the world.
          Apparently, have a chit-chat with all the co-watchers while enjoying
          the Netflix Watch Party. Enhance your experience by discussing the
          videos currently playing, and feel like they are sitting next to you.
        </p>
      </div>
      <div className="video-box ml-2 md:mt-0 md:w-[50%]">
        <video
          controls
          autoPlay
          muted
          src="https://super-dashboard-images-cdn.s3.amazonaws.com/videos/Sync-Netflix-Party-in-HD-Final.mp4"
        ></video>
      </div>
    </div>
  )
}

export default Video_content
