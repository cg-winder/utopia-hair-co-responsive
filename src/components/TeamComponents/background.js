import React from 'react'
import video from "../imgs/palmsvid.mp4"
import video2 from "../imgs/pinkwavevid.mp4"
import video3 from "../imgs/shadowvid.mp4"
import video4 from "../imgs/pampasvid.mp4"
import video5 from "../imgs/bigpalmvid.mp4"
import video6 from "../imgs/naturalwave.mp4"
import video7 from "../imgs/waveHD.mp4"

const Background = () => {
  return (
    <div>
      <video autoPlay muted loop playsInline className="video">
        <source src={video7} type="video/mp4" />
      </video>
    </div>
  )
}

export default Background;
