import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { typeTaskLayout } from '../../utils/types'


export const TaskLayout = ({ isPlay, swiperSlides, finishTaskReactNode }: typeTaskLayout) => (
  <div className="mx-auto max-w-7xl py-10 sm:px-6 lg:px-8 h-5/6">
    {
      isPlay
        ? (
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          allowTouchMove={false}
        >

          {swiperSlides}
  
        </Swiper>
      )
      : finishTaskReactNode
    }
  </div>
)