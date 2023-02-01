import { useState } from 'react'
import { useSwiper } from 'swiper/react'
import { useSpeechSynthesis } from '../../../../utils/Hooks/useSpeechSynthesis'
import { typeFlipCard } from '../../../../utils/types'
import { FlipCardContainer } from './FlipCardContainer'



export const FlipCard = ({ word, translation, img, knowWord, dontKnowWord}:typeFlipCard) => {
  const { speak } = useSpeechSynthesis()
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isDisableBtn, setIsDisableBtn] = useState(false)
  const swiper = useSwiper()

  
  const handleClick = () => { 
    setIsFlipped(!isFlipped)    
  }

  const controlBtnHandler = () => {
    setIsAnswered(true)
    handleClick()
    setIsDisableBtn(true)
    speak(word)
    setTimeout(() => {
      swiper.slideNext()
    }, 1000)
  }


  return (
    <FlipCardContainer 
      isFlipped={isFlipped} 
      isDisabledBtnKnowAndDontKnow={isDisableBtn} 
      speakBtn={() => { 
        speak(word) 
      }} 
      handleCardClick={() => {
        isAnswered && handleClick()
      }} 
      word={word} 
      translation={translation} 
      img={img} 
      knowBtnHandler={() => {
        controlBtnHandler()
        knowWord()
      }} 
      dontKnowBtnHandler={() => {
        controlBtnHandler()
        dontKnowWord()
      }}    
    />
  )
}

