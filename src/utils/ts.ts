import { typeOfOneindicator, typeReadingCard } from "./types";

export const classNames = (...classes: any) => classes.filter(Boolean).join(' ')



export const countWords = (str: string): number => {
  str = str.replace(/(^\s*)|(\s*$)/gi,"");
  str = str.replace(/[ ]{2,}/gi," ");
  str = str.replace(/\n /,"\n");
  return str.split(' ').length;
}

export const changeCard = (arrayWidthAllCards: typeReadingCard[], currentCardId: string, newCard: typeReadingCard) => {
  const arrWithoutCard = arrayWidthAllCards.filter(el => el.id !== currentCardId)
  const updatedArr = arrWithoutCard.concat(newCard)
  return updatedArr
}

export const deleteCard = (arrayWidthAllCards: typeReadingCard[], currentCardId: string) => (
  arrayWidthAllCards.filter(el => el.id !== currentCardId)
)

export const changeCollection = (selected: typeOfOneindicator, cards: typeReadingCard[]): typeReadingCard[] => {
  switch (selected) {
    case 'favorits':
      return cards.filter(el => el.indicators.includes('favorits'))
    case 'unread':
      return cards.filter(el => el.indicators.includes('unread'))
    case 'read':
      return cards.filter(el => el.indicators.includes('read'))
    default:
      return cards
  }
}