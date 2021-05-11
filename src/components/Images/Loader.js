import React from 'react';
import { Loading } from './image.styles';

const Loader = () => {
  return (
    <Loading>
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </Loading>
  )
}

export default Loader;