import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { FlipCard } from './FlipCard/FlipCard';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getLearnWords } from '../../../state/selector';
import { learnWords } from '../../../state/atom';
import { setNewParamInLearnWord } from '../../../utils/ts';
import { useState } from 'react';
import { VocabularyStat } from './VocabularyStat/VocabularyStat';



export const VocabularyCardsPage = () => {
  const { words } = useRecoilValue(getLearnWords) 
  const setLearnWordsState = useSetRecoilState(learnWords)
  const [countSlides, setCountSlides] = useState(words.length)
  const [stat, setStat] = useState({
    know: 0,
    dontKnow: 0
  })

  const knowWord = (wordId: string, cardId: string) => {
    setLearnWordsState(old => {
      const item = old.find(el => (el.addedFrom === cardId && el.id === wordId)) 
      if (item) {
        const newItem = {...item, knowWord: item?.knowWord + 1}
        return setNewParamInLearnWord(old, wordId, cardId, newItem)
      }
      return old
    })

    setStat({ ...stat, know: stat.know + 1 })

    setTimeout(() => {
      setCountSlides(countSlides - 1)
    }, 1000)
  }
  
  const dontKnowWord = (wordId: string, cardId: string) => {
    setLearnWordsState(old => {
      const item = old.find(el => (el.addedFrom === cardId && el.id === wordId)) 
      if (item) {
        if (item.knowWord > 0) {
          const newItem = {...item, knowWord: item.knowWord - 1}
          return setNewParamInLearnWord(old, wordId, cardId, newItem)
        }
      }
      return old
    })

    setStat({ ...stat, dontKnow: stat.dontKnow + 1 })

    setTimeout(() => {
      setCountSlides(countSlides - 1)
    }, 1000)
  }
  
  return (
    <div className="mx-auto max-w-7xl py-20 sm:px-6 lg:px-8 h-5/6">
      {
      countSlides > 0
        ? (
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={15}
          slidesPerView={1}
          scrollbar={{ draggable: false }}
          allowTouchMove={false}
        >
          {words?.map(({word, translation, id, img, addedFrom}) => (
            <SwiperSlide key={id}>
  
              <FlipCard
                img={img}
                word={word} 
                translation={translation}
                knowWord={() => { knowWord(id, addedFrom) }}
                dontKnowWord={() => { dontKnowWord(id, addedFrom) }}
              />
  
            </SwiperSlide>
          ))}
  
        </Swiper>
      )
      : <VocabularyStat stat={stat}/>
    }

    </div>
  )
}