import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyApp({ Component, pageProps }) {
  return <>

    <Component {...pageProps} />
    <div className="zalo-chat-widget" data-oaid="1337303147334772731" data-welcome-message="Rất vui khi được hỗ trợ bạn!" data-autopopup="0" data-width="" data-height=""></div>
    <script src="https://sp.zalo.me/plugins/sdk.js"></script>
  </>
}