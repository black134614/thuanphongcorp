import React from 'react'

export default function HotArticle() {
  return (
    <div className='newscateHot newsHot hotNews main d-flex justify-content-between'>
      <div
        className='--img --link img_hover aos-init aos-animate'
        data-aos='zoom-in'>
        <a
          className='--link'
          href='/tin-tuc/hon-600-nguoi-xuong-pho-don-rac-vi-sa-pa-xanh-sach-dep-van-minh-1587'>
          <img
            src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/News/Du%20l%E1%BB%8Bch/Fansipan/3395/image-thumb__3395__image-thumbnail/HIEU4421.jpg'
            alt='SUN GROUP'
          />
        </a>
      </div>
      <div className='--txt d-flex flex-column justify-content-between'>
        <div className='--top'>
          <a
            className='--link'
            href='/tin-tuc/hon-600-nguoi-xuong-pho-don-rac-vi-sa-pa-xanh-sach-dep-van-minh-1587'>
            <h5 className='mb-3 --link aos-init aos-animate' data-aos='fade-up'>
              Hơn 600 người xuống phố dọn rác vì Sa Pa xanh, sạch, đẹp, văn minh
            </h5>
          </a>
          <div className='noteNews d-flex'>
            <div
              className='--cate me-4 aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay={100}
            />
            <div
              className='--time aos-init aos-animate'
              data-aos='fade-up'
              data-aos-delay={200}>
              <i className='fa-solid fa-clock' /> 13/03/2023
            </div>
          </div>
          <article
            data-aos='fade-up'
            data-aos-delay={300}
            className='aos-init aos-animate'>
            Chiều 12/3, UBND thị xã Sa Pa phối hợp với Tập đoàn Sun Group tổ
            chức lễ phát động "Sa Pa - Khu du lịch Quốc gia Sạch, Đẹp, Văn
            minh", ra quân dọn dẹp vệ sinh và chăm sóc cây, hoa dọc các tuyến
            phố trung tâm.
          </article>
        </div>
        <a
          className='--link'
          href='/tin-tuc/hon-600-nguoi-xuong-pho-don-rac-vi-sa-pa-xanh-sach-dep-van-minh-1587'>
          <div
            className='button aos-init aos-animate'
            data-aos='fade-up'
            data-aos-delay={400}>
            <span className='--link button_hover'>Xem chi tiết</span>
          </div>
        </a>
      </div>
    </div>
  )
}
