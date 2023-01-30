export type typeOfOneindicator = 'all' | 'favorits' | 'unread' | 'read'


export type typeIndicators = Array<typeOfOneindicator>


export type typeSelectOption = {
  id: number,
  value: typeOfOneindicator 
}

export type typeOptions = typeSelectOption[]

export type typeSelect = {
  options: typeSelectOption[]
  selected: typeSelectOption
  setSelected: (selected: typeSelectOption) => void
}

export type addedWord = {
  addedFrom: string,
  id: string,
  word: string, 
  translation: string
  knowWord: number,
  dontKnowWord: number,
  studied: boolean,
  img: string,
}

export type typeReadingCard = {
  id: string
  text: string
  indicators: typeIndicators
  // addedWords?: addedWord[]
}

export type position = {x: number, y: number}

export type typeToast = 'success' | 'deleted'

export type typeNotifications = {
  id: string
  type: typeToast
  text: string
}

export type typeLang = {
  id: string
  voiceURI: string
  name: string
  lang: string
  localService: boolean 
  default: boolean
  selected: boolean
}

export type typeCard = {
  title: string
  desc: string
  link: string
  img: string
}

// export type learnedWord = {
//   word: string,
//   translated: string,
//   knowWord: number,
//   dontKnowWord: number,
//   studied: boolean,
//   // img?: string,
// }