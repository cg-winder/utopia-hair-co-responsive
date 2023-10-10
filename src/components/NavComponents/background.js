import React from 'react'
import video from "../imgs/pampasExtended.mp4"
import video1 from "../imgs/waveHD.mp4"
import video2 from "../imgs/pampas.mp4"

const Background = () => {
  return (
    <div>
      <video autoPlay muted loop playsInline className="video">
        <source src={video2} type="video/mp4" />
      </video>
    </div>
  )
}

export default Background;
