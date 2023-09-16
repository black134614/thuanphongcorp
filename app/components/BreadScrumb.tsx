'use client'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function BreadScrumb() {
  const pathname = usePathname()
  const listLink = pathname?.split('/')
  return (
    <div className='Breadcrumb main'>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item '>
            <a className='--link' href='/'>
              <span className='--link'>Trang chủ</span>
            </a>
          </li>
          {listLink?.map((item, index) => {
            if (index > 0 && index !== listLink?.length - 1)
              return (
                <li className='breadcrumb-item pointer-events-none' key={index}>
                  <a href='#' className='--link'>
                    <span className='--link'>{item}</span>
                  </a>
                </li>
              )
            else if (index === listLink?.length -1)
              return (
                <li
                  className='breadcrumb-item pointer-events-none active'
                  key={index}>
                  <a href='#' className='--link'>
                    <span className='--link'>{item}</span>
                  </a>
                </li>
              )
          })}
        </ol>
      </nav>
    </div>
  )
}
