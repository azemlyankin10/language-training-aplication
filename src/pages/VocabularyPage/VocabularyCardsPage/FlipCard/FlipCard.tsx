import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { useSwiper } from 'swiper/react';
import icon from '../../../../img/speak-icon.svg'
import { useSpeechSynthesis } from '../../../../utils/Hooks/useSpeechSynthesis';

export const FlipCard = ({ word, translation, img, knowWord, dontKnowWord}: { word: string, translation: string, img: string, knowWord: () => void, dontKnowWord: () => void}) => {
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

  const style = {
    button: 'h-96 w-full flex justify-center items-center text-8xl bg-indigo-50 flex-col',
    controlBtn: 'flex justify-center items-center border-gray-50 px-9 py-2 border-2 w-full bg-purple-400'
  }
  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          <div
            onClick={() => {
              isAnswered && handleClick()
            }}
            className={style.button}
          >
            <img 
              style={{width: 200, height: 150}}
              src={img} 
              alt="photo_of_word" 
            />
            {word}
            <button 
              onClick={(e) => {
                e.stopPropagation()
                speak(word)
              }}
            >
              <img className='ml-5 mt-5' width='50px' src={icon} alt="speak icon" />
            </button>
          </div>

          <button 
            onClick={() => {
              isAnswered && handleClick()
            }}
            className={style.button}
          >
            {translation}
          </button>
        </ReactCardFlip>
        <div className="flex justify-between items-center">
          <button 
            disabled={isDisableBtn}
            onClick={() => {
              controlBtnHandler()
              dontKnowWord()
            }}
            className={style.controlBtn}
          >
            I do not know
          </button>
          <button 
            disabled={isDisableBtn}
            onClick={() => {
              controlBtnHandler()
              knowWord()
            }}
            className={style.controlBtn}
          >
            I know
          </button>
        </div>
    </div>
  )
}

