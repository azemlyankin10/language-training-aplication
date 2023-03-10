import { Tip } from "../../../../components/Tip/Tip"
import { position, typeReadingCard } from "../../../../utils/types"
import { useEffect, useState } from "react"
import { countWords, getPhoto } from "../../../../utils/ts"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { learnWords, settingsState } from "../../../../state/atom"
import { useTranslate } from "../../../../utils/Hooks/useTranslate"
import { useSpeechSynthesis } from "../../../../utils/Hooks/useSpeechSynthesis"
import iconSpeak from '../../../../img/speak-icon.svg'
import { nanoid } from "nanoid"

export const TranslationTip = ({ card, position, word, onClose}: { card: typeReadingCard, position: position, word: string, onClose: () => void}) => {
  const [translation, setTranslation] = useState('')
  const setLearnedWords = useSetRecoilState(learnWords)
  const { originalLang, translatedLang } = useRecoilValue(settingsState)
  const { translate } = useTranslate()
  const { speak } = useSpeechSynthesis()

  useEffect(() => {
    (async() => {
      if (word.length > 0) {
        const translated = await translate(word, originalLang.lang, translatedLang.lang)
        setTranslation(translated)
      }
    })()  
  }, [originalLang.lang, translate, translatedLang.lang, word])


  const addNewWord = async () => {
    const photo = await getPhoto(word)
    
    const newWord = { 
      addedFrom: card.id,
      word, 
      translation, 
      id: nanoid(), 
      knowWord: 0,
      dontKnowWord: 0,
      studied: false,
      img: photo
    }
    setLearnedWords(old => (
      [...old, newWord]
    ))
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