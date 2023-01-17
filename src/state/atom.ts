import { atom } from "recoil"
import { localStorageEffect } from "./effects"
import { typeNotifications, typeReadingCard } from "../utils/types"

export const readingCards = atom({
  key: 'readingCards',
  default: [] as typeReadingCard[],
  effects: [
    localStorageEffect('readingCards'),
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
