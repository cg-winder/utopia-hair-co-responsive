import React from 'react'
import GalleryPictures from "./GalleryComponents/GalleryPictures"

const Gallery = () => {
    return (
        <div className="gallery-page-wrap">
          <div className="homepage-head" id="gallery-head">
              <div>Gallery</div>
          </div>
          <GalleryPictures />
        </div>
      );
}

export default Gallery;
