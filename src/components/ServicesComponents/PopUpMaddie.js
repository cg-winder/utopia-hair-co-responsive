import React from 'react'
import Nicola1 from "../imgs/NicolaPricing1.png";


const popUpMaddie = () => {
  return (
<>
      <div className="box">
            <a className="button" href="#popup4">Maddie</a>
        </div>
        <div id="popup4" className="overlay">
            <div className="popupOnePage">
                <a className="close" href="#">&times;</a>
                <div className="content">
                    <img src={Nicola1}/>
                </div>
            </div>
</div>
</>

  )
}

export default popUpMaddie;