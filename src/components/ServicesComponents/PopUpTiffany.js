import React from 'react'
import Tiffany1 from "../imgs/TiffanyPricing.png";



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
                    <img src={Tiffany1}/>
                </div>
            </div>
</div>
</>

  )
}

export default popUpTiffany;