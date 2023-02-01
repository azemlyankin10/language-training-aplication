import { addedWord, typeOfOneindicator, typeReadingCard, typeStat } from "./types";
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
    case 'favorit':
      return cards.filter(el => el.indicators.includes('favorit'))
    case 'unread':
      return cards.filter(el => el.indicators.includes('unread'))
    case 'read':
      return cards.filter(el => el.indicators.includes('read'))
    default:
      return cards
  }
}


const client = createClient('tR8Ojw9e9kvkpc4Nvm7B3dFPtvxErwvbTDRR6OPEpPjnQRuDPcaBwl9t');
export const getPhoto = async(keyWord: string) => {
  const query = keyWord
  try {
    const res = await client.photos.search({ query, per_page: 1 }) as any
    return res.photos[0].src.medium
  } catch (error) {
    console.log(error);
    return 'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'
  }
}

export const setNewParamInLearnWord = (oldArray: addedWord[], wordId: string, cardId: string, newItem: addedWord) => {
  const arrayCopy = [...oldArray]
  const index = arrayCopy.findIndex(el => (el.addedFrom === cardId && el.id === wordId))
  arrayCopy.splice(index, 1, newItem);
  return arrayCopy
}


export const addStatToWord = (oldArray: addedWord[], wordId: string, cardId: string) => (howManyAdd: number, operator: '-' | '+') => {
    const item = oldArray.find(el => (el.addedFrom === cardId && el.id === wordId)) 
    if (item) {
      if (item.knowWord > 0 && operator === '-') {
        const newItem = {...item, knowWord: item.knowWord - howManyAdd}
        return setNewParamInLearnWord(oldArray, wordId, cardId, newItem)
      }
      if (operator === '+') {
        const newItem = {...item, knowWord: item.knowWord + howManyAdd}
        return setNewParamInLearnWord(oldArray, wordId, cardId, newItem)
      }
    }
    return oldArray
}

export const changeStatistic = (sessionId: string, selectedWord: string, allArray: typeStat[], card: addedWord, operator: '-' | '+', indexIncrementStat: number) => {
  const copyOfArray = [...allArray]
  const oneCard = copyOfArray.find(el => el.sessionId === sessionId)
  if (!oneCard) {
    return copyOfArray
  }
  const index = copyOfArray.findIndex(el => el.sessionId === sessionId)
  
  if (operator === '+') {
    const changedtrueCard = {...card, selectedWord, knowWord: card.knowWord + indexIncrementStat}
    const newCard = { ...oneCard, trueCards: [...oneCard.trueCards, changedtrueCard]}
    copyOfArray.splice(index, 1, newCard)
  } 
  if (operator === '-') {
    let count = card.knowWord 
    if (card.knowWord > 0) {
      count = card.knowWord - indexIncrementStat
    }
    const changedFalseCard = {...card, selectedWord, knowWord: count}

    const newCard = { ...oneCard, falseCards: [...oneCard.falseCards, changedFalseCard]}
    copyOfArray.splice(index, 1, newCard)
  }
  return copyOfArray
}

export const shuffleArray = (
  array: any[]) => array.sort(() => Math.random() - 0.5
)

export const getProcent = (num: number, allNum: number) => {
  if (allNum === 0) return 0
  return Number((num / allNum * 100).toFixed(1))
}