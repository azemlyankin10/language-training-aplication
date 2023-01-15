import { useState } from "react"
import { position } from "../../../../utils/types"
import { TranslationTip } from "./TranslationTip/TranslationTip"

export const Text = ({text}: {text: string}) => {
  const [wordPosition, setWordPosition] = useState<position>({x: 0, y: 0})
  const [wordToTranslate, setWordToTranslate] = useState('')
  const [isTip, setIsTip] = useState(false)
  
  const getSelectedText = (e: any) => {
    const selected = window.getSelection() as Selection
    const selectedText = selected.toString()
    if(selectedText.length > 0) {
      setWordPosition({ x: e.clientX, y: e.clientY })
      setWordToTranslate(selectedText)
      setIsTip(true)
    }
  }
  //TODO: Make to close translation tip 
  return (
    <>
      <p 
        onMouseUp={getSelectedText}
        className="font-light text-gray-800"
      >
        {text}
      </p>
      {
        isTip && (
          <TranslationTip 
            position={wordPosition} 
            word={wordToTranslate}
            onClose={() => setIsTip(false)}
          />
        )
      }
    </>
  )
}