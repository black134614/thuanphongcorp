import React from 'react'

export default function page() {
  return (
    <div>
      <div className='contactBanner Banner_1'>
        <div
          className='--img background aos-init aos-animate'
          data-aos='zoom-in'>
          <img
            src='/assets/imgs/banner2.jpg'
            alt='Thuận Phong Corp'
          />
        </div>
        <h1 className='Title aos-init aos-animate' data-aos='fade-up'>
          Liên hệ
        </h1>
      </div>
      <div className='Breadcrumb main'>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item '>
              <a className='--link' href='/'>
                <span className='--link'>Trang chủ</span>
              </a>
            </li>
            <li className='breadcrumb-item active'>
              <a className='--link' href='/lien-he'>
                <span className='--link'>Liên hệ</span>
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <div className='contactContent main d-flex justify-content-between'>
        <div className='--left'>
          <h2
            className='segTitle mb-3 aos-init aos-animate'
            data-aos='fade-up'
            data-aos-delay={100}>
            Sun Group
          </h2>
          <div className='--office'>
            <div className='--item'>
              <h6 data-aos='fade-up' className='aos-init aos-animate'>
                TRỤ SỞ CHÍNH
              </h6>
              <ul>
                <li data-aos='fade-up' className='aos-init aos-animate'>
                  <a
                    className='--link d-flex'
                    href='https://goo.gl/maps/nwnitXM5ihzBiKpi7'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='fa-solid fa-location-dot' />
                    <span>
                    148-150 Phạm Hùng, KP3, P Long Hoa, TX Hòa Thành, tỉnh Tây Ninh.
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='--item'>
              <h6 data-aos='fade-up' className='aos-init aos-animate'>
              Văn phòng – Showroom
              </h6>
              <ul>
                <li data-aos='fade-up' className='aos-init aos-animate'>
                  <a
                    className='--link d-flex'
                    href='https://goo.gl/maps/Sb7WTBa3yaa16xhaA'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='fa-solid fa-location-dot' />
                    <span>
                    PG2-02 Vincom, Đường 30/04, Khu phố 5, Phường 3, TP Tây Ninh. 
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='--item'>
              <h6 data-aos='fade-up' className='aos-init aos-animate'>
              Xưởng nội thất
              </h6>
              <ul>
                <li data-aos='fade-up' className='aos-init aos-animate'>
                  <a
                    className='--link d-flex'
                    href='https://goo.gl/maps/meDQjPViPfhSb3rm8'
                    target='_blank'
                    rel='noreferrer'>
                    <i className='fa-solid fa-location-dot' />
                    <span>
                    152-154 Phạm Hùng, KP3, P Long Hoa, TX Hòa Thành, tỉnh Tây Ninh.
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='--item'>
              <h6 data-aos='fade-up' className='aos-init aos-animate'>
               HotLine Liên Hệ
              </h6>
              <ul>
                <li
                  data-aos='fade-up'
                  data-aos-delay={100}
                  className='aos-init aos-animate'>
                  <a className='--link d-flex ' href='tel:(+84) 932 097 773'>
                    <i className='fa-solid fa-phone' />
                    <span>(+84) 932 097 773 (HOTLINE - TƯ VẤN)</span>
                  </a>
                </li>
                <li
                  data-aos='fade-up'
                  data-aos-delay={100}
                  className='aos-init aos-animate'>
                  <a className='--link d-flex ' href='tel:(+84) 5 6666 7070'>
                    <i className='fa-solid fa-phone' />
                    <span>(+84) 5 6666 7070 (KINH DOANH)</span>
                  </a>
                </li>
                <li
                  data-aos='fade-up'
                  data-aos-delay={100}
                  className='aos-init aos-animate'>
                  <a className='--link d-flex ' href='tel:(+84) 937 222 829'>
                    <i className='fa-solid fa-phone' />
                    <span>(+84) 937 222 829 (KỸ THUẬT)</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='--right aos-init aos-animate' data-aos="zoom-in">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7824.394802057263!2d106.10035520000002!3d11.320277599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310b6b3ce7aea669%3A0x2e0c4213e2691848!2sCN2%20-%20Showroom%20Cty%20Thu%E1%BA%ADn%20Phong%20T%C3%A2y%20Ninh%20(Legend%20Ideas)!5e0!3m2!1sen!2s!4v1691999609048!5m2!1sen!2s" style={{border: 0, width: '100%', height:'500px'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

        </div>
      </div>
    </div>
  )
}
