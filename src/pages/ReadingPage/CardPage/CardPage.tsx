import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import { readingCards } from "../../../state/atom"
import { typeReadingCard } from "../../../utils/types"
import { AddedWordsBtn } from "./AddedWordsBtn/AddedWordsBtn"
import { Text } from "./Text/Text"

export const CardPage = () => {
  const { id } = useParams()
  const [cards, setCards] = useRecoilState(readingCards)
  const [currentCard, setCurrentCard] = useState<typeReadingCard>()

  useEffect(() => {
    const card = cards.find(el => el.id === id)
    setCurrentCard(card)
  }, [cards, id])

  if (!currentCard) return <></>
  return (
    <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
      <AddedWordsBtn length={currentCard.addedWords?.length} />
      <Text text={currentCard.text}/>
    </div>
  )
}