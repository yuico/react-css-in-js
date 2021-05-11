import styled from 'styled-components';

export const TodoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  max-width: 520px;
  width: 90%;
  min-height: 600px;
  background: #1d7656;
  text-align: center;
  margin: 128px auto;
  border-radius: 10px;
  padding: 32px;
  color: white;
`

export const TodoInput = styled.input`
  padding: 14px 32px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #8ab14e;
  outline: none;
  width: 320px;
  background: transparent;

  @media screen and (max-width: 600px){
    width: 100%;
    border-radius: 4px 4px 0 0;
  }
`
export const TodoInputEdit = styled(TodoInput)`
  border: 2px solid #149fff;
`

export const TodoButton = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: #8ab14e;
  text-transform: capitalize;
  font-weight: 600;
  color: white;
  margin-bottom: 10px;

  @media screen and (max-width: 600px){
    width: 100%;
    border-radius: 0 0 4px 4px;
  }
`

export const TodoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px auto;
  color: #fff;
  background: #3498db;
  padding: 16px;
  border-radius: 5px;
  width: 90%;
`

export const Icons = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`
