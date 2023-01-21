import Head from 'next/head'
import { useState } from 'react'
import {
  CalculadoraButtons,
  CalculadoraButtonsItems,
  CalculadoraButtonsItemsCustom,
  CalculadoraContainer,
  CalculadoraContent,
  CalculadoraVisor
} from './styles'

function Calculadora() {
  const [result, setResult] = useState([])
  const [number, setNumber] = useState([])

  const button = [
    { name: '7' },
    { name: '8' },
    { name: '9' },
    { name: 'raiz' },
    { name: '%' },
    { name: '4' },
    { name: '5' },
    { name: '6' },
    { name: '-' },
    { name: '/' },
    { name: '1' },
    { name: '2' },
    { name: '3' },
    { name: '+' },
    { name: 'x' },
    { name: '0' },
    { name: '.' },
    { name: '=' }
  ]

  function makeOperation(e) {
    setResult(t => [...t, e])
  }

  function operation(e) {
    const teste = e.map(n => {
      return n + n
    })

    console.log(teste['+'])
  }

  return (
    <CalculadoraContainer>
      <Head>
        <title>Calculadora</title>
      </Head>
      <CalculadoraContent>
        <CalculadoraVisor>{result}</CalculadoraVisor>
        <CalculadoraButtons>
          {button.map(e =>
            e.name === '0' || e.name === '=' ? (
              <CalculadoraButtonsItemsCustom
                key={e.name}
                value={e.name}
                onClick={e =>
                  e.target.value === '='
                    ? operation(result)
                    : makeOperation(e.target.value)
                }
              >
                {e.name}
              </CalculadoraButtonsItemsCustom>
            ) : (
              <CalculadoraButtonsItems
                key={e.name}
                value={e.name}
                onClick={e => makeOperation(e.target.value)}
              >
                {e.name}
              </CalculadoraButtonsItems>
            )
          )}
        </CalculadoraButtons>
      </CalculadoraContent>
    </CalculadoraContainer>
  )
}

export default Calculadora
