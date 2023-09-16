import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/home/home.css'
import Loading from './loading'
import { Suspense } from 'react'
import Facebook from './components/Facebook'

export const metadata = {
  title: 'Thuận Phong Corp',
  description: 'Thuận Phong Corp',
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
        <Facebook />
      </body>
    </html>
  )
}
