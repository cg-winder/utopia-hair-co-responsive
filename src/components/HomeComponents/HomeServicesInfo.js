import React from 'react'
import hair from "../imgs/hairbalayage.jpeg"
import nails from "../imgs/nails2.jpeg"
import brows from "../imgs/lashes1.jpeg"
import lashes from "../imgs/lashes2.jpeg";

const HomeServicesInfo = () => {
  return (
    <div className="homeservices-info-wrap">
      <div className="homeservices-info">
  <div className="homeservices-hair">
    <img src={hair}/>
    <p>Refreshing your blonde, seamlessly blending your balayage or maybe a major colour change? Here at Utopia Hair Co we are passionate about all things hair.</p>
  </div>
  <div className="homeservices-nails">
    <img src={nails}/>
    <p> Feel naked without 10/10 nails? From a basic manicure to gels with extravagent nail art, your nails will never have been so healthy and looked so good.</p>
  </div>
  <div className="homeservices-brows">
    <img src={brows}/>
    <p> "If you don't have eyebrows, you don't really have a face." - Saoirse Ronan.
<div>Truer words have never been spoken.</div></p>
  </div>
  <div className="homeservices-lashes">
    <img src={lashes}/>
    <p> Can't be bothered with mascara? Neither can we. Enhance your natural everyday look (and still rub your eyes!) with a tint and lift of your lashes.</p>
  </div>
      </div>
      <div className="homeservices-link"><a href="/services"><span>More Treatment Details</span></a></div>
    </div>
  )
}

export default HomeServicesInfo
