'use client'
import React, { useEffect } from 'react'

const handleRollClick = () => {
  const viewportHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  )
  window.scrollTo({ top: viewportHeight, behavior: 'smooth' })
}

export default function MainBanner() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className='aboutBanner'>
      <div className='background aos-init aos-animate' data-aos='zoom-in'>
        <img src='/assets/imgs/banner8.jpg' alt='Thuận Phong Tây Ninh' />
      </div>
      <div className='--title'>
        <h1 data-aos='fade-up' className='Title aos-init aos-animate'>
          Kiến tạo giá trị - xây dựng tương lai
        </h1>
        <article
          data-aos='fade-up'
          data-aos-delay={100}
          className='aos-init aos-animate'>
          Được thành lập năm 2013 tại Hòa Thành, Tây Ninh tiền thân là 1 cơ sở
          in ấn & thi công bảng hiệu. Dưới sự dẫn dắt của lãnh đạo công ty và
          đội ngũ nhân sự chất lượng cao. Trải qua 10 năm hình thành & phát
          triển chúng tôi đã mở rộng sản xuất, gia tăng thêm ngành hàng và từng
          bước khẳng định vị trí tiên phong trong việc tư vấn thiết kế, thi công
          bảng hiệu quảng cáo, nội thất & sửa chữa cải tạo nhà trọn gói tại thị
          trường Tây Ninh.
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
