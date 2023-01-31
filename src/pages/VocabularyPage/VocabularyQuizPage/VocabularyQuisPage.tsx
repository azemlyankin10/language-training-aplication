import { useRecoilValue } from "recoil"
import { SwiperSlide } from "swiper/react"
import { Quiz } from "./Quiz/Quiz"
import { TaskLayout } from "../../../components/TaskLayout/TaskLayout"
import { getLearnWords } from "../../../state/selector"
import { useState } from "react"
import { useCreateStatInstanse } from "../../../utils/Hooks/useCreateStatInstanse"

export const VocabularyQuizPage = () => {
  const { words } = useRecoilValue(getLearnWords) 
  const [slideCount, setSlideCount] = useState(words.length)
  const { session, currentStat } = useCreateStatInstanse({name: 'quiz'})
  
  return (
    <div className="mx-auto max-w-7xl py-20 sm:px-6 lg:px-8 h-5/6">
      {currentStat && <div><p>{currentStat?.trueCards.length + currentStat?.falseCards.length}</p><p>{words.length}</p></div>} 
      <TaskLayout 
        isPlay={slideCount > 0} 
        swiperSlides={
          words?.map(word => (
            <SwiperSlide key={word.id}>
              <Quiz word={word} changeTaskHandler={() => { setSlideCount(slideCount - 1) }} />
            </SwiperSlide>
          ))
        }
        finishTaskReactNode={<p>end</p>} 
      />
    </div>
  )
}



