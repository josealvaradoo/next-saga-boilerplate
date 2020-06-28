import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { END } from 'redux-saga'
import store from '../redux/store'
import '../assets/scss/styles.scss'

const App = ({ Component, pageProps }) => (
	<div className="App">
		<Head>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Component {...pageProps} />
	</div>
)

// Sync redux store into server side
App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  }

  if (ctx.req) {
    ctx.store.dispatch(END)
    await ctx.store.sagaTask.toPromise()
  }

  return {
    pageProps,
  }
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  pageProps: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
}

App.defaultProps = {
  Component: '',
  pageProps: {},
}

export default store.withRedux(App)
