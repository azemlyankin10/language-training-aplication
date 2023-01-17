import { useSetRecoilState } from 'recoil'
import icon from '../../../img/star-symbol-icon.svg'
import { readingCards } from '../../../state/atom'
import { changeCard } from '../../../utils/ts'
import { typeReadingCard } from '../../../utils/types'

export const BtnFavorit = ({card}: {card: typeReadingCard}) => {
  const setReadingCards = useSetRecoilState(readingCards)

  const onClickHandler = () => {
    if (card.indicators.includes('favorits')) {
      const newCard: typeReadingCard = { ...card, indicators: card.indicators.filter(el => el !== 'favorits') }
      setReadingCards(old => changeCard(old, card.id, newCard))
    } else {
      const newCard: typeReadingCard = { ...card, indicators: card.indicators.concat('favorits') }
      setReadingCards(old => changeCard(old, card.id, newCard))
    }
  }

  return (
    <button 
      onClick={onClickHandler}
      className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
    >
    <span className="relative p-2 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
      <img src={icon} alt="mark favorit" />
    </span>
  </button>
  )
}