import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import {
  ItemHeader,
  ItemHeaderImg,
  ItemsContainer,
  ItemsContent,
  ItemsStatus,
  ItemsStatusContent,
  ItemsStatusList
} from '../../styles/item'

function Itens() {
  const router = useRouter()

  const [item, setItem] = useState()

  useEffect(() => {
    if (router.query.tag && router.query.item) {
      ;(async () => {
        const response = await axios(
          `https://eldenring.fanapis.com/api/${router.query.tag}?name=${router.query.item}`
        )

        setItem(response.data.data[0])
      })()
    }
  }, [router.query])

  console.log(item)

  return (
    <ItemsContainer>
      <Head>
        <title>
          Elden Ring | {router.query.tag && router?.query.tag.toUpperCase()}
        </title>
      </Head>
      <ItemsContent>
        <ItemHeader>
          <h1>{item?.name}</h1>

          <h2>Category: {item?.category}</h2>
          <p>Description: {item?.description}</p>
        </ItemHeader>
        <ItemHeaderImg width={200} src={item?.image} alt="" />
      </ItemsContent>
      <ItemsStatus>
        <h2>Status</h2>
        <ItemsStatusContent>
          <ItemsStatusList>
            <h3>Attack</h3>
            {item?.attack?.map(e => (
              <li key={e.name}>
                {e.name}: {e.amount}
              </li>
            ))}
          </ItemsStatusList>
          <ItemsStatusList>
            <h3>Defence</h3>
            {item?.defence?.map(e => (
              <li key={e.name}>
                {e.name}: {e.amount}
              </li>
            ))}
          </ItemsStatusList>
          <ItemsStatusList>
            <h3>Required Attributes</h3>
            {item?.requiredAttributes?.map(e => (
              <li key={e.name}>
                {e.name}: {e.amount}
              </li>
            ))}
          </ItemsStatusList>
          <ItemsStatusList>
            <h3>Scales With</h3>
            {item?.scalesWith?.map(e => (
              <li key={e.name}>
                {e.name}: {e.scaling}
              </li>
            ))}
          </ItemsStatusList>
          <ItemsStatusList>
            <h3>Weight</h3>
            <li>Weight: {item?.weight}</li>

            {/* <p>{item?.dmgNegation}</p> */}
          </ItemsStatusList>
        </ItemsStatusContent>
      </ItemsStatus>
    </ItemsContainer>
  )
}

export default Itens
