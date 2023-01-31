import { SwiperSlide } from 'swiper/react';
import { FlipCard } from './FlipCard/FlipCard';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getLearnWords } from '../../../state/selector';
import { learnWords } from '../../../state/atom';
import { addStatToWord } from '../../../utils/ts';
import { useState } from 'react';
import { VocabularyStat } from './VocabularyStat/VocabularyStat';
import { TaskLayout } from '../../../components/TaskLayout/TaskLayout';


export const VocabularyCardsPage = () => {
  const { words } = useRecoilValue(getLearnWords) 
  const setLearnWordsState = useSetRecoilState(learnWords)
  const [countTasks, setCountTasks] = useState(words.length)
  const [stat, setStat] = useState({
    know: 0,
    dontKnow: 0
  })

  const knowWord = (wordId: string, cardId: string) => {
    setLearnWordsState(old => addStatToWord(old, wordId, cardId)(1, '+'))

    setStat({ ...stat, know: stat.know + 1 })

    setTimeout(() => {
      setCountTasks(countTasks - 1)
    }, 1000)
  }
  
  const dontKnowWord = (wordId: string, cardId: string) => {
    setLearnWordsState(old => addStatToWord(old, wordId, cardId)(1, '-'))

    setStat({ ...stat, dontKnow: stat.dontKnow + 1 })

    setTimeout(() => {
      setCountTasks(countTasks - 1)
    }, 1000)
  }
  
  return (
    <div className="mx-auto max-w-7xl py-20 sm:px-6 lg:px-8 h-5/6">
      
      <TaskLayout 
        isPlay={countTasks > 0} 
        swiperSlides={
          words?.map(({word, translation, id, img, addedFrom}) => (
            <SwiperSlide key={id}>

              <FlipCard
                img={img}
                word={word} 
                translation={translation}
                knowWord={() => { knowWord(id, addedFrom) }}
                dontKnowWord={() => { dontKnowWord(id, addedFrom) }}
              />

            </SwiperSlide>
          ))
        }
        finishTaskReactNode={<VocabularyStat stat={stat}/>} 
      />
    </div>
  )
}