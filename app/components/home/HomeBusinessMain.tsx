'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default function HomeBusinessMain() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const updateMobileStatus = () => {
      if (window.innerWidth < 768) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }
    updateMobileStatus()
    window.addEventListener('resize', updateMobileStatus)
    return () => {
      window.removeEventListener('resize', updateMobileStatus)
    }
  }, [])
  return (
    <div className='homeBusiness main'>
      <div className='--title mb-5'>
        <div className='subTitle mb-2 aos-init aos-animate' data-aos='fade-up'>
          Khám phá
        </div>
        <p
          className='segTitle aos-init aos-animate'
          data-aos='fade-up'
          data-aos-delay={100}>
          Lĩnh vực kinh doanh
        </p>
      </div>
      <Swiper
        className='list_homeBusiness'
        direction={mobile ? 'vertical' : 'horizontal'}
        modules={[Navigation]}
        navigation={{
          nextEl: '.nextarrow',
          prevEl: '.prevarrow',
        }}
        longSwipes={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 0,
            height: 440,
            loop: false,
          },
          768: {
            spaceBetween: 5,
            slidesPerView: 3,
            loop: false,
          },
          992: {
            spaceBetween: 5,
            slidesPerView: 4,
            loop: false,
          },
        }}>
        <SwiperSlide>
          <div>
            <div
              className='--item'
              style={{ width: '100%', display: 'inline-block' }}>
              <div className='--img img_hover'>
                <img src='/assets/imgs/1.jpg' alt='thuan phong Tây Ninh' />
              </div>
              <div className='--txt'>
                <div className='--top'>
                  <div className='--number mb-3'>
                    0{/* */}1{/* */}.
                  </div>
                  <h3>Thiết Kế & thi công bảng hiệu quảng cáo</h3>
                  <ul className='mb-0 --empty' />
                </div>
                {/* <a
                  className='--link'
                  href='/business-field/vui-choi-giai-tri-136'>
                  <div className='--viewall --link arrow_1 d-flex mt-3 align-items-center'>
                    Xem chi tiết
                    <p className='mb-0' />
                  </div>
                </a> */}
              </div>
              <div className='partent'>
                <img
                  src='/assets/imgs/Vector_10.png'
                  alt='thuan phong tay ninh'
                />
                <img
                  src='/assets/imgs/Vector_11.png'
                  alt='thuan phong tay ninh'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className='--item'
              style={{ width: '100%', display: 'inline-block' }}>
              <div className='--img img_hover'>
                <img src='/assets/imgs/2.jpg' alt='thuan phong Tây Ninh' />
              </div>
              <div className='--txt'>
                <div className='--top'>
                  <div className='--number mb-3'>
                    0{/* */}2{/* */}.
                  </div>
                  <h3>Thiết kế & thi công nội thất</h3>
                  <ul className='mb-0 --empty' />
                </div>
              </div>
              <div className='partent'>
                <img
                  src='/assets/imgs/Vector_10.png'
                  alt='thuan phong tay ninh'
                />
                <img
                  src='/assets/imgs/Vector_11.png'
                  alt='thuan phong tay ninh'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className='--item'
              style={{ width: '100%', display: 'inline-block' }}>
              <div className='--img img_hover'>
                <img src='/assets/imgs/3.jpg' alt='thuan phong Tây Ninh' />
              </div>
              <div className='--txt'>
                <div className='--top'>
                  <div className='--number mb-3'>
                    0{/* */}3{/* */}.
                  </div>
                  <h3>Sửa chữa & cải tạo nhà ở - văn phòng -shop</h3>
                  <ul className='mb-0 --empty' />
                </div>
              </div>
              <div className='partent'>
                <img
                  src='/assets/imgs/Vector_10.png'
                  alt='thuan phong tay ninh'
                />
                <img
                  src='/assets/imgs/Vector_11.png'
                  alt='thuan phong tay ninh'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className='--item'
              style={{ width: '100%', display: 'inline-block' }}>
              <div className='--img img_hover'>
                <img src='/assets/imgs/4.jpg' alt='thuan phong Tây Ninh' />
              </div>
              <div className='--txt'>
                <div className='--top'>
                  <div className='--number mb-3'>
                    0{/* */}4{/* */}.
                  </div>
                  <h3>Phân phối các nhãn hàng thương mại</h3>
                  <ul className='mb-0 --empty' />
                </div>
              </div>
              <div className='partent'>
                <img
                  src='/assets/imgs/Vector_10.png'
                  alt='thuan phong tay ninh'
                />
                <img
                  src='/assets/imgs/Vector_11.png'
                  alt='thuan phong tay ninh'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className='--item'
              style={{ width: '100%', display: 'inline-block' }}>
              <div className='--img img_hover'>
                <img src='/assets/imgs/5.jpg' alt='thuan phong Tây Ninh' />
              </div>
              <div className='--txt'>
                <div className='--top'>
                  <div className='--number mb-3'>
                    0{/* */}5{/* */}.
                  </div>
                  <h3>Sản xuất & kinh doanh hệ thống tiệm bánh KAMY KITCHEN</h3>
                  <ul className='mb-0 --empty' />
                </div>
              </div>
              <div className='partent'>
                <img
                  src='/assets/imgs/Vector_10.png'
                  alt='thuan phong tay ninh'
                />
                <img
                  src='/assets/imgs/Vector_11.png'
                  alt='thuan phong tay ninh'
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='arrow_homeBusiness arrow'>
        <div className='--icon prevarrow'>
          <img src='assets/imgs/Arrow 9.svg' alt='Thuan Phong Tây Ninh' />
        </div>
        <div className='--icon nextarrow'>
          <img src='assets/imgs/Arrow 8.svg' alt='Thuan Phong Tây Ninh' />
        </div>
      </div>
    </div>
  )
}
