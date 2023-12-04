import React from 'react'
import video from "../imgs/pampascompressed.mp4"


const Background = () => {
  return (
    <div className="background">
      <video autoPlay muted loop playsInline className="video">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default Background;
