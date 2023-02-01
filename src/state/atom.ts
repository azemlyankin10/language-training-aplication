import { atom } from "recoil"
import { localStorageEffect } from "./effects"
import {addedWord, typeNotifications, typeReadingCard, typeStat } from "../utils/types"

export const readingCards = atom({
  key: 'readingCards',
  default: [] as typeReadingCard[],
  effects: [
    localStorageEffect('readingCards'),
  ]
})

export const learnWords = atom({
  key: 'learnWords',
  default: [] as addedWord[],
  effects: [
    localStorageEffect('learnWords'),
  ]
})

export const statsState = atom({
  key: 'statsState',
  default: [] as typeStat[],
  effects: [
    localStorageEffect('statsState'),
  ]
})

export const notificationCollection = atom({
  key: 'notificationCollection',
  default: [] as typeNotifications[]
})

export const settingsState = atom({
  key: 'settingsState',
  default: {
    originalLang: {id: "PYnOgWrsj9c1zrrydqY9H", lang: "en-US", name: "Google US English", trueName: 'English'},
    translatedLang: {id: "xvyj0HTdPVaarLo0jHpD8", lang: "uk-UA", name: "Леся", trueName: 'Ukrainian'},
    voiceLang: {id: "PYnOgWrsj9c1zrrydqY9H", lang: "en-US", name: "Google US English", trueName: 'English'}
  },
  effects: [
    localStorageEffect('settings'),
  ]
})

export const scoreSettingsState = atom({
  key: 'scoreSettingsState',
  default: {
    howManyNeedToCompleteWord: 10,
    wordQuizScore: 0.5,
    flashCardScore: 1
  },
  effects: [
    localStorageEffect('scoreSettingsState'),
  ]
})