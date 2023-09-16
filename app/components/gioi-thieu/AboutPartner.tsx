import React from 'react'

export default function AboutPartner() {
  return (
    <div className='aboutPartner main d-flex justify-content-between'>
      <div className='--left aos-init aos-animate' data-aos='zoom-in'>
        <div className='round'>
          <p />
          <p />
          <p />
          <div className='list_logo'>
            <div className='--img --link'>
              <img
                src='/assets/imgs/thuan-phong-logo-full.png'
                alt='Thuan phong tay ninh'
              />
            </div>
            <div className='--img --link '>
              <img
                src='/assets/imgs/logos/in-an-tp-logo.png'
                alt='Thuan phong tay ninh'
              />
              <span>7</span>
            </div>
            <div className='--img --link '>
              <img
                src='/assets/imgs/logos/kamy-kiechen-llogo.png'
                alt='Thuan phong tay ninh'
              />
              <span>0</span>
            </div>
            <div className='--img --link '>
              <img
                src='/assets/imgs/logos/legendi-logo.png'
                alt='Thuan phong tay ninh'
              />
              <span>0</span>
            </div>
            <div className='--img --link '>
              <img
                src='/assets/imgs/logos/roxana-logo.png'
                alt='Thuan phong tay ninh'
              />
              <span>0</span>
            </div>
            <div className='--img --link '>
              <img
                src='/assets/imgs/logos/gree-logo.png'
                alt='Thuan phong tay ninh'
              />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      <div className='--right'>
        <div className='subTitle mb-3 aos-init aos-animate' data-aos='fade-up'>
          Giới thiệu
        </div>
        <h2
          className='segTitle aos-init aos-animate'
          data-aos='fade-up'
          data-aos-delay={100}>
          Thành Viên - Đối Tác
        </h2>
        <h3
          data-aos='fade-up'
          data-aos-delay={200}
          className='aos-init aos-animate'>
          Hệ sinh thái Công Ty Thuận Phong Tây Ninh
        </h3>
        <h6
          data-aos='fade-up'
          data-aos-delay={300}
          className='aos-init aos-animate'>
          Tiên phong kiến tạo - dẫn dắt xu thế
        </h6>
        {/* <article>
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur,
          from a Lorem Ipsum passage,
        </article> */}
      </div>
    </div>
  )
}
