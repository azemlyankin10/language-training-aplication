import { nanoid } from "nanoid"
import { useState, useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { useSwiper } from "swiper/react"
import { learnWords, notificationCollection, statsState } from "../../../../state/atom"
import { useGetRandomWords } from "../../../../utils/Hooks/useGetRandomWord"
import { useSpeechSynthesis } from "../../../../utils/Hooks/useSpeechSynthesis"
import { addStatToWord, changeStatistic, shuffleArray } from "../../../../utils/ts"
import { typeQuiz } from "../../../../utils/types"
import { QuizContainer } from "./QuizContainer"
import { ClockLoader } from "react-spinners"

export const Quiz = ({word, changeTaskHandler}:typeQuiz) => {
  const [isAnswered, setIsAnswered] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { isLoading, getRandomWords } = useGetRandomWords()
  const setNotificationCollection = useSetRecoilState(notificationCollection)
  const setLearnWordsState = useSetRecoilState(learnWords)
  const swiper = useSwiper()
  const { speak } = useSpeechSynthesis()
  const setStatistic = useSetRecoilState(statsState)
  const [quizSetUp, setQuizSetUp] = useState({
    img: '',
    origin: '',
    secondary: ['']
  })

  const upload = async () => {
    if (isMounted) return
    setIsMounted(true)
    const words = await getRandomWords()
    const answers = words.concat(word.translation)
    setQuizSetUp({
      img: word.img,
      origin: word.word,
      secondary: shuffleArray(answers)
    })  
  }
  

  useEffect(() => {
    upload()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onClickHandler = (e: React.MouseEvent<HTMLElement>, wordId: string, cardId: string) => {
    setIsAnswered(true)
    const answeredElem = (e.target as HTMLButtonElement).textContent
    if (answeredElem === word.translation) {
      setLearnWordsState(old => addStatToWord(old, wordId, cardId)(0.5, '+'))
      setNotificationCollection(old => [...old, {id: nanoid(), type: 'success', text: 'good'}])
      setStatistic(old => changeStatistic(old, word, '+'))
    } else {
      setLearnWordsState(old => addStatToWord(old, wordId, cardId)(0.5, '-'))
      setNotificationCollection(old => [...old, {id: nanoid(), type: 'deleted', text: 'not correct'}])
      setStatistic(old => changeStatistic(old, word, '-'))
    }

    speak(word.word)

    setTimeout(() => {
      changeTaskHandler()
      swiper.slideNext()
    }, 1000)
  }

  if (isLoading) {
    return <ClockLoader
        color='#fff'
        cssOverride={{
          display: 'block',
          margin: '30px auto 0 auto',
        }}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
  }
  return (
    <QuizContainer 
      word={word} 
      quizSetUp={quizSetUp} 
      isAnswered={isAnswered} 
      onClickHandler={onClickHandler}      
    />
  )
}