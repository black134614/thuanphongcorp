'use client'
import { formatISODate } from '@/configs/ultilityFunction'
import { data } from 'autoprefixer'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ListPost() {
  const [posts, setPosts] = useState<any[]>([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsloading] = useState(true)
  const pageSize = 12
  useEffect(() => {
    const fetchPosts = async () => {
      setIsloading(true)
      try {
        const response = await fetch(
          `/api/post?per_page=${pageSize}&page=${currentPage}`,
          {
            method: 'GET',
          },
        )
        if (response.ok) {
          const data = await response.json()
          setPosts(data.posts)
          setTotalPages(data.totalPages)
          setTimeout(() => {
            setIsloading(false)
          }, 500)
        } else {
          console.error('Error fetching posts:', response.status)
          setTimeout(() => {
            setIsloading(false)
          }, 500)
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
        setTimeout(() => {
          setIsloading(false)
        }, 500)
      }
    }

    fetchPosts()
  }, [currentPage])

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  )

  return (
    <div className='sc-eqUAAy geSXqm' style={{ width: '100%', height: '100%' }}>
      <div className='--children'>
        <div className='newscateTab newsTabcate main'>
          <div className='--item item_3 w-100 my-0'>
            <div className='--top '>
              <h3 data-aos='fade-up' className='aos-init aos-animate'>
                Tất cả bài viết
              </h3>
            </div>
            {!isLoading ? (
              <div className='list_news d-flex flex-wrap justify-content-between'>
                {posts && posts.length > 0
                  ? posts.map((item, index) => {
                      return (
                        <div
                          data-aos='fade-up'
                          data-aos-delay={100}
                          className='--news d-flex justify-content-between aos-init aos-animate'
                          key={index}>
                          <a
                            className='--link'
                            target='_blank'
                            href={item.link}>
                            <div className='--img img_hover --link'>
                              <img
                                src={item.featuredImage}
                                alt={item.featuredAltImage}
                              />
                            </div>
                          </a>
                          <div className='--content d-flex flex-column justify-content-between'>
                            <div className='--txt'>
                              <div className='--time'>
                                {formatISODate(item.date)}
                              </div>
                              <a
                                className='--link'
                                target='_blank'
                                href={item.link}>
                                <h6 className='--link'>
                                  {item.title.rendered}
                                </h6>
                              </a>
                            </div>
                            <a
                              className='--link'
                              target='_blank'
                              href={item.link}>
                              <div className='--viewdetail --link d-flex align-items-center'>
                                Xem chi tiết
                                <i className='fa-solid ms-2 fa-angles-right' />
                              </div>
                            </a>
                          </div>
                        </div>
                      )
                    })
                  : 'Không có bài đăng!'}
              </div>
            ) : (
              <div className='list_news d-flex flex-wrap justify-content-between'>
                <div
                  data-aos='fade-up'
                  data-aos-delay={100}
                  className='--news d-flex justify-content-between aos-init aos-animate'>
                  <a className='--link' target='_blank' href='#'>
                    <div className='--img img_hover --link'>
                      <Skeleton height={100}/>
                    </div>
                  </a>
                  <div className='--content d-flex flex-column justify-content-between'>
                    <div className='--txt'>
                      <div className='--time'>
                        <Skeleton width={50} height={10}/>
                      </div>
                      <a className='--link' target='_blank' href="#">
                        <h6 className='--link'>
                          <Skeleton height={25}/>
                        </h6>
                      </a>
                    </div>
                    <a className='--link' target='_blank' href="#">
                      <div className='--viewdetail --link d-flex align-items-center'>
                        <Skeleton width={70} height={20}/>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-delay={100}
                  className='--news d-flex justify-content-between aos-init aos-animate'>
                  <a className='--link' target='_blank' href='#'>
                    <div className='--img img_hover --link'>
                      <Skeleton height={100}/>
                    </div>
                  </a>
                  <div className='--content d-flex flex-column justify-content-between'>
                    <div className='--txt'>
                      <div className='--time'>
                        <Skeleton width={50} height={10}/>
                      </div>
                      <a className='--link' target='_blank' href="#">
                        <h6 className='--link'>
                          <Skeleton height={25}/>
                        </h6>
                      </a>
                    </div>
                    <a className='--link' target='_blank' href="#">
                      <div className='--viewdetail --link d-flex align-items-center'>
                        <Skeleton width={70} height={20}/>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-delay={100}
                  className='--news d-flex justify-content-between aos-init aos-animate'>
                  <a className='--link' target='_blank' href='#'>
                    <div className='--img img_hover --link'>
                      <Skeleton height={100}/>
                    </div>
                  </a>
                  <div className='--content d-flex flex-column justify-content-between'>
                    <div className='--txt'>
                      <div className='--time'>
                        <Skeleton width={50} height={10}/>
                      </div>
                      <a className='--link' target='_blank' href="#">
                        <h6 className='--link'>
                          <Skeleton height={25}/>
                        </h6>
                      </a>
                    </div>
                    <a className='--link' target='_blank' href="#">
                      <div className='--viewdetail --link d-flex align-items-center'>
                        <Skeleton width={70} height={20}/>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-delay={100}
                  className='--news d-flex justify-content-between aos-init aos-animate'>
                  <a className='--link' target='_blank' href='#'>
                    <div className='--img img_hover --link'>
                      <Skeleton height={100}/>
                    </div>
                  </a>
                  <div className='--content d-flex flex-column justify-content-between'>
                    <div className='--txt'>
                      <div className='--time'>
                        <Skeleton width={50} height={10}/>
                      </div>
                      <a className='--link' target='_blank' href="#">
                        <h6 className='--link'>
                          <Skeleton height={25}/>
                        </h6>
                      </a>
                    </div>
                    <a className='--link' target='_blank' href="#">
                      <div className='--viewdetail --link d-flex align-items-center'>
                        <Skeleton width={70} height={20}/>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-delay={100}
                  className='--news d-flex justify-content-between aos-init aos-animate'>
                  <a className='--link' target='_blank' href='#'>
                    <div className='--img img_hover --link'>
                      <Skeleton height={100}/>
                    </div>
                  </a>
                  <div className='--content d-flex flex-column justify-content-between'>
                    <div className='--txt'>
                      <div className='--time'>
                        <Skeleton width={50} height={10}/>
                      </div>
                      <a className='--link' target='_blank' href="#">
                        <h6 className='--link'>
                          <Skeleton height={25}/>
                        </h6>
                      </a>
                    </div>
                    <a className='--link' target='_blank' href="#">
                      <div className='--viewdetail --link d-flex align-items-center'>
                        <Skeleton width={70} height={20}/>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-delay={100}
                  className='--news d-flex justify-content-between aos-init aos-animate'>
                  <a className='--link' target='_blank' href='#'>
                    <div className='--img img_hover --link'>
                      <Skeleton height={100}/>
                    </div>
                  </a>
                  <div className='--content d-flex flex-column justify-content-between'>
                    <div className='--txt'>
                      <div className='--time'>
                        <Skeleton width={50} height={10}/>
                      </div>
                      <a className='--link' target='_blank' href="#">
                        <h6 className='--link'>
                          <Skeleton height={25}/>
                        </h6>
                      </a>
                    </div>
                    <a className='--link' target='_blank' href="#">
                      <div className='--viewdetail --link d-flex align-items-center'>
                        <Skeleton width={70} height={20}/>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-delay={100}
                  className='--news d-flex justify-content-between aos-init aos-animate'>
                  <a className='--link' target='_blank' href='#'>
                    <div className='--img img_hover --link'>
                      <Skeleton height={100}/>
                    </div>
                  </a>
                  <div className='--content d-flex flex-column justify-content-between'>
                    <div className='--txt'>
                      <div className='--time'>
                        <Skeleton width={50} height={10}/>
                      </div>
                      <a className='--link' target='_blank' href="#">
                        <h6 className='--link'>
                          <Skeleton height={25}/>
                        </h6>
                      </a>
                    </div>
                    <a className='--link' target='_blank' href="#">
                      <div className='--viewdetail --link d-flex align-items-center'>
                        <Skeleton width={70} height={20}/>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  data-aos='fade-up'
                  data-aos-delay={100}
                  className='--news d-flex justify-content-between aos-init aos-animate'>
                  <a className='--link' target='_blank' href='#'>
                    <div className='--img img_hover --link'>
                      <Skeleton height={100}/>
                    </div>
                  </a>
                  <div className='--content d-flex flex-column justify-content-between'>
                    <div className='--txt'>
                      <div className='--time'>
                        <Skeleton width={50} height={10}/>
                      </div>
                      <a className='--link' target='_blank' href="#">
                        <h6 className='--link'>
                          <Skeleton height={25}/>
                        </h6>
                      </a>
                    </div>
                    <a className='--link' target='_blank' href="#">
                      <div className='--viewdetail --link d-flex align-items-center'>
                        <Skeleton width={70} height={20}/>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <nav aria-label='Page navigation example'>
            <ul className='pagination justify-content-center mt-5 flex-wrap'>
              <li
                className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <span
                  className='--link page-link'
                  onClick={() => setCurrentPage(currentPage - 1)}>
                  &lt;&lt;
                </span>
              </li>
              {pageNumbers.map((pageNumber) => (
                <li
                  key={pageNumber}
                  className={`page-item ${
                    currentPage === pageNumber ? 'active' : ''
                  }`}>
                  <span
                    className='--link page-link'
                    onClick={() => setCurrentPage(pageNumber)}>
                    {pageNumber}
                  </span>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === totalPages ? 'disabled' : ''
                }`}>
                <span
                  className='--link page-link'
                  onClick={() => setCurrentPage(currentPage + 1)}>
                  &gt;&gt;
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
