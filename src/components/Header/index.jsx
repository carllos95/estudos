import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [active, setActive] = useState('/')

  const categories = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Armors',
      url: 'armors'
    },
    {
      name: 'Weapons',
      url: 'weapons'
    }
  ]

  return (
    <div className="w-[100%] flex items-center h-20 bg-gray-800 pl-40">
      {categories.map(e => (
        <Link href={`/${e.url}`} key={e.name}>
          <a
            className={`mx-4 text-white ${e.url === active && 'text-gray-400'}`}
            onClick={() => setActive(e.url)}
          >
            {e.name}
          </a>
        </Link>
      ))}
    </div>
  )
}
