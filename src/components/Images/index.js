import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Heading from './Heading';
import Loader from './Loader';
import UnsplashImage from './UnsplashImage';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroll-component';

const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`
const Index = () => {
  const [images, setImages] = useState([]);

  useEffect(()=> {
    fetchImg()
  }, [])

  const fetchImg = () => {
    const url = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
    .get(`${url}/photos/random?client_id=${accessKey}&count=12`)
    .then(res => setImages([...images, ...res.data]));
  }

  return (
    <div>
      <Heading/>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImg}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImage>
        {images.map(img => (
          <UnsplashImage url={img.urls.thumb} key={img.id} alt={img.alt_description}/>
        ))}
        </WrapperImage>
      </InfiniteScroll>
    </div>
  )
}

export default Index;