import React from 'react'
import Nicola1 from "../imgs/NicolaPricing1.png";
import Nicola2 from "../imgs/NicolaPricing2.png"


const popUpGabrielle = () => {
  return (
<>
      <div className="box">
            <a className="button" href="#popup1">Gabrielle</a>
        </div>
        <div id="popup1" className="overlay">
            <div className="popup">
                <a className="close" href="#">&times;</a>
                <div className="content">
                    <img src={Nicola1}/>
                    <img src={Nicola2}/>
                </div>
            </div>
</div>
</>

  )
}

export default popUpGabrielle;
