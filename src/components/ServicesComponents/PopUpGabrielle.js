import React from 'react'
import Gabrielle1 from "../imgs/GabriellePricing1.png";
import Gabrielle2 from "../imgs/GabriellePricing2.png"


const popUpGabrielle = () => {
  return (
<>
      <div className="box">
            <a className="button" href="#popup5">Gabrielle</a>
        </div>
        <div id="popup5" className="overlay">
            <div className="popup">
                <a className="close" href="#">&times;</a>
                <div className="content">
                    <img src={Gabrielle1}/>
                    <img src={Gabrielle2}/>
                </div>
            </div>
</div>
</>

  )
}

export default popUpGabrielle;
