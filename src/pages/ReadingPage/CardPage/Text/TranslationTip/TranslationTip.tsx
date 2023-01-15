import { Tip } from "../../../../../components/Tip/Tip"
import { position } from "../../../../../utils/types"
import { useEffect, useState } from "react"
import { translate } from "../../../../../utils/ts"


export const TranslationTip = ({position, word, onClose}: {position: position, word: string, onClose: () => void}) => {
  const [translation, setTranslation] = useState('')
  
  // useEffect(() => {
  //   (async() => {
  //     if (word.length > 0) {
  //       const translated = await translate({word, fromLang: 'en', toLang: 'ru'})
  //       setTranslation(translated)
  //     }
  //   })()  
  // }, [word])

  return (
    <Tip position={position} onClose={onClose}>
      <div className="px-3 py-2">
        <p>{word}</p>
        <hr className="h-px my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <p>{translation}</p>
      </div>
      <div className="px-3 py-1 bg-gray-100 border-t border-gray-200 rounded-b-lg">
        <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center">
          Add word
        </button>
      </div>
    </Tip>
  )
}