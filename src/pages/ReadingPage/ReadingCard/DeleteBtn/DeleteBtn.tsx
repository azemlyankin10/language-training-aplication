import { useSetRecoilState } from "recoil"
import { readingCards } from "../../../../state/atom"
import { deleteCard } from "../../../../utils/ts"
import { typeReadingCard } from "../../../../utils/types"

export const DeleteBtn = ({card}: {card: typeReadingCard}) => {
  const setReadingCards = useSetRecoilState(readingCards)
  const onClickHandler = () => {
    setReadingCards(old => deleteCard(old, card.id))
  }
  // TODO: add modal window
  return (
    <button 
      onClick={onClickHandler}
      type="button" 
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5"
    >
      Delete
    </button>
  )
}