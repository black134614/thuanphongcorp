'use client'
import { DOMAIN } from '@/configs/configs'
import { Post } from '@/configs/models'
import { formatISODate } from '@/configs/ultilityFunction'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function HotArticle() {
  const [latestPost, setLatestPost] = useState<Post>()
  const [featuredImage, setFeaturedImage] = useState('')
  const [isLoading, setIsloading] = useState(true)
  useEffect(() => {
    // Fetch the latest post from your WordPress site
    const fetchData = () => {
      setIsloading(true)
      fetch(`${DOMAIN}posts?per_page=1&order=desc`)
        .then((response) => response.json())
        .then((data) => {
          const latestPostData = data[0]
          setLatestPost(latestPostData)
          if (latestPostData.featured_media !== 0) {
            const featuredImageId = latestPostData.featured_media
            fetch(`${DOMAIN}media/${featuredImageId}`)
              .then((response) => response.json())
              .then((imageData) => {
                const imageUrl = imageData.source_url
                setFeaturedImage(imageUrl)
                setIsloading(false)
              })
              .catch((error) => {
                setIsloading(false)
                console.error('Error fetching featured image:', error)
              })
          }
        })
        .catch((error) => {
          setIsloading(false)
          console.error('Error fetching latest post:', error)
        })
    }
    fetchData()
  }, [])

  return (
    <>
      {!isLoading ? (
        <div className='newscateHot newsHot hotNews main d-flex justify-content-between'>
          <div
            className='--img --link img_hover aos-init aos-animate'
            data-aos='zoom-in'>
            <a className='--link' target='_blank' href={latestPost?.link}>
              <img src={featuredImage} alt={latestPost?.title.rendered} />
            </a>
          </div>
          <div className='--txt d-flex flex-column justify-content-between'>
            <div className='--top'>
              <a className='--link' target='_blank' href={latestPost?.link}>
                <h5
                  className='mb-3 --link aos-init aos-animate'
                  data-aos='fade-up'>
                  {latestPost?.title.rendered}
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
                  <i className='fa-solid fa-clock' />{' '}
                  {formatISODate(latestPost?.date || '')}
                </div>
              </div>
              <article
                data-aos='fade-up'
                data-aos-delay={300}
                className='aos-init aos-animate'
                dangerouslySetInnerHTML={{
                  __html: latestPost?.content.rendered || '',
                }}></article>
            </div>
            <a className='--link' target='_blank' href={latestPost?.link}>
              <div
                className='button aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay={400}>
                <span className='--link button_hover'>Xem chi tiết</span>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <div className='newscateHot newsHot hotNews main d-flex justify-content-between'>
          <div
            className='--img --link img_hover aos-init aos-animate'
            data-aos='zoom-in'>
            <Skeleton height={300} />
          </div>
          <div className='--txt d-flex flex-column justify-content-between'>
            <div className='--top'>
              <a
                className='--link pointer-events-none'
                target='_blank'
                href='#'>
                <h5
                  className='mb-3 --link aos-init aos-animate'
                  data-aos='fade-up'>
                  <Skeleton height={40} />
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
                  <Skeleton height={20} width={50} />
                </div>
              </div>
              <article
                data-aos='fade-up'
                data-aos-delay={300}
                className='aos-init aos-animate'>
                <Skeleton height={25} />
                <Skeleton height={25} />
                <Skeleton height={25} />
                <Skeleton height={25} />
                <Skeleton height={25} />
              </article>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
