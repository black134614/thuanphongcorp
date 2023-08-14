'use client'
import React, { useState } from 'react'
import { TypeAnimation } from 'react-type-animation'

type imPrint = {
  id: number
  title: string
  subTitle: string
  content: string
  img: string
}
const data: imPrint[] = [
  {
    id: 1,
    title: 'Dấu ấn mỗi ngày',
    subTitle: 'SA PA',
    content:
      'Từ ngày 24/6 đến 2/7/2023, mùa giải “Vó ngựa trên mây” lần thứ 6 sẽ được tổ chức tại Sun World Fansipan Legend, đưa du khách sống lại nét văn hóa bản địa đặc sắc từ hàng trăm năm trước, bên cung đường đua rợp sắc hoa hồng. <br />&nbsp;<br />Nhằm gia tăng trải nghiệm cho du khách khám phá mùa hè mát lạnh của Sa Pa, khu du lịch Sun World Fansipan Legend tổ chức mùa giải “Vó ngựa trên mây” bài bản, quy mô trong suốt một tuần. Xen kẽ giữa những vòng đua kịch tính của các nài ngựa Tây Bắc là những tiết mục trình diễn nghệ thuật, diễu hành ngựa… hứa hẹn mang đến cho du khách không khí lễ hội sôi động, hấp dẫn bậc nhất hè này.',
    img: 'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/SUN%20WORLD%20FANSIPAN%20LEGEND/%C4%90%C4%83ng%20B%C3%A0i/8445/image-thumb__8445__image-thumbnail/Gi%E1%BA%A3i%20V%C3%B3%20ng%E1%BB%B1a%20tr%C3%AAn%20m%C3%A2y%202022%20%2819%29%20%281%29.jpg',
  },
  {
    id: 2,
    title: 'Dấu ấn mỗi ngày',
    subTitle: 'Tây Ninh',
    content:
      '50 căn biệt thự tại khu Yama Villa đã chính thức được đưa vào vận hành từ cuối tháng 6/2023. <br>Nguồn khoáng nóng vô giá từ mạch nguồn khoáng nóng Quang Hanh được dẫn vào từng căn villa với những bể tắm onsen, xông hơi độc đáo.<br>Yama Villa thích hợp cho các gia đình, nhóm bạn yêu thích không gian thoáng, rộng. Đây cũng là điểm đến lý tưởng cho những cư dân tinh hoa đang kiếm tìm trải nghiệm nghỉ dưỡng độc bản.<br>Tại đây có 5 hạng villa để du khách lựa chọn:<br>* Yama Onsen (3 phòng ngủ)<br>* Yama Premium (3 phòng ngủ)<br>* Yama Grand Suite (4 phòng ngủ)<br>* Yama Imperial (5 phòng ngủ)<br>* Yama Royal (5 phòng ngủ)&nbsp',
    img: 'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/YOKO%20ONSEN%20QUANG%20HANH/YAMA%20VILLA/8522/image-thumb__8522__image-thumbnail/ONSEN_1490.jpg',
  },
]
export default function HomeImprint() {
  const [content, setContent] = useState<imPrint>({
    id: 1,
    title: 'Dấu ấn mỗi ngày',
    subTitle: 'SA PA',
    content:
      'Từ ngày 24/6 đến 2/7/2023, mùa giải “Vó ngựa trên mây” lần thứ 6 sẽ được tổ chức tại Sun World Fansipan Legend, đưa du khách sống lại nét văn hóa bản địa đặc sắc từ hàng trăm năm trước, bên cung đường đua rợp sắc hoa hồng. <br />&nbsp;<br />Nhằm gia tăng trải nghiệm cho du khách khám phá mùa hè mát lạnh của Sa Pa, khu du lịch Sun World Fansipan Legend tổ chức mùa giải “Vó ngựa trên mây” bài bản, quy mô trong suốt một tuần. Xen kẽ giữa những vòng đua kịch tính của các nài ngựa Tây Bắc là những tiết mục trình diễn nghệ thuật, diễu hành ngựa… hứa hẹn mang đến cho du khách không khí lễ hội sôi động, hấp dẫn bậc nhất hè này.',
    img: 'https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/SUN%20WORLD%20FANSIPAN%20LEGEND/%C4%90%C4%83ng%20B%C3%A0i/8445/image-thumb__8445__image-thumbnail/Gi%E1%BA%A3i%20V%C3%B3%20ng%E1%BB%B1a%20tr%C3%AAn%20m%C3%A2y%202022%20%2819%29%20%281%29.jpg',
  })

  return (
    <div className='homeImprints'>
      <div className='map aos-init aos-animate' data-aos='zoom-in'>
        <div className='--img'>
          <img src='/assets/imgs/map.gif' alt='thuận phong map' />
        </div>
        <div className='marker'>
          <div className='--item'>
            <span className='--name'>Tây Ninh</span>
          </div>
          <div className='--item'>
            <img src='/assets/imgs/legendid.png' alt='thuan phong legendi' />
          </div>
          <div className='--item'>
            <img
              src='/assets/imgs/thuan-phong-logo-full.png'
              alt='thuan-phong-corp'
            />
          </div>
        </div>
      </div>
      <div className='--txt'>
        <p className='segTitle aos-init aos-animate' data-aos='fade-up'>
          Dấu ấn mỗi ngày
        </p>
        <div className='--content'>
          <h3
            className='--name aos-init aos-animate'
            data-aos='fade-up'
            data-aos-delay={100}
          />
          <article
            data-aos='fade-up'
            data-aos-delay={100}
            className='aos-init aos-animate'>
            Từ ngày 24/6 đến 2/7/2023, mùa giải “Vó ngựa trên mây” lần thứ 6 sẽ
            được tổ chức tại Sun World Fansipan Legend, đưa du khách sống lại
            nét văn hóa bản địa đặc sắc từ hàng trăm năm trước, bên cung đường
            đua rợp sắc hoa hồng.
            <br />
            &nbsp;
            <br />
            Nhằm gia tăng trải nghiệm cho du khách khám phá mùa hè mát lạnh của
            Sa Pa, khu du lịch Sun World Fansipan Legend tổ chức mùa giải “Vó
            ngựa trên mây” bài bản, quy mô trong suốt một tuần. Xen kẽ giữa
            những vòng đua kịch tính của các nài ngựa Tây Bắc là những tiết mục
            trình diễn nghệ thuật, diễu hành ngựa… hứa hẹn mang đến cho du khách
            không khí lễ hội sôi động, hấp dẫn bậc nhất hè này.
          </article>

          <a className='--link' href='/'>
            <div className='--img img_hover --link'>
              <img
                src='https://sun-ecommerce-cdn.azureedge.net/ecommerce/service-sites/thumbnail/SunGroup/Kho%20%E1%BA%A3nh%20chung/HR%20-%20MO%CC%82I%20TRU%CC%9BO%CC%9B%CC%80NG%20LA%CC%80M%20VIE%CC%A3%CC%82C/363/image-thumb__363__image-thumbnail/Ba%CC%89n%20sao%20cu%CC%89a%20Ta%CC%A3%CC%82p%20%C4%91oa%CC%80n%20Sun%20Group%20nha%CC%A3%CC%82n%20gia%CC%89i%20ta%CC%A3i%20Vietnam%20HR%20Awards%202020%20%20%282%29.jpg'
                alt={'thuan phong tp'}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
