'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Pagination } from 'swiper/modules'
export default function HomeEcoSystem() {
  return (
    <div className='homeEcosystem main'>
      <div className='--title'>
        <div
          className='subTitle aos-init aos-animate'
          data-aos='fade-up'
          data-aos-delay={100}>
          THUẬN PHONG CORP
        </div>
        <p className='segTitle aos-init aos-animate' data-aos='fade-up'>
          Đơn vị thành viên
        </p>
      </div>
      <div className='slide'>
        <div className='list_homeEcosystem'>
          <Swiper
            longSwipes={true}
            spaceBetween={13}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 4,
              },
            }}>
            <SwiperSlide>
              <div
                data-aos='fade-up'
                data-aos-delay={200}
                className='--item d-flex flex-column justify-content-between aos-init aos-animate'
                tabIndex={-1}
                style={{ width: '100%', display: 'inline-block' }}>
                <div className='--logo --link'>
                  <img
                    src='/assets/imgs/logos/legendi-logo.png'
                    alt='legendi'
                  />
                </div>
                <div className='--txt'>
                  <ul>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='tel:Đang cập nhật'>
                        <p>Hotline:</p>
                        <p>Đang cập nhật</p>
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:Đang cập nhật'>
                        <p>Email:</p>
                        <p>
                          <abbr title='Đang cập nhật'>Đang cập nhật</abbr>{' '}
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href='Đang cập nhật' target='_blank' rel='noreferrer'>
                        <p>Website:</p>
                        <p>
                          <abbr title='Đang cập nhật'>Đang cập nhật</abbr>
                        </p>
                      </a>
                    </li>
                    <li>
                      <p>Mạng lưới:</p>
                      <p>
                        00
                        <i className='fa-solid fa-eye' />
                      </p>
                    </li>
                  </ul>
                  <div className='--number'>
                    <span>01.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                data-aos='fade-up'
                data-aos-delay={200}
                className='--item d-flex flex-column justify-content-between aos-init aos-animate'
                tabIndex={-1}
                style={{ width: '100%', display: 'inline-block' }}>
                <div className='--logo --link'>
                  <img
                    src='/assets/imgs/logos/in-an-tp-logo.png'
                    alt='SUN GROUP'
                  />
                </div>
                <div className='--txt'>
                  <ul>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='tel:Đang cập nhật'>
                        <p>Hotline:</p>
                        <p>Đang cập nhật</p>
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:Đang cập nhật'>
                        <p>Email:</p>
                        <p>
                          <abbr title='Đang cập nhật'>Đang cập nhật</abbr>{' '}
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href='www.lid.vn' target='_blank' rel='noreferrer'>
                        <p>Website:</p>
                        <p>
                          <abbr title='Lid.vn'>lid.vn</abbr>
                        </p>
                      </a>
                    </li>
                    <li>
                      <p>Mạng lưới:</p>
                      <p>
                        00
                        <i className='fa-solid fa-eye' />
                      </p>
                    </li>
                  </ul>
                  <div className='--number'>
                    <span>02.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                data-aos='fade-up'
                data-aos-delay={200}
                className='--item d-flex flex-column justify-content-between aos-init aos-animate'
                tabIndex={-1}
                style={{ width: '100%', display: 'inline-block' }}>
                <div className='--logo --link'>
                  <img
                    src='/assets/imgs/logos/kamy-kiechen-llogo.png'
                    alt='SUN GROUP'
                  />
                </div>
                <div className='--txt'>
                  <ul>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='tel:Đang cập nhật'>
                        <p>Hotline:</p>
                        <p>Đang cập nhật</p>
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:Đang cập nhật'>
                        <p>Email:</p>
                        <p>
                          <abbr title='Đang cập nhật'>Đang cập nhật</abbr>{' '}
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href='Đang cập nhật' target='_blank' rel='noreferrer'>
                        <p>Website:</p>
                        <p>
                          <abbr title='Đang cập nhật'>Đang cập nhật</abbr>
                        </p>
                      </a>
                    </li>
                    <li>
                      <p>Mạng lưới:</p>
                      <p>
                        00
                        <i className='fa-solid fa-eye' />
                      </p>
                    </li>
                  </ul>
                  <div className='--number'>
                    <span>03.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                data-aos='fade-up'
                data-aos-delay={200}
                className='--item d-flex flex-column justify-content-between aos-init aos-animate'
                tabIndex={-1}
                style={{ width: '100%', display: 'inline-block' }}>
                <div className='--logo --link'>
                  <img
                    src='/assets/imgs/logos/legendi-logo.png'
                    alt='SUN GROUP'
                  />
                </div>
                <div className='--txt'>
                  <ul>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='tel:Đang cập nhật'>
                        <p>Hotline:</p>
                        <p>Đang cập nhật</p>
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:Đang cập nhật'>
                        <p>Email:</p>
                        <p>
                          <abbr title='Đang cập nhật'>Đang cập nhật</abbr>{' '}
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href='Đang cập nhật' target='_blank' rel='noreferrer'>
                        <p>Website:</p>
                        <p>
                          <abbr title='Đang cập nhật'>Đang cập nhật</abbr>
                        </p>
                      </a>
                    </li>
                    <li>
                      <p>Mạng lưới:</p>
                      <p>
                        00
                        <i className='fa-solid fa-eye' />
                      </p>
                    </li>
                  </ul>
                  <div className='--number'>
                    <span>04.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                data-aos='fade-up'
                data-aos-delay={200}
                className='--item d-flex flex-column justify-content-between aos-init aos-animate'
                tabIndex={-1}
                style={{ width: '100%', display: 'inline-block' }}>
                <div className='--logo --link'>
                  <img
                    src='/assets/imgs/logos/roxana-logo.png'
                    alt='SUN GROUP'
                  />
                </div>
                <div className='--txt'>
                  <ul>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='tel:Đang cập nhật'>
                        <p>Hotline:</p>
                        <p>Đang cập nhật</p>
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:Đang cập nhật'>
                        <p>Email:</p>
                        <p>
                          <abbr title='Đang cập nhật'>Đang cập nhật</abbr>{' '}
                        </p>
                      </a>
                    </li>
                    <li>
                      <a href='Đang cập nhật' target='_blank' rel='noreferrer'>
                        <p>Website:</p>
                        <p>
                          <abbr title='Đang cập nhật'>Đang cập nhật</abbr>
                        </p>
                      </a>
                    </li>
                    <li>
                      <p>Mạng lưới:</p>
                      <p>
                        00
                        <i className='fa-solid fa-eye' />
                      </p>
                    </li>
                  </ul>
                  <div className='--number'>
                    <span>05.</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='--img'>
          <img src='/assets/imgs/Union.png' alt='SUN GROUP' />
        </div>
      </div>
    </div>
  )
}
