import { ThemeProvider } from 'styled-components'
import Header from '../components/Header'
import { AuthProvider } from '../contexts/auth'
import GlobalStyle from '../styles/global'
import theme from '../styles/themes'

import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        {/* <Header /> */}
        <Component {...pageProps} />
        <GlobalStyle />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default MyApp
