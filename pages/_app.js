import React from 'react'
import { object } from 'prop-types'
import '../styles/globals.css'

function MyApp({
  // eslint-disable-next-line react/prop-types
  Component,
  pageProps,
}) {
  return (
        <Component {...pageProps} />
  )
}
MyApp.propTypes = {
  pageProps: object,
}

export default MyApp