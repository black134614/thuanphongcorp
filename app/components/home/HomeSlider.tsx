'use client'
import React, { useEffect } from 'react'

import 'aos/dist/aos.css'
import AOS from 'aos'
import BannerSlider from '../HOC/BannerSlider2/BannerSlider2'

const slides = [
  {
    imageUrl:
      '/assets/imgs/KT TP Show.jpg',
    alt: 'Thuận Phong Tây Ninh',
    isActive: true,
    rightToLeft: true,
  },
  {
    imageUrl:
      '/assets/imgs/banner3.jpg',
    alt: 'Thuận Phong Tây Ninh',
    isActive: false,
    rightToLeft: false,
  },
  { 
    imageUrl:
      '/assets/imgs/banner1.jpg',
    alt: 'Thuận Phong Tây Ninh',
    isActive: false,
    rightToLeft: false,
  },
  {
    imageUrl:
      '/assets/imgs/banner2.jpg',
    alt: 'Thuận Phong Tây Ninh',
    isActive: false,
    rightToLeft: false,
  },
  {
    imageUrl:
      '/assets/imgs/banner4.jpg',
    alt: 'Thuận Phong Tây Ninh',
    isActive: false,
    rightToLeft: false,
  },
];
const handleRollClick = () => {
  const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
};
export default function HomeSlider() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className='homeBanner Banner'>
      <div className='list_homeBanner aos-init aos-animate' data-aos='zoom-in'>
      <BannerSlider slides={slides} />
      </div>
      <div className='partent'>
        <img
          src='assets/imgs/tp-con-dau.png'
          alt='Thuan phong Tây Ninh'
        />
      </div>
      <div className='nextframe' onClick={handleRollClick}>
        <svg
          width={20}
          height={19}
          viewBox='0 0 12 13'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            className='a1'
            opacity='0.4'
            d='M0.5 1.5L6 5.5L11.5 1.5'
            stroke='white'
            strokeWidth='1.5'
          />
          <path
            className='a2'
            opacity='0.8'
            d='M0.5 7.5L6 11.5L11.5 7.5'
            stroke='white'
            strokeWidth='1.5'
          />
          <path
            className='a3'
            d='M0.5 7.5L6 11.5L11.5 7.5'
            stroke='white'
            strokeWidth={2}
          />
        </svg>
      </div>
    </div>
  )
}
