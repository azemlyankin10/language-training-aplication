import ReactCardFlip from "react-card-flip"
import icon from '../../../../img/speak-icon.svg'
import { typeFlipCardContainer } from "../../../../utils/types"


const style = {
  button: 'h-96 w-full flex justify-center items-center text-8xl bg-indigo-50 flex-col',
  controlBtn: 'flex justify-center items-center border-gray-50 px-9 py-2 border-2 w-full bg-purple-400'
}

export const FlipCardContainer = ({
  isFlipped, 
  speakBtn, 
  handleCardClick, 
  word, 
  translation, 
  img, 
  knowBtnHandler, 
  dontKnowBtnHandler, 
  isDisabledBtnKnowAndDontKnow
}: typeFlipCardContainer) => (
  <div>
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div
          onClick={handleCardClick}
          className={style.button}
        >
          <img 
            style={{width: 200, height: 150}}
            src={img} 
            alt="photo_of_word" 
          />
          {word}
          <button type="button" 
            onClick={(e) => {
              e.stopPropagation()
              speakBtn()
            }}
           >
            <img className='ml-5 mt-5' width='50px' src={icon} alt="speak icon" />
          </button>
        </div>

        <button 
          onClick={handleCardClick}
          className={style.button}
        >
          {translation}
        </button>
      </ReactCardFlip>
      <div className="flex justify-between items-center">
        <button 
          disabled={isDisabledBtnKnowAndDontKnow}
          onClick={dontKnowBtnHandler}
          className={style.controlBtn}
        >
          I do not know
        </button>
        <button 
          disabled={isDisabledBtnKnowAndDontKnow}
          onClick={knowBtnHandler}
          className={style.controlBtn}
        >
          I know
        </button>
      </div>
  </div>
)