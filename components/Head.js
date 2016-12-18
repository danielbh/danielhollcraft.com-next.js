/**
 * Created by danielhollcraft on 12/18/16.
 */
import Head from 'next/head'
import config from '../site.config'

export default () => (
  <Head>
    <title>{config.siteName}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.css"/>
    <link rel="stylesheet" href="/static/fonts/font-awesome/style.css"/>
    <script src ='https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'></script>
  </Head>
)