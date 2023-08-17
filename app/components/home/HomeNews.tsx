'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

export default function HomeNews() {
  return (
    <div className='homeNews main pe-0'>
      <div
        className='cardNews cardNews_mobi mt-0 d-none aos-init aos-animate'
        data-aos='zoom-in'>
        <div className='--left d-flex justify-content-center flex-column'>
          <div className='subTitle'>Thuận Phong Corp</div>
          <p className='segTitle'>Tin tức</p>
          <div className='partent'>
            <img src='assets/imgs/partent_2.png' alt='SUN GROUP' />
          </div>
        </div>
        <a className='--link' href='/news'>
          <div className='arrow_1 --viewall --link d-flex align-items-center'>
            Xem tất cả
            <p className='mb-0' />
          </div>
        </a>
      </div>
      <div className='hotNews d-flex justify-content-between'>
        <div
          className='--img --link img_hover aos-init aos-animate'
          data-aos='zoom-in'>
          <a
            className='--link'
            href='/tin-tuc/ngo-ngang-truoc-ve-dep-tua-tranh-ve-cua-ruong-bac-thang-sa-pa-3892'>
            <img
              src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/SUN%20WORLD%20FANSIPAN%20LEGEND/%C4%90%C4%83ng%20B%C3%A0i/8555/image-thumb__8555__image-thumbnail/B%E1%BA%A3n%20sao%20c%E1%BB%A7a%20z4563042493341_ac19962d6ab06fa048491df29540b752.jpg'
              alt='SUN GROUP'
            />
          </a>
        </div>
        <div className='--txt'>
          <a
            className='--link'
            href='/tin-tuc/ngo-ngang-truoc-ve-dep-tua-tranh-ve-cua-ruong-bac-thang-sa-pa-3892'>
            <h5 className='mb-3 --link'>
              Ngỡ ngàng trước vẻ đẹp tựa tranh vẽ của ruộng bậc thang Sa Pa
            </h5>
          </a>
          <div className='noteNews d-flex align-items-center'>
            <div
              className='--cate me-4 aos-init aos-animate'
              data-aos='fade-up'>
              Tin nóng
            </div>
            <div
              className='--time d-flex align-items-center aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay={100}>
              <img
                className='me-1'
                src='assets/imgs/clock_1.svg'
                alt='Thuận Phong corp'
              />{' '}
              {/* */}03/08/2023
            </div>
          </div>
          <article
            data-aos='fade-up'
            data-aos-delay={200}
            className='aos-init aos-animate'>
            Đầu tháng 8, nắng vàng hanh hao đổ về khắp những sườn núi Sa Pa, gọi
            mùa lúa xanh chín dần trên khắp bản làng, đẹp tựa tuyệt tác của vị
            họa sĩ tài ba.
          </article>
        </div>
      </div>
      <div className='otherNews d-block d-lg-flex align-items-center'>
        <div
          className='cardNews aos-init aos-animate d-none d-lg-block'
          data-aos='zoom-in'>
          <div className='subTitle'>Thuận Phong Corp</div>
          <p className='segTitle'>Tin tức</p>
          <a className='--link' href='/news'>
            <div className='arrow_1 --viewall --link d-flex align-items-center'>
              Xem tất cả
              <p className='mb-0' />
            </div>
          </a>
          <div className='partent'>
            <img src='assets/imgs/partent_2.png' alt='SUN GROUP' />
          </div>
        </div>
        <Swiper
          className='list_homeNews newsall'
          modules={[Navigation]}
          navigation={{
            nextEl: '.nextarrow',
            prevEl: '.prevarrow',
          }}
          slidesPerView={1}
          rewind={true}>
          <SwiperSlide className='--item d-flex'>
            <div className='--img img_hover'>
              <img
                src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/SUN%20WORLD%20FANSIPAN%20LEGEND/%C4%90%C4%83ng%20B%C3%A0i/8445/image-thumb__8445__image-thumbnail/Gi%E1%BA%A3i%20V%C3%B3%20ng%E1%BB%B1a%20tr%C3%AAn%20m%C3%A2y%202022%20%2819%29%20%281%29.jpg'
                alt='SUN GROUP'
              />
            </div>
            <div className='--txt d-flex justify-content-between flex-column'>
              <div className='--top'>
                <a
                  className='--link'
                  href='/tin-tuc/doc-dao-chuong-trinh-thao-dien-ngua-hao-khi-tay-bac-tai-sun-world-fansipan-legend-toi-het-29-7-3877'>
                  <h6 className='--link mb-2'>
                    Độc đáo chương trình thao diễn ngựa “Hào khí Tây Bắc” tại
                    Sun World Fansipan Legend tới hết 29/7
                  </h6>
                </a>
                <article>
                  Cuối tuần, hàng nghìn du khách và người dân Sa Pa cùng nhau đổ
                  về Sun World Fansipan Legend đón xem chương trình thao diễn
                  ngựa “Hào khí Tây Bắc”, với phần trình diễn vô cùng ấn tượng
                  của 30 nài ngựa xuất sắc.
                </article>
              </div>
              <div className='noteNews d-flex mb-2'>
                <div className='--cate me-4'>Tin nóng</div>
                <div className='--time d-flex align-items-center'>
                  <img
                    className='me-1'
                    src='assets/imgs/clock_1.svg'
                    alt='SUN GROUP'
                  />{' '}
                  25/07/2023
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='--item d-flex'>
            <div className='--img img_hover'>
              <img
                src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/SUN%20WORLD%20FANSIPAN%20LEGEND/%C4%90%C4%83ng%20B%C3%A0i/8445/image-thumb__8445__image-thumbnail/Gi%E1%BA%A3i%20V%C3%B3%20ng%E1%BB%B1a%20tr%C3%AAn%20m%C3%A2y%202022%20%2819%29%20%281%29.jpg'
                alt='SUN GROUP'
              />
            </div>
            <div className='--txt d-flex justify-content-between flex-column'>
              <div className='--top'>
                <a
                  className='--link'
                  href='/tin-tuc/doc-dao-chuong-trinh-thao-dien-ngua-hao-khi-tay-bac-tai-sun-world-fansipan-legend-toi-het-29-7-3877'>
                  <h6 className='--link mb-2'>
                    Độc đáo chương trình thao diễn ngựa “Hào khí Tây Bắc” tại
                    Sun World Fansipan Legend tới hết 29/7
                  </h6>
                </a>
                <article>
                  Cuối tuần, hàng nghìn du khách và người dân Sa Pa cùng nhau đổ
                  về Sun World Fansipan Legend đón xem chương trình thao diễn
                  ngựa “Hào khí Tây Bắc”, với phần trình diễn vô cùng ấn tượng
                  của 30 nài ngựa xuất sắc.
                </article>
              </div>
              <div className='noteNews d-flex mb-2'>
                <div className='--cate me-4'>Tin nóng</div>
                <div className='--time d-flex align-items-center'>
                  <img
                    className='me-1'
                    src='assets/imgs/clock_1.svg'
                    alt='SUN GROUP'
                  />{' '}
                  25/07/2023
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className='--item d-flex'>
            <div className='--img img_hover'>
              <img
                src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/SUN%20WORLD%20FANSIPAN%20LEGEND/%C4%90%C4%83ng%20B%C3%A0i/8445/image-thumb__8445__image-thumbnail/Gi%E1%BA%A3i%20V%C3%B3%20ng%E1%BB%B1a%20tr%C3%AAn%20m%C3%A2y%202022%20%2819%29%20%281%29.jpg'
                alt='SUN GROUP'
              />
            </div>
            <div className='--txt d-flex justify-content-between flex-column'>
              <div className='--top'>
                <a
                  className='--link'
                  href='/tin-tuc/doc-dao-chuong-trinh-thao-dien-ngua-hao-khi-tay-bac-tai-sun-world-fansipan-legend-toi-het-29-7-3877'>
                  <h6 className='--link mb-2'>
                    Độc đáo chương trình thao diễn ngựa “Hào khí Tây Bắc” tại
                    Sun World Fansipan Legend tới hết 29/7
                  </h6>
                </a>
                <article>
                  Cuối tuần, hàng nghìn du khách và người dân Sa Pa cùng nhau đổ
                  về Sun World Fansipan Legend đón xem chương trình thao diễn
                  ngựa “Hào khí Tây Bắc”, với phần trình diễn vô cùng ấn tượng
                  của 30 nài ngựa xuất sắc.
                </article>
              </div>
              <div className='noteNews d-flex mb-2'>
                <div className='--cate me-4'>Tin nóng</div>
                <div className='--time d-flex align-items-center'>
                  <img
                    className='me-1'
                    src='assets/imgs/clock_1.svg'
                    alt='SUN GROUP'
                  />{' '}
                  25/07/2023
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className='arrow_homeNews arrow'>
          <div className='--icon prevarrow cursor-pointer'>
            <img src='assets/imgs/Arrow 6.svg' alt='SUN GROUP' />
          </div>
          <div className='--icon nextarrow cursor-pointer'>
            <img src='assets/imgs/Arrow 7.svg' alt='SUN GROUP' />
          </div>
        </div>
      </div>
    </div>
  )
}
