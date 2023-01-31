import { Scrollbar } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { ReactNode } from 'react';

export const TaskLayout = ({ isPlay, swiperSlides, finishTaskReactNode }: { isPlay: boolean, swiperSlides: ReactNode, finishTaskReactNode: ReactNode }) => {
  // const { words } = useRecoilValue(getLearnWords) 
  
  return (
    <div className="mx-auto max-w-7xl py-20 sm:px-6 lg:px-8 h-5/6">
      {
        isPlay
          ? (
          <Swiper
            modules={[Scrollbar]}
            spaceBetween={15}
            slidesPerView={1}
            scrollbar={{ draggable: false }}
            allowTouchMove={false}
          >
            {/* {words?.map(({word, translation, id, img, addedFrom}) => (
              <SwiperSlide key={id}>
    
                <FlipCard
                  img={img}
                  word={word} 
                  translation={translation}
                  knowWord={() => { knowWord(id, addedFrom) }}
                  dontKnowWord={() => { dontKnowWord(id, addedFrom) }}
                />
    
              </SwiperSlide>
            ))} */}
            {swiperSlides}
    
          </Swiper>
        )
        : finishTaskReactNode
    }

    </div>
  )
}