import { SwiperSlide } from 'swiper/react';
import { FlipCard } from './FlipCard/FlipCard';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { getLearnWords } from '../../../state/selector';
import { learnWords, scoreSettingsState, statsState } from '../../../state/atom';
import { addStatToWord, changeStatistic } from '../../../utils/ts';
import { useState } from 'react';
import { TaskLayout } from '../../../components/TaskLayout/TaskLayout';
import { useCreateStatInstanse } from '../../../utils/Hooks/useCreateStatInstanse';
import { QuizEndPage } from '../../../components/QuizEndPage/QuizEndPage';
import { addedWord } from '../../../utils/types';


export const VocabularyCardsPage = () => {
  const { flashCardScore } = useRecoilValue(scoreSettingsState)
  const { words } = useRecoilValue(getLearnWords) 
  const setLearnWordsState = useSetRecoilState(learnWords)
  const [countTasks, setCountTasks] = useState(words.length)
  const { session } = useCreateStatInstanse({name: 'cards'})
  const setStatistic = useSetRecoilState(statsState)

  const knowWord = (word: addedWord, wordId: string, cardId: string) => {
    setLearnWordsState(old => addStatToWord(old, wordId, cardId)(flashCardScore, '+'))
    setStatistic(old => changeStatistic(session, '', old, word, '+', flashCardScore))

    setTimeout(() => {
      setCountTasks(countTasks - 1)
    }, 1000)
  }
  
  const dontKnowWord = (word: addedWord, wordId: string, cardId: string) => {
    setLearnWordsState(old => addStatToWord(old, wordId, cardId)(flashCardScore, '-'))
    setStatistic(old => changeStatistic(session, '', old, word, '-', flashCardScore))

    setTimeout(() => {
      setCountTasks(countTasks - 1)
    }, 1000)
  }
  
  return (
    <div className="mx-auto max-w-7xl py-20 sm:px-6 lg:px-8 h-5/6">
      
      <TaskLayout 
        isPlay={countTasks > 0} 
        swiperSlides={
          words?.map((word) => (
            <SwiperSlide key={word.id}>

              <FlipCard
                img={word.img}
                word={word.word} 
                translation={word.translation}
                knowWord={() => { knowWord(word, word.id, word.addedFrom) }}
                dontKnowWord={() => { dontKnowWord(word, word.id, word.addedFrom) }}
              />

            </SwiperSlide>
          ))
        }
        finishTaskReactNode={<QuizEndPage session={session} />} 
      />
    </div>
  )
}