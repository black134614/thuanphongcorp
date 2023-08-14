'use client'
import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import './Header.css'
import Link from 'next/link'

export default function Header() {
  const [openSearch, setopenSearch] = useState(false)
  const [openMenuMobile, setMenuMobile] = useState(false)
  const [open, setOpen] = useState(false)
  const [openDiemDen, setOpenDiemDen] = useState(false)
  const [openTinTuc, setOpenTinTuc] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleRollClick = () => {
    const viewportHeight = Math.max(
      document.documentElement.clientHeight || 0,
      window.innerHeight || 0,
    )
    window.scrollTo({ top: viewportHeight * 0.5, behavior: 'smooth' })
  }
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY >= window.innerHeight * 0.5)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      className={`${openMenuMobile ? 'active' : ''} ${
        isScrolled ? 'change' : ''
      }`}>
      <div className='header_top d-flex justify-content-between'>
        <a className='--link' href='/'>
          <div className='logo --link'>
            <img alt='Thuận Phong' src='/assets/imgs/logo-tp.png' />
          </div>
        </a>
        <div className='menu menu_pc d-flex'>
          <div className='--item  active'>
            <a className='--link' href='/'>
              <span className='--item-menu --link'>Trang chủ</span>
            </a>
          </div>
          <div className='--item  '>
            <a className='--link' href='/gioi-thieu'>
              <span className='--item-menu --link'>Giới thiệu</span>
            </a>
          </div>
          <div className='--item  '>
            <span className='--item-menu --link --itemmenusub'>Lĩnh vực</span>
            <div className='sub-menu '>
              <div className='--box d-flex flex-column'>
                <a className='--link' href='#'>
                  <span className='--link'>Bất động sản</span>
                </a>
                <a
                  className='--link'
                  href='#'>
                  <span className='--link'>Du lịch nghỉ dưỡng</span>
                </a>
                <a
                  className='--link'
                  href='#'>
                  <span className='--link'>Vui chơi giải trí</span>
                </a>
                <a className='--link' href='#'>
                  <span className='--link'>Đầu tư hạ tầng</span>
                </a>
              </div>
            </div>
          </div>
          <div className='--item  '>
            <a className='--link' href='#'>
              <span className='--item-menu --link'>Dự án</span>
            </a>
          </div>
          <div className='--item  '>
            <span className='--item-menu --link --itemmenusub --itemmenunews'>
              <Link className='--link' href='/tin-tuc'>
                {' '}
                Tin tức
              </Link>
            </span>
            <div className='sub-menu '>
              <div className='--box d-flex flex-column'>
                <Link className='--link' href='/tin-tuc'>
                  <span className='--link'>Tất cả</span>
                </Link>
                <Link
                  className='--link'
                  href='/tin-tuc'>
                  <span className='--link'>Hoạt động xã hội</span>
                </Link>
              </div>
            </div>
          </div>
          <div className='--item  '>
            <span className='--item-menu --link'>Tuyển dụng</span>
          </div>
          <div className='--item  '>
            <a className='--link' href='/lien-he'>
              <span className='--item-menu --link'>Liên hệ</span>
            </a>
          </div>
        </div>
        <div
          className={
            openMenuMobile ? 'menu_mobi d-none active' : 'menu_mobi d-none '
          }>
          <div className='--item --link active'>
            <Link className='--link' href='/'>
              <span className='--item-menu --link'>Trang chủ</span>
            </Link>
          </div>
          <div className='--item --link '>
            <Link className='--link' href='/gioi-thieu'>
              <span className='--item-menu --link'>Giới thiệu</span>
            </Link>
          </div>
          <div className='--item --link '>
            <span className='--item-menu --link' onClick={() => setOpen(!open)}>
              Lĩnh vực
              <i className='fa-solid fa-caret-down' />
            </span>
            <Collapse in={open}>
              <div className='sub-menu'>
                <div className='--box d-flex flex-column'>
                  <a className='--link' href='#'>
                    <span className='--link'>Bất động sản</span>
                  </a>
                  <a
                    className='--link'
                    href='#'>
                    <span className='--link'>Du lịch nghỉ dưỡng</span>
                  </a>
                  <a
                    className='--link'
                    href='#'>
                    <span className='--link'>Vui chơi giải trí</span>
                  </a>
                  <a
                    className='--link'
                    href='#'>
                    <span className='--link'>Đầu tư hạ tầng</span>
                  </a>
                </div>
              </div>
            </Collapse>
          </div>
          <div className='--item --link '>
            <span
              className='--item-menu --link'  onClick={() => setOpenDiemDen(!openDiemDen)}>
              Điểm đến
              <i className='fa-solid fa-caret-down' />
            </span>
            <Collapse in={openDiemDen}>
              <div className='sub-menu'>
                <div className='--box d-flex flex-column'>
                  <a className='--link' href='#'>
                    <span className='--link'>Bất động sản</span>
                  </a>
                  <a
                    className='--link'
                    href='#'>
                    <span className='--link'>Du lịch nghỉ dưỡng</span>
                  </a>
                  <a
                    className='--link'
                    href='#'>
                    <span className='--link'>Vui chơi giải trí</span>
                  </a>
                  <a
                    className='--link'
                    href='#'>
                    <span className='--link'>Đầu tư hạ tầng</span>
                  </a>
                </div>
              </div>
            </Collapse>
          </div>
          <div className='--item --link '>
            <a className='--link' href='#'>
              <span className='--item-menu --link'>Dự án</span>
            </a>
          </div>
          <div className='--item --link '>
            <span
              className='--item-menu --link'onClick={() =>{setOpenTinTuc(!openTinTuc)}}>
              Tin tức
              <i className='fa-solid fa-caret-down' />
            </span>
            <Collapse in={openTinTuc}>
              <div className='sub-menu'>
                <div className='--box d-flex flex-column'>
                <a className='--link' href='/tin-tuc'>
                  <span className='--link'>Tất cả</span>
                </a>
                <a
                  className='--link'
                  href='/tin-tuc/category/hoat-dong-xa-hoi-723'>
                  <span className='--link'>Hoạt động xã hội</span>
                </a>
                <a
                  className='--link'
                  href='/tin-tuc/category/van-hoa-sun-group-724'>
                  <span className='--link'>Văn hóa</span>
                </a>
                </div>
              </div>
            </Collapse>
          </div>
          <div className='--item --link '>
            <a className='--link' href='/lien-he'>
              <span className='--item-menu --link'>Liên hệ</span>
            </a>
          </div>
        </div>
        <div className='followlink d-flex align-items-center'>
          <ul>
            <li>
              <a
                className='--link'
                href='https://www.facebook.com/tapdoanmattroi/'
                target='_blank'
                rel='noreferrer'>
                <i className='fa-brands fa-youtube'></i>
              </a>
            </li>
            <li>
              <a
                className='--link'
                href='https://www.youtube.com/c/SunGroupOfficial'
                target='_blank'
                rel='noreferrer'>
                <i className='fa-brands fa-tiktok'></i>
              </a>
            </li>
            <li>
              <a
                className='--link'
                href='https://www.tiktok.com/@sungroupofficial'
                target='_blank'
                rel='noreferrer'>
                <i className='fa-brands fa-facebook'></i>
              </a>
            </li>
          </ul>
          <div className='--right d-flex align-items-center'>
            <div
              className={openSearch ? 'search active' : 'search'}
              onClick={() => {
                setopenSearch(true)
              }}>
              <input type='text' />
              <i className='fa-solid fa-magnifying-glass' />
            </div>
            <i
              className={
                openSearch
                  ? 'active fa-solid fa-xmark search-btn-close cursor-pointer'
                  : 'fa-solid fa-xmark search-btn-close cursor-pointer d-none'
              }
              onClick={() => {
                setopenSearch(false)
              }}></i>
            <div className='language'>
              <select>
                <option value='vi'>VI</option>
                <option value='en'>EN</option>
              </select>
              <i className='fa-solid fa-caret-down' />
            </div>
          </div>
          <div
            className={
              openMenuMobile
                ? 'tab_menu d-block d-md-none ml-1 active'
                : 'tab_menu d-block d-md-none ml-1'
            }
            onClick={() => {
              setMenuMobile(!openMenuMobile)
            }}>
            <p />
            <p />
            <p />
          </div>
        </div>
      </div>
    </header>
  )
}
