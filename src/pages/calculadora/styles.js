import styled from 'styled-components'

export const CalculadoraContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CalculadoraContent = styled.div`
  width: 400px;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #000;
`

export const CalculadoraVisor = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`
export const CalculadoraButtons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 20px;
`

export const CalculadoraButtonsItems = styled.button`
  width: 70px;
  height: 70px;
  border: 1px solid black;
  margin-bottom: 5px;
`

export const CalculadoraButtonsItemsCustom = styled.button`
  width: 140px;
  height: 70px;
  border: 1px solid black;
  margin-bottom: 5px;
`
