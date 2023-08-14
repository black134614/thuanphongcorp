import React from 'react'

export default function BreadScrumb() {
  return (
    <div className='Breadcrumb main'>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item '>
            <a className='--link' href='/'>
              <span className='--link'>Trang chủ</span>
            </a>
          </li>
          <li className='breadcrumb-item active'>
            <a className='--link' href='/gioi-thieu'>
              <span className='--link'>Giới thiệu</span>
            </a>
          </li>
        </ol>
      </nav>
    </div>
  )
}
