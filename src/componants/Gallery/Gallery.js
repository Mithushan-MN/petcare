import React, { useState } from 'react'
import './Gallery.css'
import { galleryImages } from './GalleryComponant'

const Gallery = () => {

    const [file,setFile]=useState(null)

  return (
    <div className='container'>
      <h1>Our Image Gallery</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A exercitationem commodi, itaque dicta qui similique reprehenderit iste modi impedit eum nihil odit?
         Alias voluptate nemo et ex illo quo similique!"</p>
      <div className='media-container'>
        {
            galleryImages.map((file,index)=>(
                <div className='media' key={index}
                onClick={()=> setFile(file)}>
                    {
                        file.type ==='image'?<img src={file.url}/>:<video src={file.url} muted/>
                    }
                </div>
            ))
        }
      </div>
      <div className='pupup-media' style={{display: file? 'block' : 'none'}}>
        <span onClick={()=> setFile(null)}>&times;</span>

        {
            file?.type ==='video'? <video src={file?.url} muted autoPlay controls/>
            : <img src={file?.url}/>
        }
      </div>
    </div>
  )
}

export default Gallery
