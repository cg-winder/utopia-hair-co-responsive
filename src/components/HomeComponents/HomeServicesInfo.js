import React from 'react'
import hair from "../imgs/blondec.png"
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
        <div className="homeservices-flexwrap">
            <div className="homeservices-hair" id="homeservices-service">
              <img src={hair}/><div><HomeSpecialiseHair /></div>
            </div>
            <div className="homeservices-nails"  id="homeservices-service">
              <img src={nails}/><div><HomeSpecialiseNails /></div>
            </div>
        </div>
        <div className="homeservices-flexwrap">
          <div className="homeservices-brows" id="homeservices-service">
            <img src={brows}/><div><HomeSpecialiseBrows /></div>
          </div>
          <div className="homeservices-lashes" id="homeservices-service">
            <img src={lashes}/><div><HomeSpecialiseLashes /></div>
          </div>
        </div>
      </div>
        <a  href="/services" className="homeservices-link"><span>More Treatment Details</span></a>
    </div>
  )
}

export default HomeServicesInfo
