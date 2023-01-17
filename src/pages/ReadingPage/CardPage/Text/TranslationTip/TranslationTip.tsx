import { Tip } from "../../../../../components/Tip/Tip"
import { position, typeReadingCard } from "../../../../../utils/types"
import { useEffect, useState } from "react"
import { changeCard, countWords } from "../../../../../utils/ts"
import { useSetRecoilState } from "recoil"
import { readingCards } from "../../../../../state/atom"
import { useTranslate } from "../../../../../utils/Hooks/useTranslate"
import { useSpeechSynthesis } from "../../../../../utils/Hooks/useSpeechSynthesis"
import iconSpeak from '../../../../../img/speak-icon.svg'

export const TranslationTip = ({ card, position, word, onClose}: { card: typeReadingCard, position: position, word: string, onClose: () => void}) => {
  const [translation, setTranslation] = useState('')
  const setReadingCards = useSetRecoilState(readingCards)
  const { translate } = useTranslate()
  const { speak } = useSpeechSynthesis()

  useEffect(() => {
    (async() => {
      if (word.length > 0) {
        const translated = await translate(word)
        setTranslation(translated)
      }
    })()  
  }, [translate, word])


  const addNewWord = () => {
    const newCard = {...card, addedWords: card.addedWords?.concat({ word, translation })}
    setReadingCards(old => changeCard(old, card.id, newCard))
    onClose()
  }

  return (
    <Tip position={position} onClose={onClose}>
      <div className="px-3 py-2">
        <p>{word}</p>
        <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p>{translation}</p>
      </div>
      <div className="flex items-center justify-between px-3 py-1 bg-gray-100 border-t border-gray-200 rounded-b-lg">
        <button 
          disabled={!translation}
          type="button" 
          className="disabled:border-gray-400, disabled:text-gray-400 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
          onClick={addNewWord}  
        >
          {countWords(word) > 2 ? 'Add sentense' : 'Add word'}
        </button>
        <button 
          onClick={() => { speak(word) }}
          disabled={!translation}
          type="button" 
          className="text-gray-900 border-gray-800 focus:ring-4 font-medium rounded-lg text-sm px-2 text-center"
        >
          <img src={iconSpeak} alt="speak icon" />
        </button>
      </div>
    </Tip>
  )
}