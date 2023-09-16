import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
   
  </>
}