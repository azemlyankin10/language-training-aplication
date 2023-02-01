import { useRecoilValue } from "recoil"
import { SwiperSlide } from "swiper/react"
import { Quiz } from "./Quiz/Quiz"
import { TaskLayout } from "../../../components/TaskLayout/TaskLayout"
import { getLearnWords } from "../../../state/selector"
import { useEffect, useState } from "react"
import { useCreateStatInstanse } from "../../../utils/Hooks/useCreateStatInstanse"
import { QuizStatWidgets } from "./QuizStatWidgets/QuizStatWidgets"
import { QuizEndPage } from "../../../components/QuizEndPage/QuizEndPage"

export const VocabularyQuizPage = () => {
  const { words } = useRecoilValue(getLearnWords) 
  const [slideCount, setSlideCount] = useState(words.length)
  const { session, currentStat } = useCreateStatInstanse({name: 'quiz'})
  const [widgetStat, setWidgetStat] = useState({
    trueAnswers: 0,
    falseAnswers: 0,
    all: words.length
  })

  useEffect(() => {
    if (currentStat) {
      setWidgetStat({
        ...widgetStat, 
        trueAnswers: currentStat.trueCards.length, 
        falseAnswers: currentStat.falseCards.length
      })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStat, slideCount])

  return (
    <div className="mx-auto max-w-7xl py-10 sm:px-6 lg:px-8 h-5/6">
      <QuizStatWidgets 
        trueAnswers={widgetStat.trueAnswers} 
        falseAnswers={widgetStat.falseAnswers}
        all={words.length}
      />
      <TaskLayout 
        isPlay={slideCount > 0} 
        swiperSlides={
          words?.map(word => (
            <SwiperSlide key={word.id}>
              <Quiz session={session} word={word} changeTaskHandler={() => { setSlideCount(slideCount - 1) }} />
            </SwiperSlide>
          ))
        }
        finishTaskReactNode={<QuizEndPage session={session}/>} 
      />
    </div>
  )
}



