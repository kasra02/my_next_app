import '../styles/globals.css'
import Header from '../component/generic/HEADER'
import React from 'react'

function MyApp({ Component, pageProps }) {
  return(
      <>
          <header>headder</header>
          <Component {...pageProps} />
      <>
  )
}

export default MyApp
