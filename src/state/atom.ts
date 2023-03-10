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
    originalLang: {id: "ZNt6drUmXrhdfY8cEMpKf", lang: "en-US", name: "Альберт"},
    translatedLang: {id: "bp4EyggMTVp97qBYbyMTd", lang: "uk-UA", name: "Леся"},
    voiceLang: {id: "ZNt6drUmXrhdfY8cEMpKf", lang: "en-US", name: "Альберт"}
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