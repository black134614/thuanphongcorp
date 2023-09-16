import React from 'react'
async function getMovies() {
  let res = await fetch(`https://api.publicapis.org/entries`)
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return res.json()
}
export default async function Intro() {
  let { results } = await getMovies()
  return (
    <div className='aboutIntro main'>
      <div className='row'>
        <div className='col-md-5'>
          <div className='--video aos-init aos-animate' data-aos='zoom-in'>
            <div className='--img'>
              <img
                src='/assets/imgs/banner3.jpg'
                alt='Thuận Phong Tây Ninh'
              />
            </div>
          </div>
        </div>
        <div className='col-md-7'>
          <div className='--content'>
            <h2 className='segTitle aos-init aos-animate' data-aos='fade-up'>
              Khai Trương Showwroom 2023
            </h2>
            <div className='--tab d-flex flex-wrap' />
            <div
              className='--video d-none mobi aos-init aos-animate'
              data-aos='zoom-in'>
              <div className='--img'>
                <img src='/assets/imgs/banner3.jpg' alt='Thuận Phong Tây Ninh' />
              </div>
            </div>
            <article
              data-aos='fade-up'
              data-aos-delay={100}
              className='aos-init aos-animate'
            />
            <div
              className='--des aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay={200}
            />
            <div className='--vieadetail --link'>Xem thêm</div>
            <div
              className='--year mt-3 d-flex align-items-end aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay={300}>
              <div className='--number'>10</div>
              <div className='--txt'>
                <span>năm</span>
                <h5 className='mb-0 mt-2'>
                  BẤT CHẤP TÌNH HÌNH KINH TẾ THẾ GIỚI LAO DỐC - THUẬN PHONG TỰ
                  HÀO LÀ ĐƠN VỊ CHỊU ÍT ẢNH HƯỞNG TỪ KINH TẾ SUY THOÁI - VÀ KHAI
                  TRƯƠNG SHOWROOM THUẬN PHONG VÀO THÁNG 8 - 2023
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
