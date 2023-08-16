'use client'
import React, { useEffect } from 'react'

import 'aos/dist/aos.css'
import AOS from 'aos'
import BannerSlider from '../HOC/BannerSlider2/BannerSlider2'

const slides = [
  {
    imageUrl:
      'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Banner%20trang%20ch%E1%BB%A7/3364/image-thumb__3364__image-thumbnail/%C4%90a%CC%80%20Na%CC%86%CC%83ng%20ru%CC%9B%CC%A3c%20ro%CC%9B%CC%83%20trong%20pha%CC%81o%20hoa.jpg',
    alt: 'SUN GROUP',
    isActive: true,
    rightToLeft: true,
  },
  {
    imageUrl:
      'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/Sun%20World%20Ba%20Na%20Hills/461/image-thumb__461__image-thumbnail/9.jpg',
    alt: 'SUN GROUP',
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
          src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Logo-%20icon/390/image-thumb__390__image-thumbnail/d%E1%BA%A5u%20chi%E1%BB%87n.png'
          alt='SUN GROUP'
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
