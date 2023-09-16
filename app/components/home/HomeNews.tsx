'use client'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { DOMAIN } from '@/configs/configs'
import { Post } from '@/configs/models'
import { formatISODate } from '@/configs/ultilityFunction'

export default function HomeNews() {
  const [latestPost, setLatestPost] = useState<Post>()
  const [featuredImage, setFeaturedImage] = useState('')
  const [isLoading, setIsloading] = useState(true)
  const [isLoading2, setIsloading2] = useState(true)
  const [posts, setPosts] = useState<any[]>([])
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

  useEffect(() => {
    const fetchPosts = async () => {
      setIsloading2(true)
      try {
        const response = await fetch('api/post?page=1&per_page=5', {
          method: 'GET',
        })
        if (response.ok) {
          const data = await response.json()
          setPosts(data.posts)
          setTimeout(() => {
            setIsloading2(false)
          }, 500)
        } else {
          console.error('Error fetching posts:', response.status)
          setTimeout(() => {
            setIsloading2(false)
          }, 500)
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
        setTimeout(() => {
          setIsloading2(false)
        }, 500)
      }
    }

    fetchPosts()
  }, [])
  return (
    <div className='homeNews main pe-0'>
      <div
        className='cardNews cardNews_mobi mt-0 d-none aos-init aos-animate'
        data-aos='zoom-in'>
        <div className='--left d-flex justify-content-center flex-column'>
          <div className='subTitle'>Thuận Phong Tây Ninh</div>
          <p className='segTitle'>Tin tức</p>
          <div className='partent'>
            <img src='assets/imgs/partent_2.png' alt='SUN GROUP' />
          </div>
        </div>
        <Link className='--link' href='/tin-tuc'>
          <div className='arrow_1 --viewall --link d-flex align-items-center'>
            Xem tất cả
            <p className='mb-0' />
          </div>
        </Link>
      </div>
      {!isLoading ? (
        <div className='hotNews d-flex justify-content-between'>
          <div
            className='--img --link img_hover aos-init aos-animate'
            data-aos='zoom-in'>
            <a className='--link' href={latestPost?.link}>
              <img src={featuredImage} alt={latestPost?.title.rendered} />
            </a>
          </div>
          <div className='--txt'>
            <a className='--link' href={latestPost?.link}>
              <h5 className='mb-3 --link'>{latestPost?.title.rendered}</h5>
            </a>
            <div className='noteNews d-flex align-items-center'>
              <div
                className='--cate me-4 aos-init aos-animate'
                data-aos='fade-up'>
                Tin mới
              </div>
              <div
                className='--time d-flex align-items-center aos-init aos-animate'
                data-aos='fade-up'
                data-aos-delay={100}>
                <img
                  className='me-1'
                  src='assets/imgs/clock_1.svg'
                  alt='Thuận Phong Tây Ninh'
                />{' '}
                {formatISODate(latestPost?.date || '')}
              </div>
            </div>
            <article
              data-aos='fade-up'
              data-aos-delay={200}
              className='aos-init aos-animate'
              dangerouslySetInnerHTML={{
                __html: latestPost?.content.rendered || '',
              }}></article>
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
      <div className='otherNews d-block d-lg-flex align-items-center'>
        <div
          className='cardNews aos-init aos-animate d-none d-lg-block'
          data-aos='zoom-in'>
          <div className='subTitle'>Thuận Phong Tây Ninh</div>
          <p className='segTitle'>Tin tức</p>
          <a className='--link' href='/news'>
            <div className='arrow_1 --viewall --link d-flex align-items-center'>
              Xem tất cả
              <p className='mb-0' />
            </div>
          </a>
          <div className='partent'>
            <img src='assets/imgs/partent_2.png' alt='SUN GROUP' />
          </div>
        </div>
        {!isLoading2 ? (
          <>
            <Swiper
              className='list_homeNews newsall'
              modules={[Navigation]}
              navigation={{
                nextEl: '.nextarrow',
                prevEl: '.prevarrow',
              }}
              slidesPerView={1}
              rewind={true}>
              {posts?.map((item, index) => {
                return (
                  <SwiperSlide className='--item d-flex' key={index}>
                    <div className='--img img_hover'>
                      <img
                        src={item.featuredImage}
                        alt={item.featuredAltImage}
                      />
                    </div>
                    <div className='--txt d-flex justify-content-between flex-column'>
                      <div className='--top'>
                        <a target='_blank' href={item.link}>
                          <h6 className='--link mb-2'>{item.title.rendered}</h6>
                        </a>
                        <article
                          dangerouslySetInnerHTML={{
                            __html: item?.content.rendered || '',
                          }}></article>
                      </div>
                      <div className='noteNews d-flex mb-2'>
                        <div className='--cate me-4'>Tin mới</div>
                        <div className='--time d-flex align-items-center'>
                          <img
                            className='me-1'
                            src='assets/imgs/clock_1.svg'
                            alt='SUN GROUP'
                          />
                          {formatISODate(item.date || '')}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            <div className='arrow_homeNews arrow'>
              <div className='--icon prevarrow cursor-pointer'>
                <img src='assets/imgs/Arrow 6.svg' alt='SUN GROUP' />
              </div>
              <div className='--icon nextarrow cursor-pointer'>
                <img src='assets/imgs/Arrow 7.svg' alt='SUN GROUP' />
              </div>
            </div>
          </>
        ) : (
          <>
          <Skeleton height={250}/>
          </>
        )}
      </div>
    </div>
  )
}
