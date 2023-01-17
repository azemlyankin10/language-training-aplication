import { useSetRecoilState } from "recoil"
import { readingCards } from "../../../../state/atom"
import { changeCard } from "../../../../utils/ts"
import { typeReadingCard } from "../../../../utils/types"

export const BtnRead = ({card}: {card: typeReadingCard}) => {
  const setReadingCards = useSetRecoilState(readingCards)

  const onClickHandler = () => {
    const indicators = card.indicators.filter(el => el !== 'unread').concat('read')
    const newCard: typeReadingCard = { ...card, indicators }
    setReadingCards(old => changeCard(old, card.id, newCard))
  }
  if (!card.indicators.includes('unread')) {
    return null
  }
  return (
    <button 
      onClick={onClickHandler}
      type="button" 
      className="mt-4 mx-auto block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
    >
      mark as read
    </button>
  )
}