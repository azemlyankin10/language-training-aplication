import { atom } from "recoil"
import { localStorageEffect } from "./effects"
import { typeReadingCard } from "../utils/types"

export const readingCards = atom({
  key: 'readingCards',
  default: [] as typeReadingCard[],
  effects: [
    localStorageEffect('readingCards'),
  ]
})

