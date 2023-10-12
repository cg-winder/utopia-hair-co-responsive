import React from 'react'
import sign from "../imgs/signnobg-removebg-preview.png"


const HomeWelcome = () => {
  return (
    <div className="homewelcome-wrap">
      <div className="homewelcome-header-img">
        <div className="homewelcome-header"><p>Your</p><p>Hair</p><p id="homewelcome-left">Home</p></div>
        <img src={sign}/>
      </div>
        <div className="homewelcome-p">Welcome to Utopia Hair Co.</div>
    </div>
  )
}
export default HomeWelcome;
