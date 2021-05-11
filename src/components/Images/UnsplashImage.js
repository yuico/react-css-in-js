import React from 'react'
import { Img } from '../../globalStyles';


const UnsplashImage = ({ url, key, alt }) => {
  return (
    <Img src={url} key={key} alt={alt}/>
  )
}

export default UnsplashImage;
