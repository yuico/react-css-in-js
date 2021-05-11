import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const UnsplashImage = ({ url, key, alt }) => {
  return (
    <Img src={url} key={key} alt={alt}/>
  )
}

export default UnsplashImage;
