import React from 'react'
import Erin from "../imgs/ErinPricing.png"


const popUpErin = () => {
  return (
<>
      <div className="box">
            <a className="button" href="#popup4">Erin</a>
        </div>
        <div id="popup4" className="overlay">
            <div className="popup4">
                <a className="close" href="#">&times;</a>
                <div className="content">
                    <img src={Erin}/>
                </div>
            </div>
</div>
</>

  )
}

export default popUpErin;
