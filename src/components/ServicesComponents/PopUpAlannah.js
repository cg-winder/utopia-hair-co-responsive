import React from 'react'
import Alannah from "../imgs/AlannahPricing.png";

const popUpAlannah = () => {
  return (
<>
      <div className="box">
            <a className="button" href="#popup2">Alannah</a>
        </div>
        <div id="popup2" className="overlay">
            <div className="popup2">
                <a className="close" href="#">&times;</a>
                <div className="content">
                    <img src={Alannah}/>
                </div>
            </div>
</div>
</>

  )
}

export default popUpAlannah;
