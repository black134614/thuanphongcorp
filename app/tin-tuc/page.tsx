import React from 'react'
import Banner from '../components/tin-tuc/Banner'
import BreadScrumb from '../components/BreadScrumb'
import HotArticle from '../components/tin-tuc/HotArticle'
import { Metadata } from 'next'
import ListPost from '../components/tin-tuc/ListPost'
// either Static metadata
export const metadata: Metadata = {
  title: 'Bài viết - Thuận Phong Corp',
  description: 'Danh sách tất cả bài viết về Thuận Phong Corp Tây Ninh',
}
export default function page() {
  return (
    <div className='sc-dcJsrY dwHOrx'>
      <Banner />
      <BreadScrumb />
      <HotArticle />
      <ListPost />
    </div>
  )
}
