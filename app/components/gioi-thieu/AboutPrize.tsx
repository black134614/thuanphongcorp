'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default function AboutPrize() {
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
    <div className='homeBusiness aboutPrize main'>
      <div className='--title mb-5'>
        <div className='subTitle mb-2 aos-init aos-animate' data-aos='fade-up'>
          Khám phá
        </div>
        <p
          className='segTitle aos-init aos-animate'
          data-aos='fade-up'
          data-aos-delay={100}>
          Giải Thưởng Kinh Doanh
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
          },
          768: {
            spaceBetween: 5,
            slidesPerView: 3,
          },
          992: {
            spaceBetween: 5,
            slidesPerView: 4,
          },
        }}>
        <SwiperSlide>
          <div>
            <div
              className='--item aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay={100}
              tabIndex={-1}
              style={{ width: '100%', display: 'inline-block' }}>
              <div className='--img img_hover'>
                <img
                  src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho ảnh chung/SUN WORLD HON THOM NATURE PARK/552/image-thumb__552__image-thumbnail/Sun-World-Hon-Thom-Nature-Park-8-w.jpg'
                  alt='SUN GROUP'
                />
              </div>
              <div className='--txt'>
                <div className='--top'>
                  <div className='--number1 mb-3'>
                    0{/* */}1{/* */}.
                  </div>
                  <h3>Giải Thưởng</h3>
                  <ul className='mb-0 --empty' />
                </div>
              </div>
              <div className='partent'>
                <img src='/assets/imgs/Vector 10.svg' alt='SUN GROUP' />
                <img src='/assets/imgs/Vector 11.svg' alt='SUN GROUP' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className='--item aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay={100}
              tabIndex={-1}
              style={{ width: '100%', display: 'inline-block' }}>
              <div className='--img img_hover'>
                <img
                  src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/InterContinental%20Danang%20Sun%20Peninsula%20Resort/566/image-thumb__566__image-thumbnail/Ba%CC%89n%20sao%20cu%CC%89a%20InterContinental%20Danang%20Sun%20Peninsula%20Resort%20(11).jpg'
                  alt='SUN GROUP'
                />
              </div>
              <div className='--txt'>
                <div className='--top'>
                  <div className='--number1 mb-3'>
                    0{/* */}2{/* */}.
                  </div>
                  <h3>Giải Thưởng 2</h3>
                  <ul className='mb-0 --empty' />
                </div>
              </div>
              <div className='partent'>
                <img src='/assets/imgs/Vector 10.svg' alt='SUN GROUP' />
                <img src='/assets/imgs/Vector 11.svg' alt='SUN GROUP' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className='--item aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay={100}
              tabIndex={-1}
              style={{ width: '100%', display: 'inline-block' }}>
              <div className='--img img_hover'>
                <img
                  src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/Sun%20Premier%20Village%20Primavera/283/image-thumb__283__image-thumbnail/DJI_0948.jpg'
                  alt='SUN GROUP'
                />
              </div>
              <div className='--txt'>
                <div className='--top'>
                  <div className='--number1 mb-3'>
                    0{/* */}3{/* */}.
                  </div>
                  <h3>Giải Thưởng 2</h3>
                  <ul className='mb-0 --empty' />
                </div>
              </div>
              <div className='partent'>
                <img src='/assets/imgs/Vector 10.svg' alt='SUN GROUP' />
                <img src='/assets/imgs/Vector 11.svg' alt='SUN GROUP' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className='--item aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay={100}
              tabIndex={-1}
              style={{ width: '100%', display: 'inline-block' }}>
              <div className='--img img_hover'>
                <img
                  src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/CA%CC%89NG%20TA%CC%80U%20KHA%CC%81CH%20QUO%CC%82%CC%81C%20TE%CC%82%CC%81%20HA%CC%A3%20LONG/308/image-thumb__308__image-thumbnail/DJI_0016s%20copy.jpg'
                  alt='SUN GROUP'
                />
              </div>
              <div className='--txt'>
                <div className='--top'>
                  <div className='--number1 mb-3'>
                    0{/* */}4{/* */}.
                  </div>
                  <h3>Giải Thưởng </h3>
                  <ul className='mb-0 --empty' />
                </div>
              </div>
              <div className='partent'>
                <img src='/assets/imgs/Vector 10.svg' alt='SUN GROUP' />
                <img src='/assets/imgs/Vector 11.svg' alt='SUN GROUP' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className='--item aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay={100}
              tabIndex={-1}
              style={{ width: '100%', display: 'inline-block' }}>
              <div className='--img img_hover'>
                <img
                  src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho ảnh chung/SUN WORLD HON THOM NATURE PARK/552/image-thumb__552__image-thumbnail/Sun-World-Hon-Thom-Nature-Park-8-w.jpg'
                  alt='SUN GROUP'
                />
              </div>
              <div className='--txt'>
                <div className='--top'>
                  <div className='--number1 mb-3'>
                    0{/* */}1{/* */}.
                  </div>
                  <h3>Giải Thưởng 2</h3>
                  <ul className='mb-0 --empty' />
                </div>
               
              </div>
              <div className='partent'>
                <img src='/assets/imgs/Vector 10.svg' alt='SUN GROUP' />
                <img src='/assets/imgs/Vector 11.svg' alt='SUN GROUP' />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div
              className='--item aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay={100}
              tabIndex={-1}
              style={{ width: '100%', display: 'inline-block' }}>
              <div className='--img img_hover'>
                <img
                  src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/InterContinental%20Danang%20Sun%20Peninsula%20Resort/566/image-thumb__566__image-thumbnail/Ba%CC%89n%20sao%20cu%CC%89a%20InterContinental%20Danang%20Sun%20Peninsula%20Resort%20(11).jpg'
                  alt='SUN GROUP'
                />
              </div>
              <div className='--txt'>
                <div className='--top'>
                  <div className='--number1 mb-3'>
                    0{/* */}1{/* */}.
                  </div>
                  <h3>Giải Thưởng 1</h3>
                  <ul className='mb-0 --empty' />
                </div>
              </div>
              <div className='partent'>
                <img src='/assets/imgs/Vector 10.svg' alt='SUN GROUP' />
                <img src='/assets/imgs/Vector 11.svg' alt='SUN GROUP' />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='arrow_homeBusiness arrow'>
        <div className='--icon prevarrow'>
          <img src='assets/imgs/Arrow 9.svg' alt='Thuan Phong Corp' />
        </div>
        <div className='--icon nextarrow'>
          <img src='assets/imgs/Arrow 8.svg' alt='Thuan Phong Corp' />
        </div>
      </div>
    </div>
  )
}
