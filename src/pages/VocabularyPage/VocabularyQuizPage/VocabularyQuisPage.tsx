import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { Quiz } from "../../../components/Quiz/Quiz"
import { notificationCollection } from "../../../state/atom"
import { getLearnWords } from "../../../state/selector"
import { useGetRandomWords } from "../../../utils/Hooks/useGetRandomWord"

export const VocabularyQuizPage = () => {
  const { isLoading, getRandomWords, randomWords } = useGetRandomWords()
  const { words } = useRecoilValue(getLearnWords) 
  const [quizSetUp, setQuizSetUp] = useState<any>({})
  const [isMounted, setIsMounted] = useState(false)
  const setNotificationCollection = useSetRecoilState(notificationCollection)
  // const [answer, setAnswer] = useState({
  //   correct: null,
  //   isAnswered: false
  // })
  
  useEffect(() => {
    if (!isMounted) {
      if (randomWords.length < 2) {
        getRandomWords()
      } 
  
      if (randomWords.length > 1) {
        setIsMounted(true)
        const answers = randomWords
          .map((el: string) => ({ word: el, id: nanoid() }))
          .concat({word: words[0].translation, id: words[0].id})
  
        setQuizSetUp({
          img: words[0].img,
          origin: words[0].word,
          secondary: shuffle(answers)
        })  
      }
    }
  }, [getRandomWords, isMounted, randomWords, words])

  const onClickHandler = (e: any) => {
    const answeredElem = e.target.id
    if (answeredElem === words[0].id) {
      setNotificationCollection(old => [...old, {id: nanoid(), type: 'success', text: 'good'}])
    } else {
      setNotificationCollection(old => [...old, {id: nanoid(), type: 'deleted', text: 'not correct'}])
    }
  }

  return (
    <div className="container mx-auto py-10 flex justify-center">
      {
        isLoading 
          ? 'loading...' 
          : <Quiz img={quizSetUp.img} origin={quizSetUp.origin} secondary={quizSetUp.secondary} handler={onClickHandler}/>
      }
    </div>
  )
}

function shuffle(array: any) {
  return array.sort(() => Math.random() - 0.5);
}

