'use client'
import React, { useEffect } from 'react'

export default function Banner() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])
  
  return (
    <div className='newscateBanner Banner_1'>
      <div className='--img background aos-init aos-animate' data-aos='zoom-in'>
        <img
          src='/assets/imgs/banner-crop.jpg'
          alt='Thuna Phong Corp'
        />
      </div>
      <h1 className='Title aos-init aos-animate' data-aos='fade-up'>
        Hoạt Động Mới
      </h1>
    </div>
  )
}
