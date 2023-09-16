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
          THUẬN PHONG Tây Ninh
        </div>
        <p className='segTitle aos-init aos-animate' data-aos='fade-up'>
          thành viên - đối tác
        </p>
      </div>
      <div className='slide'>
        <div className='list_homeEcosystem'>
          <Swiper
            longSwipes={true}
            spaceBetween={13}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
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
                        href='tel:+840937457286'>
                        <p>Hotline: </p>
                        <p>093 745 72 86</p>
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:legendi.furniture@gmail.com'>
                        <p>Email:</p>
                        <p>
                          <abbr title='Đang cập nhật'>
                            legendi.furniture@gmail.com
                          </abbr>{' '}
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://maps.app.goo.gl/5zCU4PmnYbgJ6cSG7'
                        target='_blank'
                        rel='noreferrer'>
                        <p>Địa chỉ:</p>
                        <p>
                          <abbr title='Đang cập nhật'>
                            PG2-02 Vincom, Đường 30/04, Khu phố 5, Phường 3, TP
                            Tây Ninh, Tây Ninh, Vietnam
                          </abbr>
                        </p>
                      </a>
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
                    alt='thuan phong'
                  />
                </div>
                <div className='--txt'>
                  <ul>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='tel:+84932097773'>
                        <p>Hotline:</p>
                        <p>093 209 77 73</p>
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:inanthuanphong@gmail.com'>
                        <p>Email:</p>
                        <p>
                          <abbr title='Đang cập nhật'>
                            inanthuanphong@gmail.com
                          </abbr>{' '}
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://maps.app.goo.gl/BMfWYsAc3X17rQyu6'
                        target='_blank'
                        rel='noreferrer'>
                        <p>Địa chỉ:</p>
                        <p>
                          <abbr title='Lid.vn'>
                            148 - 150 Phạm Hùng, KP3, phường Long Hoa, TX Hòa
                            Thành, tỉnh Tây Ninh, Tây Ninh, Vietnam
                          </abbr>
                        </p>
                      </a>
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
                    alt='kamy kitchen'
                  />
                </div>
                <div className='--txt'>
                  <ul>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='tel:+84933220896'>
                        <p>Hotline:</p>
                        <p>093 322 08 96</p>
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:Nguyenthyankhuong@gmail.com'>
                        <p>Email:</p>
                        <p>
                          <abbr title='Đang cập nhật'>
                            Nguyenthyankhuong@gmail.com
                          </abbr>{' '}
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://maps.app.goo.gl/4QvrwiqS2FH6LdaB6'
                        target='_blank'
                        rel='noreferrer'>
                        <p>Địa chỉ:</p>
                        <p>
                          <abbr title='Đang cập nhật'>
                            1293 cách mạng tháng 8, P Ninh Thạnh, Tây Ninh,
                            Vietnam
                          </abbr>
                        </p>
                      </a>
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
                    src='/assets/imgs/logos/gree-logo.png'
                    alt='thuan phong Tây Ninh'
                  />
                </div>
                <div className='--txt'>
                  <ul>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='tel:+84932097773'>
                        <p>Hotline: </p>
                        <p>1800 8008</p>
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:info@gree.com.vn'>
                        <p>Email:</p>
                        <p>
                          <abbr title='Đang cập nhật'>info@gree.com.vn</abbr>{' '}
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://gree.com.vn/'
                        target='_blank'
                        rel='noreferrer'>
                        <p>Website:</p>
                        <p>
                          <abbr title='Đang cập nhật'>www.gree.com.vn</abbr>
                        </p>
                      </a>
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
                  <img src='/assets/imgs/logos/roxana-logo.png' alt='roxana' />
                </div>
                <div className='--txt'>
                  <ul>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='tel:+84932097773'>
                        <p>Hotline Tây Ninh:</p>
                        <p>0932 097 773</p>
                      </a>
                    </li>
                    <li>
                      <a
                        target='_blank'
                        rel='noreferrer'
                        href='mailto:legendideas@gmail.com'>
                        <p>Email:</p>
                        <p>
                          <abbr title='Đang cập nhật'>
                            legendideas@gmail.com
                          </abbr>{' '}
                        </p>
                      </a>
                    </li>
                    <li>
                      <a
                        href='https://roxana.com.vn/'
                        target='_blank'
                        rel='noreferrer'>
                        <p>Website:</p>
                        <p>
                          <abbr title='Đang cập nhật'>www.roxana.com.vn</abbr>
                        </p>
                      </a>
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
