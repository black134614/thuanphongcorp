import React from 'react'

export default function HomeIntroMain() {
  return (
    <div className='homeIntro main'>
      <div className='--txt aos-init aos-animate' data-aos='fade-up'>
        THUẬN PHONG CORP     
      </div>
      <div className='--year d-flex flex-column'>
        <div className='--number d-flex align-items-end'>
          <div className='numberimg'>
            <span data-aos='fade-up' className='aos-init aos-animate'>
              10
            </span>
            <img
              data-aos='fade-up'
              src='assets/imgs/Banner.png'
              alt='Thuận Phong Corp'
              className='aos-init aos-animate'
            />
          </div>
          <span data-aos='fade-up' className='aos-init aos-animate'>
            năm phát triển bền vững
          </span>
        </div>
        <p
          data-aos='fade-up'
          data-aos-delay={100}
          className='aos-init aos-animate'>
          2013 - 2023
        </p>
      </div>
      <article
        data-aos='fade-up'
        data-aos-delay={200}
        className='aos-init aos-animate'>
        <p>
          Thuận Phong Corp mang trong mình sứ mệnh của Người Khai Mở - Tìm đến những
          vùng đất giàu tiềm năng nhưng chưa được khai thác đúng tầm, làm thay
          đổi những vùng đất ấy, kiến tạo và đóng góp cho xã hội những công
          trình, sản phẩm/dịch vụ có đẳng cấp chất lượng vượt trội và trường tồn
          theo thời gian. Góp phần nâng cao vị thế đất nước, nâng cao chất lượng
          sống của người dân, làm đẹp, làm giàu cho Tổ quốc và đưa Việt Nam trở
          thành điểm đến hấp dẫn của thế giới.
        </p>
      </article>
      <a className='--link' href='/gioi-thieu'>
        <div
          className='arrow --link d-flex align-items-center aos-init aos-animate'
          data-aos='fade-up'
          data-aos-delay={300}>
          Tìm hiểu thêm
          <div className='--icon'>
            <img src='assets/imgs/Arrow 7.svg' alt='Thuận Phong Corp' />
          </div>
        </div>
      </a>
      <div className='--icon_1'>
        <img src='assets/imgs/icon_1.svg' alt='Thuận Phong Corp' />
      </div>
      <div className='partent'>
        <img src='assets/imgs/partent_4.svg' alt='Thuan Phong Corp' />
      </div>
    </div>
  )
}
