import '../styles/globals.css'
import Header from '../component/generic/HEADER'


function MyApp({ Component, pageProps }) {
  return(
      <Header/>
      <Component {...pageProps} />
  )
}

export default MyApp
