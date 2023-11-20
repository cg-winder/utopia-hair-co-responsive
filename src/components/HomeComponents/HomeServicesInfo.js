import React from 'react'
import hair from "../imgs/hairbalayage.jpeg"
import nails from "../imgs/nails2.jpeg"
import brows from "../imgs/brows3.jpeg"
import lashes from "../imgs/lashes2.jpeg";
import HomeSpecialiseHair from  "./HomeSpecialiseHair" 
import HomeSpecialiseNails from  "./HomeSpecialiseNails" 
import HomeSpecialiseBrows from  "./HomeSpecialiseBrows" 
import HomeSpecialiseLashes from  "./HomeSpecialiseLashes" 

const HomeServicesInfo = () => {
  return (
    <div className="homeservices-info-wrap">
      <div className="homeservices-info">
  <div className="homeservices-hair">
    <img src={hair}/><div><HomeSpecialiseHair /></div>
  </div>
  <div className="homeservices-nails">
    <img src={nails}/><div><HomeSpecialiseNails /></div>
  </div>
  <div className="homeservices-brows">
    <img src={brows}/><div><HomeSpecialiseBrows /></div>
  </div>
  <div className="homeservices-lashes">
    <img src={lashes}/><div><HomeSpecialiseLashes /></div>
  </div>
      </div>
      <div className="homeservices-link"><a href="/services"><span>More Treatment Details</span></a></div>
    </div>
  )
}

export default HomeServicesInfo
