import React from 'react'

async function getMovies() {
  let res = await fetch(`https://api.publicapis.org/entries`)
  await new Promise((resolve) => setTimeout(resolve, 1500))
  return res.json()
}
export default async function HomeIntroMain() {
  let { results } = await getMovies()
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
          Được thành lập năm 2013 tại Hòa Thành, Tây Ninh tiền thân là 1 cơ sở
          in ấn & thi công bảng hiệu. Dưới sự dẫn dắt của lãnh đạo công ty và
          đội ngũ nhân sự chất lượng cao. Trải qua 10 năm hình thành & phát
          triển chúng tôi đã mở rộng sản xuất, gia tăng thêm ngành hàng và từng
          bước khẳng định vị trí tiên phong trong việc tư vấn thiết kế, thi công
          bảng hiệu quảng cáo, nội thất & sửa chữa cải tạo nhà trọn gói tại thị
          trường Tây Ninh.
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
