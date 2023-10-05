import React from 'react'
import Ellie1 from "../imgs/ElliePricing1.png";
import Ellie2 from "../imgs/ElliePricing2.png"


const popUpEllie = () => {
  return (
<>
      <div className="box">
            <a className="button" href="#popup3">Ellie's Pricing</a>
        </div>
        <div id="popup3" className="overlay">
            <div className="popup">
                <a className="close" href="#">&times;</a>
                <div className="content">
                    <img src={Ellie1}/>
                    <img src={Ellie2}/>
                </div>
            </div>
</div>
</>

  )
}

export default popUpEllie;