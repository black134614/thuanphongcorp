import React from 'react'
import './Footer.css'
import FooterLogo from './FooterLogo'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className='footer_top main d-flex justify-content-between'>
        <div className='--left '>
          <div className='logo'>
            <img alt='Thuan Phong tay ninh' src='/assets/imgs/logo-tp.png' />
          </div>
          <div>
            <ul className='mt-3 text-white company-info'>
              <li>
                <i className='far fa-clock mr-2'></i>
                7h30 - 17h30 từ thứ 2 đến thứ 7
              </li>
              <li>
                <i className='fas fa-map-marker-alt mr-2'></i>
                PG2-02 Vincom, Đường 30/04, Khu phố 5, Phường 3, TP Tây Ninh,
                Tây Ninh, Việt Nam
              </li>
              <li>
                <i className='fas fa-map-marker-alt mr-2'></i>
                148 - 150 Phạm Hùng, KP3, phường Long Hoa, TX Hòa Thành, tỉnh
                Tây Ninh, Tây Ninh, Việt Nam
              </li>
              <li>
                <i className='fas fa-phone-volume mr-2'></i>
                093 209 77 73 - Hotline
              </li>
              <li>
                <i className='fas fa-phone-volume mr-2'></i>
                05 6666 7070 - Kinh Doanh
              </li>
              <li>
                <i className='fas fa-phone-volume mr-2'></i>
                0937 22 28 29 - Kỹ Thuật
              </li>
            </ul>
          </div>
        </div>
        <div className='--right d-flex justify-content-between mt-5'>
          <div className='menu_footer'>
            <h4>Thuận Phong Tây Ninh</h4>
            <div className='footer_link'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='--item --link'>
                    <a className='--link' href='/vi'>
                      <div className='--link'>Trang chủ</div>
                    </a>
                  </div>
                  <div className='--item --link'>
                    <Link className='--link' href='/gioi-thieu'>
                      <div className='--link'>Giới thiệu</div>
                    </Link>
                  </div>
                  <div className='--item --link'>
                    <Link className='--link' href='/tin-tuc'>
                      <div className='--link'>Tin tức &amp; sự kiện</div>
                    </Link>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='--item --link'>
                    <a className='--link' href='/du-an'>
                      <div className='--link'>Dự án</div>
                    </a>
                  </div>
                  <div className='--item --link'>
                    <a className='--link' href='/lien-he'>
                      <div className='--link'>Liên hệ</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='footer_rules'>
            <h4>Theo Dõi Thuận Phong</h4>
            <div className='follow'>
              <span>Mạng xã hội</span>
              <ul>
                <li>
                  <span className='--link'>
                    <i className='fa-brands fa-facebook' />
                  </span>
                </li>
                <li>
                  <span className='--link'>
                    <i className='fa-brands fa-youtube' />
                  </span>
                </li>
                <li>
                  <span className='--link'>
                    <i className='fa-brands fa-tiktok' />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <FooterLogo /> */}
      <div className='footer_coppy'>
        <span>@Copyright 2023 by Thuan Phong Tay Ninh</span>
      </div>
    </footer>
  )
}
