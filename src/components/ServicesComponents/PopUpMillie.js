import React from 'react'
import Millie from "../imgs/MilliePricing.png"


const popUpMillie = () => {
  return (
<>
      <div className="box">
            <a className="button" href="#popup5">Millie's Pricing</a>
        </div>
        <div id="popup5" className="overlay">
            <div className="popup5">
                <a className="close" href="#">&times;</a>
                <div className="content">
                    <img src={Millie}/>
                </div>
            </div>
</div>
</>

  )
}

export default popUpMillie;
