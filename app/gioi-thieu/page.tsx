import React, { Suspense } from 'react'
import MainBanner from '../components/gioi-thieu/MainBanner'
import BreadScrumb from '../components/BreadScrumb'
import Intro from '../components/gioi-thieu/Intro'
import Loading from './loading'
import AboutValue from '../components/gioi-thieu/AboutValue'
import AboutPrize from '../components/gioi-thieu/AboutPrize'
import AboutPartner from '../components/gioi-thieu/AboutPartner'

export default function page() {
  return (
    <Suspense fallback={<Loading />}>
      <div className='sc-dcJsrY kGhcjP'>
        <MainBanner />
        <BreadScrumb />
        <Intro />
        <AboutValue />
        <AboutPrize />
        <AboutPartner/>
      </div>
    </Suspense>
  )
}
