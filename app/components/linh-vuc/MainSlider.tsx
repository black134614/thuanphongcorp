'use client'
import React, { useEffect } from 'react'
import BannerSlider2 from '../HOC/BannerSlider2/BannerSlider2'

const slides = [
  {
    imageUrl:
      'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/Hon%20Thom%20Paradise%20Island/272/image-thumb__272__image-thumbnail/toa-nha-canh-buom-dao-thien-duong-hon-thom-03.jpg',
    alt: 'SUN GROUP',
  },
  {
    imageUrl:
      'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/250/image-thumb__250__image-thumbnail/Sun_Hillside_Beboi%20tren%20mai%20toa%20H3_210312.jpg',
    alt: 'SUN GROUP',
  },
  {
    imageUrl:
      'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/Sun%20Premier%20Village%20Primavera/283/image-thumb__283__image-thumbnail/DJI_0948.jpg',
    alt: 'thuan phong corp',
  },
]

const handleRollClick = () => {
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      window.scrollTo({ top: viewportHeight, behavior: 'smooth' });
  };
  export default function HomeSlider() {
    useEffect(() => {
      AOS.init()
    }, [])

export default function MainSlider() {
  return (
    <>
      <BannerSlider2 slides={slides} />
    </>
  )
}
