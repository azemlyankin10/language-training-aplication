import { addedWord, typeOfOneindicator, typeReadingCard } from "./types";
import { createClient } from 'pexels';

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

export const setNewParamInLearnWord = (oldArray: addedWord[], wordId: string, cardId: string, newItem: addedWord) => {
  const arrayCopy = [...oldArray]
  const index = arrayCopy.findIndex(el => (el.addedFrom === cardId && el.id === wordId))
  arrayCopy.splice(index, 1, newItem);
  return arrayCopy
}


const client = createClient('tR8Ojw9e9kvkpc4Nvm7B3dFPtvxErwvbTDRR6OPEpPjnQRuDPcaBwl9t');
export const getPhoto = async(keyWord: string) => {
  const query = keyWord
  try {
    const res = await client.photos.search({ query, per_page: 1 }) as any
    return res.photos[0].src.original
  } catch (error) {
    console.log(error);
  }
}