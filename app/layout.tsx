import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/home/home.css'
import Loading from './loading'
import { Suspense } from 'react'
import Script from 'next/script'

export const metadata = {
  title: 'Thuận Phong Tây Ninh',
  description: 'Thuận Phong Tây Ninh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='vi'>
      <body>
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
          <Footer />
        </Suspense>
        <div id='fb-root'></div>
        <div id='fb-customer-chat' className='fb-customerchat'></div>
        <div
          className='zalo-chat-widget'
          data-oaid='1337303147334772731'
          data-welcome-message='Rất vui khi được hỗ trợ bạn!'
          data-autopopup='2'
          data-width='300'
          data-height='400'
          style={{ right: '25px!important' }}></div>
        <Script id='chatfb'>
          {`var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "537686649638747");
    chatbox.setAttribute("attribution", "biz_inbox");`}
        </Script>
        <Script id='addPlugin'>
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

        <Script
          src='https://sp.zalo.me/plugins/sdk.js'
          strategy='afterInteractive'></Script>
      </body>
    </html>
  )
}
