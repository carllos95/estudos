import { useEffect } from 'react'

import Router from 'next/router'

function Logged() {
  useEffect(() => {
    if (localStorage.getItem('user_token') === '{}') {
      Router.push('/login')
    }
  }, [])
  return <div>Logado</div>
}

export default Logged
