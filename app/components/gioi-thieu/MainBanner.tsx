'use client'
import React from 'react'

const handleRollClick = () => {
  const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
};

export default function MainBanner() {
  return (
    <div className='aboutBanner'>
      <div className='background aos-init aos-animate' data-aos='zoom-in'>
        <img
          src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Gi%E1%BB%9Bi%20thi%E1%BB%87u/357/image-thumb__357__image-thumbnail/DJI_0744.jpg'
          alt='SUN GROUP'
        />
      </div>
      <div className='--title'>
        <h1 data-aos='fade-up' className='Title aos-init aos-animate'>
        Kiến tạo giá trị - xây dựng tương lai
        </h1>
        <article
          data-aos='fade-up'
          data-aos-delay={100}
          className='aos-init aos-animate'>
        Thuận Phong Corp It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </article>
      </div>
      <ul
        className='data aos-init aos-animate'
        data-aos='fade-up'
        data-aos-delay={200}>
        <li>
          <span>10</span>
          <span>năm kinh nghiệm</span>
        </li>
        <li>
          <span>05</span>
          <span>lĩnh vực chính</span>
        </li>
      </ul>
      <div className='nextframe' onClick={handleRollClick}>
        <svg
          width={12}
          height={13}
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
