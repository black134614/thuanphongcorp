import React from 'react'

export default function Intro() {
  return (
    <div className='aboutIntro main'>
      <div className='row'>
        <div className='col-md-5'>
          <div className='--video aos-init aos-animate' data-aos='zoom-in'>
            <div className='--img'>
              <img
                src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Gi%E1%BB%9Bi%20thi%E1%BB%87u/358/image-thumb__358__image-thumbnail/golden%20bridge%20b%C3%A0%20n%C3%A0%20hills%20vietnam%20smashop.jpg'
                alt='SUN GROUP'
              />
            </div>
          </div>
        </div>
        <div className='col-md-7'>
          <div className='--content'>
            <h2 className='segTitle aos-init aos-animate' data-aos='fade-up'>
              Sun Group <br />
              Làm đẹp những vùng đất
            </h2>
            <div className='--tab d-flex flex-wrap' />
            <div
              className='--video d-none mobi aos-init aos-animate'
              data-aos='zoom-in'>
              <div className='--img'>
                <img
                  src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Gi%E1%BB%9Bi%20thi%E1%BB%87u/358/image-thumb__358__image-thumbnail/golden%20bridge%20b%C3%A0%20n%C3%A0%20hills%20vietnam%20smashop.jpg'
                  alt='SUN GROUP'
                />
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
              <div className='--number'>15</div>
              <div className='--txt'>
                <span>năm</span>
                <h5 className='mb-0 mt-2'>phát triển bền vững</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
