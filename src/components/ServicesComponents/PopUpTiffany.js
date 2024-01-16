import React from 'react'
import Nicola1 from "../imgs/NicolaPricing1.png";
import Nicola2 from "../imgs/NicolaPricing2.png"


const popUpTiffany = () => {
  return (
<>
      <div className="box">
            <a className="button" href="#popup6">Tiffany</a>
        </div>
        <div id="popup6" className="overlay">
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

export default popUpTiffany;