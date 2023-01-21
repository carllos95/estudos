import styled from 'styled-components'

export const CardsContainer = styled.div`
  width: 100%;
  padding-top: 50px;
  display: flex;
  flex-wrap: wrap;
  /* background-color: #000; */
  justify-content: center;

  h1 {
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
  }
`
export const Cards = styled.a`
  width: 200px;
  background-color: #1d1a1a;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);

  color: #fff;
  text-align: center;
  border-radius: 10px;
  transition: all 0.5s;
  margin: 0px 10px 10px;

  img {
    width: 100%;
  }

  :hover {
    transform: scale(1.1);
    transition: all 0.5s;
  }
`
