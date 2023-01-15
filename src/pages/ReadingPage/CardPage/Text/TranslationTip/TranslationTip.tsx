import { Tip } from "../../../../../components/Tip/Tip"
import { position, typeReadingCard } from "../../../../../utils/types"
import { useEffect, useState } from "react"
import { countWords, translate } from "../../../../../utils/ts"
import { useSetRecoilState } from "recoil"
import { readingCards } from "../../../../../state/atom"


export const TranslationTip = ({ card, position, word, onClose}: { card: typeReadingCard, position: position, word: string, onClose: () => void}) => {
  const [translation, setTranslation] = useState('')
  const setReadingCards = useSetRecoilState(readingCards)

  useEffect(() => {
    (async() => {
      if (word.length > 0) {
        const translated = await translate({word, fromLang: 'en', toLang: 'ru'})
        setTranslation(translated)
      }
    })()  
  }, [word])


  const addNewWord = () => {
    const newCard = {...card, addedWords: card.addedWords?.concat(word)}
    setReadingCards(old => {
      const arrWithoutCard = old.filter(el => el.id !== card.id)
      const updatedArr = arrWithoutCard.concat(newCard)
      return updatedArr
    })
    onClose()
  }

  return (
    <Tip position={position} onClose={onClose}>
      <div className="px-3 py-2">
        <p>{word}</p>
        <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p>{translation}</p>
      </div>
      <div className="px-3 py-1 bg-gray-100 border-t border-gray-200 rounded-b-lg">
        <button 
          type="button" 
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center"
          onClick={addNewWord}  
        >
          {countWords(word) > 2 ? 'Add sentense' : 'Add word'}
        </button>
      </div>
    </Tip>
  )
}