import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useRecoilValue } from "recoil"
import { Indicators } from "../../components/Indicators/Indicators"
import { readingCards } from "../../state/atom"
import { typeReadingCard } from "../../utils/types"
import { AddedWordsBtn } from "./AddedWordsBtn/AddedWordsBtn"
import { BtnFavorit } from "./BtnFavorit/BtnFavorit"
import { BtnRead } from "./BtnRead/BtnRead"
import { Text } from "./Text/Text"

export const ReadingCardPage = () => {
  const { id } = useParams()
  const cards = useRecoilValue(readingCards)
  const [currentCard, setCurrentCard] = useState<typeReadingCard>()

  useEffect(() => {
    const card = cards.find(el => el.id === id)
    setCurrentCard(card)
  }, [cards, id])

  if (!currentCard) return <></>
  return (
    <div className="mx-auto max-w-5xl py-6 sm:px-6 lg:px-8">
      <div className="flex my-6 items-center">
        <Indicators kindsOfIndicators={currentCard.indicators} />
        <BtnFavorit card={currentCard} />
        <AddedWordsBtn currentCard={currentCard} />
      </div>
      <Text card={currentCard} />
      <BtnRead card={currentCard} />
    </div>
  )
}