import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { learnWords } from "../../../state/atom";
import { addedWord, typeReadingCard } from "../../../utils/types";
import { DrawerBtnReading } from "./DrawerBtnReading/DrawerBtnReading";

export const AddedWordsBtn = ({currentCard}: {currentCard: typeReadingCard}) => {
  const [isOpen, setIsOpen] = useState(false)
  const words = useRecoilValue(learnWords)
  const [addedWords, setAddedWords] = useState<addedWord[]>([])

  useEffect(() => {
    const filteredWords = words.filter(el => el.addedFrom === currentCard.id)
    setAddedWords(filteredWords)
  },[currentCard.id, words])

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button 
        type="button" 
        className="ml-auto block items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300"
        onClick={onOpen}
      >
        Added words
        {addedWords && (
          <span className="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-purple-800 bg-purple-200 rounded-full">
            {addedWords?.length}
          </span>
        )}
      </button>

      { isOpen && <DrawerBtnReading addedWords={addedWords} onClose={onClose} /> }
    </>
  )
}