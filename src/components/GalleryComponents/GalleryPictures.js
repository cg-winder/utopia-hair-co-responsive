import React from 'react'
import hair1 from "../imgs/hair1.jpeg"
import hair2 from "../imgs/hair2.jpeg"
import hair3 from "../imgs/hair3.jpeg"
import nail1 from "../imgs/nails1.jpeg"
import hair4 from "../imgs/hair4.jpeg"
import hair5 from "../imgs/hair5.jpeg"
import hair6 from "../imgs/hair6.jpeg"
import nail2 from "../imgs/nails2.jpeg"
import hair7 from "../imgs/hair7.jpeg"
import hair8 from "../imgs/hair8.jpeg"
import lashes1 from "../imgs/lashes1.jpeg"
import nails3 from "../imgs/nails3.jpeg"
import hair9 from "../imgs/hair9.jpeg"
import brows1 from "../imgs/brows1.jpeg"
import hair11 from "../imgs/hair10.jpeg"
import lashes2 from "../imgs/lashes2.jpeg"
import hair12 from "../imgs/hair11.jpeg"
import brows2 from "../imgs/brows2.jpeg"

const GalleryPictures = () => {
  return (
    <div className="gallerypage-gallery">
        <div className="gallerypage-gallery-1">
            <img src={hair1}/>
            <img src={hair2}/>
            <img src={hair3}/>
        </div>
        <div className="gallerypage-gallery-2">
            <img src={nail1}/>
            <img src={hair4}/>
            <img src={hair5}/>
        </div>
        <div className="gallerypage-gallery-3">
            <img src={hair6}/>
            <img src={nail2}/>
            <img src={hair7}/>
        </div>
        <div className="gallerypage-gallery-4">
            <img src={hair8}/>
            <img src={lashes1}/>
            <img src={nails3}/>
        </div>
        <div className="gallerypage-gallery-5">
            <img src={hair9}/>
            <img src={brows1}/>
            <img src={hair11}/>
        </div>
        <div className="gallerypage-gallery-6">
            <img src={lashes2}/>
            <img src={hair12}/>
            <img src={brows2}/>
        </div>
    </div>
  )
}

export default GalleryPictures
