import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    <Script id="chatfb">
      {`var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "537686649638747");
    chatbox.setAttribute("attribution", "biz_inbox");`}
    </Script>
    <Script id="addPlugin">
      {` window.fbAsyncInit = function() {
        FB.init({
        xfbml            : true,
        version          : 'v18.0'
        });
        };
        
        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));`}
    </Script>
  </>
}