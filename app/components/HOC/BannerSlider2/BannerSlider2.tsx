import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import './BannerSlider2.css'
import 'swiper/css/effect-fade'
import SwiperCore from 'swiper'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import Link from 'next/link'

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]) // has error Property 'use' does not exist on type 'typeof import("d:/ThuanPhongProject/thuanphongcorp/node_modules/swiper/types/modules/index")'.ts(2339)
type Slide = {
  imageUrl: string
  alt: string
}

type MySliderProps = {
  slides: Slide[]
}

const BannerSlider2: React.FC<MySliderProps> = ({ slides }) => {
  const settings = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: true,
    speed: 4000,
    EffectFade: true,
  }
  const progressCircle = useRef<SVGSVGElement | null>(null)
  const progressContent = useRef<HTMLSpanElement | null>(null)

  const onAutoplayTimeLeft = (_swiper: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        '--progress',
        (1 - progress).toString(),
      )
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  }
  return (
    <Swiper
      {...settings}
      navigation={{
        nextEl: '.nextarrow',
      }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      effect='fade'
      pagination={{
        type: 'fraction',
      }}
      className='home-slider'>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {({ isActive, isPrev, isNext }) => (
            <div className='--img background'>
              <img src={slide.imageUrl} alt={slide.alt} />
              <div className='--detail'>
                <h6>“Kiến tạo giá trị - xây dựng tương lai”</h6>
                <div className='arrow --link d-block m-auto mt-3'>
                  <Link className='--link' href='/gioi-thieu'>
                    <span className='--link d-flex align-items-center'>
                      Về Thuận Phong Corp
                      <div className='--icon'>
                        <img src='/assets/imgs/Arrow 7.svg' alt='thuan phong corp' />
                      </div>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
      ))}
      <div className='autoplay-progress' slot='container-end'>
        <svg viewBox='0 0 48 48' ref={progressCircle}>
          <circle cx='24' cy='24' r='20'></circle>
        </svg>
        <span className='d-none' ref={progressContent}></span>
      </div>
      <div className='nextarrow'>
        <img src='/assets/imgs/Arrow 1.svg' alt='thuan phong corp' />
      </div>
    </Swiper>
  )
}

export default BannerSlider2
