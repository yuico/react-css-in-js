import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif; 
  }
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center
`

export const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 15px;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`


export default GlobalStyle;