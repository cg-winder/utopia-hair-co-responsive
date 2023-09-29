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
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                iaculis vel magna a consequat. Cras at neque a lacus egestas
                porttitor.</p>
  </div>
  <div className="homeservices-nails">
    <img src={nails}/>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                iaculis vel magna a consequat. Cras at neque a lacus egestas
                porttitor.</p>
  </div>
  <div className="homeservices-brows">
    <img src={brows}/>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                iaculis vel magna a consequat. Cras at neque a lacus egestas
                porttitor.</p>
  </div>
  <div className="homeservices-lashes">
    <img src={lashes}/>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                iaculis vel magna a consequat. Cras at neque a lacus egestas
                porttitor.</p>
  </div>
      </div>
      <div className="homeservices-link"><a href="/services"><span>More Treatment Details</span></a></div>
    </div>
  )
}

export default HomeServicesInfo
