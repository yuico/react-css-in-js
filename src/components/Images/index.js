import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Heading from './Heading';
import Loader from './Loader';
import UnsplashImage from './UnsplashImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import { WrapperImage } from './image.styles';

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
    <>
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
    </>
  )
}

export default Index;