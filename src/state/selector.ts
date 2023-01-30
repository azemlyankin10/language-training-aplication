import { selector } from "recoil";
import { learnWords } from "./atom";

export const getLearnWords = selector({
  key: 'getAllWords',
  get: ({get}) => {
    const words = get(learnWords)
    // setNewParamInLearnWord = (oldArray: addedWord[], wordId: string, cardId: string, newItem: addedWord)
    const checkLearnWords = words.map(el => {
      if (el.knowWord === 5) {
        return {...el, studied: true}
      }
      return el
    })
    // const removeDublicates = words.filter((v,i,a)=>a.findIndex(t=>(t.word.trim() === v.word.trim()))===i)
    return {
      words: checkLearnWords?.filter(el => !el.studied),
      learnedWords: checkLearnWords?.filter(el => el.studied)
    }
  }
})
