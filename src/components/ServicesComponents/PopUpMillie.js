import React from 'react'
import Millie from "../imgs/MilliePricing.png"


const popUpMillie = () => {
  return (
<>
      <div className="box">
            <a className="button" href="#popup8">Millie</a>
        </div>
        <div id="popup8" className="overlay">
            <div className="popupOnePage">
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
