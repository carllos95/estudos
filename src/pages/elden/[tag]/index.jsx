import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { Pagination } from '../../../components/Pagination'
import Head from 'next/head'
import { Cards, CardsContainer } from '../styles/styles'

function Tag() {
  const [page, setPage] = useState(1)
  const [items, setItems] = useState()
  const [totalItems, setTotalItems] = useState()

  const router = useRouter()
  useEffect(() => {
    setPage(1)
  }, [router.query])

  useEffect(() => {
    if (router.query.tag) {
      ;(async () => {
        const response = await axios(
          `https://eldenring.fanapis.com/api/${router?.query.tag}?limit=10&page=${page}`
        )

        setTotalItems(response.data.total)
        setItems(response.data.data)
      })()
    }
  }, [router.query, items])

  return (
    <div>
      <Head>
        <title>
          Elden Ring | {router.query.tag && router?.query.tag.toUpperCase()}
        </title>
      </Head>
      <CardsContainer>
        <h1>Elden ring Call Api</h1>
        {items?.map(item => (
          <Link
            href={`/elden/${router.query.tag}/${item.name}`}
            key={item.name}
            passHref
          >
            <Cards style={{ display: 'flex', flexDirection: 'column' }}>
              <h2>{item.name}</h2>
              <img width={200} src={item.image} alt="" />

              <h3>{item.category}</h3>
            </Cards>
          </Link>
        ))}
      </CardsContainer>

      <Pagination
        totalCount={totalItems}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  )
}

export default Tag
