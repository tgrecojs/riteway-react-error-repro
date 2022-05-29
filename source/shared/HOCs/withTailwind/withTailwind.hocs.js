import Head from 'next/head'
import '../../../../styles/globals.css'

const WithLayout = (ComposedComponent) => ({
  // eslint-disable-next-line react/prop-types
  pageTitle = 'DAO Analytics Dashboard',
  ...rest
}) => {
  // eslint-disable-next-line react/prop-types

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
          <ComposedComponent {...rest} />
    </>
  )
}

export default WithLayout
